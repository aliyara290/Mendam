"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPublicGroups = exports.joinGroup = exports.leaveGroup = exports.updateMemberRole = exports.removeMemberFromGroup = exports.addMemberToGroup = exports.getChatGroupDetails = exports.getUserChatGroups = exports.createChatGroup = void 0;
const ChatGroupModel_1 = require("../models/ChatGroupModel");
const UserModel_1 = require("../models/UserModel");
const createChatGroup = async (req, res) => {
    try {
        const { name, description, isPrivate = false, maxMembers = 100 } = req.body;
        const createdBy = req.user.id;
        const chatGroup = new ChatGroupModel_1.ChatGroup({
            name,
            description,
            isPrivate,
            maxMembers,
            createdBy
        });
        await chatGroup.save();
        const groupMember = new ChatGroupModel_1.ChatGroupMember({
            userId: createdBy,
            chatGroupId: chatGroup._id,
            role: 'admin'
        });
        await groupMember.save();
        await chatGroup.populate('createdBy', 'username fullName avatar');
        res.status(201).json({
            success: true,
            message: 'Chat group created successfully',
            data: { chatGroup }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create chat group',
            error: error.message
        });
    }
};
exports.createChatGroup = createChatGroup;
const getUserChatGroups = async (req, res) => {
    try {
        const userId = req.user.id;
        const memberships = await ChatGroupModel_1.ChatGroupMember.find({
            userId,
            isActive: true
        }).populate({
            path: 'chatGroupId',
            populate: {
                path: 'createdBy',
                select: 'username fullName avatar'
            }
        });
        const chatGroups = memberships.map(membership => membership.chatGroupId);
        res.json({
            success: true,
            data: { chatGroups }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get chat groups',
            error: error.message
        });
    }
};
exports.getUserChatGroups = getUserChatGroups;
const getChatGroupDetails = async (req, res) => {
    try {
        const { groupId } = req.params;
        const userId = req.user.id;
        const membership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!membership) {
            res.status(403).json({
                success: false,
                message: 'You are not a member of this group'
            });
            return;
        }
        const chatGroup = await ChatGroupModel_1.ChatGroup.findById(groupId)
            .populate('createdBy', 'username fullName avatar');
        if (!chatGroup) {
            res.status(404).json({
                success: false,
                message: 'Chat group not found'
            });
            return;
        }
        const members = await ChatGroupModel_1.ChatGroupMember.find({
            chatGroupId: groupId,
            isActive: true
        }).populate('userId', 'username fullName avatar status isOnline lastSeen');
        res.json({
            success: true,
            data: {
                chatGroup,
                members,
                userRole: membership.role
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get group details',
            error: error.message
        });
    }
};
exports.getChatGroupDetails = getChatGroupDetails;
const addMemberToGroup = async (req, res) => {
    try {
        const { groupId } = req.params;
        const { userId } = req.body;
        const currentUserId = req.user.id;
        const currentMembership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: currentUserId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!currentMembership || !['admin', 'moderator'].includes(currentMembership.role)) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to add members'
            });
            return;
        }
        const user = await UserModel_1.User.findById(userId);
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
        }
        const existingMembership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId,
            chatGroupId: groupId
        });
        if (existingMembership && existingMembership.isActive) {
            res.status(400).json({
                success: false,
                message: 'User is already a member of this group'
            });
            return;
        }
        const chatGroup = await ChatGroupModel_1.ChatGroup.findById(groupId);
        const memberCount = await ChatGroupModel_1.ChatGroupMember.countDocuments({
            chatGroupId: groupId,
            isActive: true
        });
        if (memberCount >= chatGroup.maxMembers) {
            res.status(400).json({
                success: false,
                message: 'Group has reached maximum member limit'
            });
            return;
        }
        if (existingMembership) {
            existingMembership.isActive = true;
            existingMembership.joinedAt = new Date();
            existingMembership.invitedBy = currentUserId;
            await existingMembership.save();
        }
        else {
            const newMember = new ChatGroupModel_1.ChatGroupMember({
                userId,
                chatGroupId: groupId,
                invitedBy: currentUserId
            });
            await newMember.save();
        }
        res.json({
            success: true,
            message: 'Member added successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add member',
            error: error.message
        });
    }
};
exports.addMemberToGroup = addMemberToGroup;
const removeMemberFromGroup = async (req, res) => {
    try {
        const { groupId, memberId } = req.params;
        const currentUserId = req.user.id;
        const currentMembership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: currentUserId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!currentMembership || !['admin', 'moderator'].includes(currentMembership.role)) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to remove members'
            });
            return;
        }
        const memberToRemove = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: memberId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!memberToRemove) {
            res.status(404).json({
                success: false,
                message: 'Member not found in this group'
            });
            return;
        }
        if (currentMembership.role === 'moderator' && memberToRemove.role === 'admin') {
            res.status(403).json({
                success: false,
                message: 'Moderators cannot remove administrators'
            });
            return;
        }
        memberToRemove.isActive = false;
        await memberToRemove.save();
        res.json({
            success: true,
            message: 'Member removed successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to remove member',
            error: error.message
        });
    }
};
exports.removeMemberFromGroup = removeMemberFromGroup;
const updateMemberRole = async (req, res) => {
    try {
        const { groupId, memberId } = req.params;
        const { role } = req.body;
        const currentUserId = req.user.id;
        const currentMembership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: currentUserId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!currentMembership || currentMembership.role !== 'admin') {
            res.status(403).json({
                success: false,
                message: 'Only administrators can update member roles'
            });
            return;
        }
        const memberToUpdate = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: memberId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!memberToUpdate) {
            res.status(404).json({
                success: false,
                message: 'Member not found in this group'
            });
            return;
        }
        if (!['admin', 'moderator', 'member'].includes(role)) {
            res.status(400).json({
                success: false,
                message: 'Invalid role specified'
            });
            return;
        }
        memberToUpdate.role = role;
        await memberToUpdate.save();
        res.json({
            success: true,
            message: 'Member role updated successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update member role',
            error: error.message
        });
    }
};
exports.updateMemberRole = updateMemberRole;
const leaveGroup = async (req, res) => {
    try {
        const { groupId } = req.params;
        const userId = req.user.id;
        const membership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId,
            chatGroupId: groupId,
            isActive: true
        });
        if (!membership) {
            res.status(404).json({
                success: false,
                message: 'You are not a member of this group'
            });
            return;
        }
        if (membership.role === 'admin') {
            const adminCount = await ChatGroupModel_1.ChatGroupMember.countDocuments({
                chatGroupId: groupId,
                role: 'admin',
                isActive: true
            });
            if (adminCount === 1) {
                res.status(400).json({
                    success: false,
                    message: 'Cannot leave group as the only administrator. Please assign another admin first.'
                });
                return;
            }
        }
        membership.isActive = false;
        await membership.save();
        res.json({
            success: true,
            message: 'Left group successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to leave group',
            error: error.message
        });
    }
};
exports.leaveGroup = leaveGroup;
const joinGroup = async (req, res) => {
    try {
        const { groupId } = req.params;
        const userId = req.user.id;
        const chatGroup = await ChatGroupModel_1.ChatGroup.findById(groupId);
        if (!chatGroup) {
            res.status(404).json({
                success: false,
                message: 'Group not found'
            });
            return;
        }
        if (chatGroup.isPrivate) {
            res.status(403).json({
                success: false,
                message: 'Cannot join private group without invitation'
            });
            return;
        }
        const existingMembership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId,
            chatGroupId: groupId
        });
        if (existingMembership && existingMembership.isActive) {
            res.status(400).json({
                success: false,
                message: 'You are already a member of this group'
            });
            return;
        }
        const memberCount = await ChatGroupModel_1.ChatGroupMember.countDocuments({
            chatGroupId: groupId,
            isActive: true
        });
        if (memberCount >= chatGroup.maxMembers) {
            res.status(400).json({
                success: false,
                message: 'Group has reached maximum member limit'
            });
            return;
        }
        if (existingMembership) {
            existingMembership.isActive = true;
            existingMembership.joinedAt = new Date();
            await existingMembership.save();
        }
        else {
            const newMember = new ChatGroupModel_1.ChatGroupMember({
                userId,
                chatGroupId: groupId,
                role: 'member'
            });
            await newMember.save();
        }
        res.json({
            success: true,
            message: 'Joined group successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to join group',
            error: error.message
        });
    }
};
exports.joinGroup = joinGroup;
const searchPublicGroups = async (req, res) => {
    try {
        const { query } = req.query;
        const userId = req.user.id;
        if (!query || typeof query !== 'string') {
            res.status(400).json({
                success: false,
                message: 'Search query is required'
            });
            return;
        }
        const groups = await ChatGroupModel_1.ChatGroup.find({
            isPrivate: false,
            name: { $regex: query, $options: 'i' }
        })
            .populate('createdBy', 'username fullName avatar')
            .limit(20);
        const userMemberships = await ChatGroupModel_1.ChatGroupMember.find({
            userId,
            isActive: true
        }).select('chatGroupId');
        const userGroupIds = userMemberships.map(m => m.chatGroupId.toString());
        const availableGroups = groups.filter(group => !userGroupIds.includes(group._id.toString()));
        res.json({
            success: true,
            data: { groups: availableGroups }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to search groups',
            error: error.message
        });
    }
};
exports.searchPublicGroups = searchPublicGroups;
