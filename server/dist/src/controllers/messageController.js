"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.getGroupMessages = exports.getDirectMessages = exports.sendGroupMessage = exports.sendDirectMessage = void 0;
const MessageModel_1 = require("../models/MessageModel");
const UserModel_1 = require("../models/UserModel");
const ChatGroupModel_1 = require("../models/ChatGroupModel");
const sendDirectMessage = async (req, res) => {
    try {
        const { recipientId, content, type = 'text' } = req.body;
        const senderId = req.user.id;
        const recipient = await UserModel_1.User.findById(recipientId);
        if (!recipient) {
            res.status(404).json({
                success: false,
                message: 'Recipient not found'
            });
            return;
        }
        const message = new MessageModel_1.Message({
            senderId,
            recipientId,
            content,
            type
        });
        await message.save();
        await message.populate('senderId', 'username fullName avatar');
        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: { message }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send message',
            error: error.message
        });
    }
};
exports.sendDirectMessage = sendDirectMessage;
const sendGroupMessage = async (req, res) => {
    try {
        const { chatGroupId, content, type = 'text' } = req.body;
        const senderId = req.user.id;
        const membership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: senderId,
            chatGroupId,
            isActive: true
        });
        if (!membership) {
            res.status(403).json({
                success: false,
                message: 'You are not a member of this group'
            });
            return;
        }
        const message = new MessageModel_1.Message({
            senderId,
            chatGroupId,
            content,
            type
        });
        await message.save();
        await message.populate('senderId', 'username fullName avatar');
        res.status(201).json({
            success: true,
            message: 'Group message sent successfully',
            data: { message }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send group message',
            error: error.message
        });
    }
};
exports.sendGroupMessage = sendGroupMessage;
const getDirectMessages = async (req, res) => {
    try {
        const { userId } = req.params;
        const currentUserId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const skip = (page - 1) * limit;
        const messages = await MessageModel_1.Message.find({
            $or: [
                { senderId: currentUserId, recipientId: userId },
                { senderId: userId, recipientId: currentUserId }
            ],
            isDeleted: false
        })
            .populate('senderId', 'username fullName avatar')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        await MessageModel_1.Message.updateMany({
            senderId: userId,
            recipientId: currentUserId,
            'readBy.userId': { $ne: currentUserId }
        }, {
            $push: {
                readBy: {
                    userId: currentUserId,
                    readAt: new Date()
                }
            }
        });
        res.json({
            success: true,
            data: {
                messages: messages.reverse(),
                pagination: {
                    page,
                    limit,
                    hasMore: messages.length === limit
                }
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get messages',
            error: error.message
        });
    }
};
exports.getDirectMessages = getDirectMessages;
const getGroupMessages = async (req, res) => {
    try {
        const { groupId } = req.params;
        const currentUserId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const skip = (page - 1) * limit;
        const membership = await ChatGroupModel_1.ChatGroupMember.findOne({
            userId: currentUserId,
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
        const messages = await MessageModel_1.Message.find({
            chatGroupId: groupId,
            isDeleted: false
        })
            .populate('senderId', 'username fullName avatar')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        res.json({
            success: true,
            data: {
                messages: messages.reverse(),
                pagination: {
                    page,
                    limit,
                    hasMore: messages.length === limit
                }
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get group messages',
            error: error.message
        });
    }
};
exports.getGroupMessages = getGroupMessages;
const deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.params;
        const currentUserId = req.user.id;
        const message = await MessageModel_1.Message.findById(messageId);
        if (!message) {
            res.status(404).json({
                success: false,
                message: 'Message not found'
            });
            return;
        }
        if (message.senderId.toString() !== currentUserId) {
            res.status(403).json({
                success: false,
                message: 'You can only delete your own messages'
            });
            return;
        }
        message.isDeleted = true;
        message.deletedAt = new Date();
        await message.save();
        res.json({
            success: true,
            message: 'Message deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete message',
            error: error.message
        });
    }
};
exports.deleteMessage = deleteMessage;
