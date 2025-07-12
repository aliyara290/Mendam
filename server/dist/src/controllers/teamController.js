"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeam = exports.leaveTeam = exports.removeMemberFromTeam = exports.updateMemberRole = exports.addMemberToTeam = exports.getTeamDetails = exports.getUserTeams = exports.createTeam = void 0;
const ChannelModel_1 = require("../models/ChannelModel");
const UserModel_1 = require("../models/UserModel");
const createTeam = async (req, res) => {
    try {
        const { name, workspaceId, isPrivate = false } = req.body;
        const createdBy = req.user.id;
        const workspaceMembership = await ChannelModel_1.worksapceMember.findOne({
            userId: createdBy,
            workspaceId,
            isActive: true
        });
        if (!workspaceMembership) {
            return res.status(403).json({
                success: false,
                message: 'You are not a member of this workspace'
            });
        }
        const team = new ChannelModel_1.Team({
            name,
            workspaceId,
            isPrivate,
            createdBy
        });
        await team.save();
        const teamMember = new ChannelModel_1.TeamMember({
            userId: createdBy,
            teamId: team._id,
            role: 'admin',
            permissions: [
                'manage_channels',
                'manage_members',
                'send_messages',
                'delete_messages',
                'manage_roles',
                'kick_members',
                'view_audit_log'
            ]
        });
        await teamMember.save();
        await team.populate('createdBy', 'username fullName avatar');
        res.status(201).json({
            success: true,
            message: 'Team created successfully',
            data: { team }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create team',
            error: error.message
        });
    }
};
exports.createTeam = createTeam;
const getUserTeams = async (req, res) => {
    try {
        const userId = req.user.id;
        const memberships = await ChannelModel_1.TeamMember.find({
            userId,
            isActive: true
        }).populate({
            path: 'teamId',
            populate: {
                path: 'createdBy',
                select: 'username fullName avatar'
            }
        });
        const teams = memberships.map(membership => {
            const teamObj = membership.teamId.toObject();
            return {
                ...teamObj,
                userRole: membership.role,
                userPermissions: membership.permissions
            };
        });
        res.json({
            success: true,
            data: { teams }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get teams',
            error: error.message
        });
    }
};
exports.getUserTeams = getUserTeams;
const getTeamDetails = async (req, res) => {
    try {
        const { teamId } = req.params;
        const userId = req.user.id;
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId,
            isActive: true
        });
        if (!membership) {
            return res.status(403).json({
                success: false,
                message: 'You are not a member of this team'
            });
        }
        const team = await ChannelModel_1.Team.findById(teamId)
            .populate('createdBy', 'username fullName avatar');
        if (!team) {
            return res.status(404).json({
                success: false,
                message: 'Team not found'
            });
        }
        const members = await ChannelModel_1.TeamMember.find({
            teamId,
            isActive: true
        }).populate('userId', 'username fullName avatar status isOnline');
        res.json({
            success: true,
            data: {
                team,
                members,
                userRole: membership.role,
                userPermissions: membership.permissions
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get team details',
            error: error.message
        });
    }
};
exports.getTeamDetails = getTeamDetails;
const addMemberToTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const { userId, role = 'member' } = req.body;
        const currentUserId = req.user.id;
        const currentMembership = await ChannelModel_1.TeamMember.findOne({
            userId: currentUserId,
            teamId,
            isActive: true
        });
        if (!currentMembership || !['admin', 'moderator'].includes(currentMembership.role)) {
            return res.status(403).json({
                success: false,
                message: 'You do not have permission to add members'
            });
        }
        const user = await UserModel_1.User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        const existingMembership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId
        });
        if (existingMembership && existingMembership.isActive) {
            return res.status(400).json({
                success: false,
                message: 'User is already a member of this team'
            });
        }
        let permissions = ['send_messages'];
        if (role === 'admin') {
            permissions = [
                'manage_channels',
                'manage_members',
                'send_messages',
                'delete_messages',
                'manage_roles',
                'kick_members',
                'view_audit_log'
            ];
        }
        else if (role === 'moderator') {
            permissions = [
                'manage_channels',
                'send_messages',
                'delete_messages',
                'kick_members'
            ];
        }
        if (existingMembership) {
            existingMembership.isActive = true;
            existingMembership.joinedAt = new Date();
            existingMembership.role = role;
            existingMembership.permissions = permissions;
            await existingMembership.save();
        }
        else {
            const newMember = new ChannelModel_1.TeamMember({
                userId,
                teamId,
                role,
                permissions
            });
            await newMember.save();
        }
        res.json({
            success: true,
            message: 'Member added to team successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to add member to team',
            error: error.message
        });
    }
};
exports.addMemberToTeam = addMemberToTeam;
const updateMemberRole = async (req, res) => {
    try {
        const { teamId, memberId } = req.params;
        const { role } = req.body;
        const currentUserId = req.user.id;
        const currentMembership = await ChannelModel_1.TeamMember.findOne({
            userId: currentUserId,
            teamId,
            isActive: true
        });
        if (!currentMembership || currentMembership.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Only admins can update member roles'
            });
        }
        const memberToUpdate = await ChannelModel_1.TeamMember.findOne({
            userId: memberId,
            teamId,
            isActive: true
        });
        if (!memberToUpdate) {
            return res.status(404).json({
                success: false,
                message: 'Member not found in this team'
            });
        }
        let permissions = ['send_messages'];
        if (role === 'admin') {
            permissions = [
                'manage_channels',
                'manage_members',
                'send_messages',
                'delete_messages',
                'manage_roles',
                'kick_members',
                'view_audit_log'
            ];
        }
        else if (role === 'moderator') {
            permissions = [
                'manage_channels',
                'send_messages',
                'delete_messages',
                'kick_members'
            ];
        }
        memberToUpdate.role = role;
        memberToUpdate.permissions = permissions;
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
const removeMemberFromTeam = async (req, res) => {
    try {
        const { teamId, memberId } = req.params;
        const currentUserId = req.user.id;
        const currentMembership = await ChannelModel_1.TeamMember.findOne({
            userId: currentUserId,
            teamId,
            isActive: true
        });
        if (!currentMembership || !['admin', 'moderator'].includes(currentMembership.role)) {
            return res.status(403).json({
                success: false,
                message: 'You do not have permission to remove members'
            });
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId: memberId,
            teamId,
            isActive: true
        });
        if (!membership) {
            return res.status(404).json({
                success: false,
                message: 'Member not found in this team'
            });
        }
        membership.isActive = false;
        await membership.save();
        res.json({
            success: true,
            message: 'Member removed from team successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to remove member from team',
            error: error.message
        });
    }
};
exports.removeMemberFromTeam = removeMemberFromTeam;
const leaveTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const userId = req.user.id;
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId,
            isActive: true
        });
        if (!membership) {
            return res.status(404).json({
                success: false,
                message: 'You are not a member of this team'
            });
        }
        const adminCount = await ChannelModel_1.TeamMember.countDocuments({
            teamId,
            role: 'admin',
            isActive: true
        });
        if (membership.role === 'admin' && adminCount === 1) {
            return res.status(400).json({
                success: false,
                message: 'Cannot leave team as the only admin. Please assign another admin first.'
            });
        }
        membership.isActive = false;
        await membership.save();
        res.json({
            success: true,
            message: 'Left team successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to leave team',
            error: error.message
        });
    }
};
exports.leaveTeam = leaveTeam;
const deleteTeam = async (req, res) => {
    try {
        const { teamId } = req.params;
        const userId = req.user.id;
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId,
            isActive: true,
            role: 'admin'
        });
        if (!membership) {
            return res.status(403).json({
                success: false,
                message: 'Only team admins can delete the team'
            });
        }
        await ChannelModel_1.Team.findByIdAndDelete(teamId);
        await ChannelModel_1.TeamMember.updateMany({ teamId }, { isActive: false });
        res.json({
            success: true,
            message: 'Team deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete team',
            error: error.message
        });
    }
};
exports.deleteTeam = deleteTeam;
