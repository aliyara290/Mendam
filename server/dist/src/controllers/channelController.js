"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteChannel = exports.getChannelMessages = exports.sendChannelMessage = exports.updateChannel = exports.getChannelDetails = exports.getTeamChannels = exports.createChannel = void 0;
const ChannelModel_1 = require("../models/ChannelModel");
const MessageModel_1 = require("../models/MessageModel");
const createChannel = async (req, res) => {
    try {
        const { name, teamId, description } = req.body;
        const createdBy = req.user.id;
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId: createdBy,
            teamId,
            isActive: true
        });
        if (!membership || !membership.permissions.includes('manage_channels')) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to create channels in this team'
            });
            return;
        }
        const channel = new ChannelModel_1.Channel({
            name,
            teamId,
            createdBy,
            description
        });
        await channel.save();
        await channel.populate('createdBy', 'username fullName avatar');
        res.status(201).json({
            success: true,
            message: 'Channel created successfully',
            data: { channel }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create channel',
            error: error.message
        });
    }
};
exports.createChannel = createChannel;
const getTeamChannels = async (req, res) => {
    try {
        const { teamId } = req.params;
        const userId = req.user.id;
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId,
            isActive: true
        });
        if (!membership) {
            res.status(403).json({
                success: false,
                message: 'You are not a member of this team'
            });
            return;
        }
        const channels = await ChannelModel_1.Channel.find({ teamId })
            .populate('createdBy', 'username fullName avatar')
            .sort({ createdAt: 1 });
        res.json({
            success: true,
            data: { channels }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get team channels',
            error: error.message
        });
    }
};
exports.getTeamChannels = getTeamChannels;
const getChannelDetails = async (req, res) => {
    try {
        const { channelId } = req.params;
        const userId = req.user.id;
        const channel = await ChannelModel_1.Channel.findById(channelId)
            .populate('createdBy', 'username fullName avatar');
        if (!channel) {
            res.status(404).json({
                success: false,
                message: 'Channel not found'
            });
            return;
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId: channel.teamId,
            isActive: true
        });
        if (!membership) {
            res.status(403).json({
                success: false,
                message: 'You do not have access to this channel'
            });
            return;
        }
        res.json({
            success: true,
            data: { channel }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get channel details',
            error: error.message
        });
    }
};
exports.getChannelDetails = getChannelDetails;
const updateChannel = async (req, res) => {
    try {
        const { channelId } = req.params;
        const { name, description } = req.body;
        const userId = req.user.id;
        const channel = await ChannelModel_1.Channel.findById(channelId);
        if (!channel) {
            res.status(404).json({
                success: false,
                message: 'Channel not found'
            });
            return;
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId: channel.teamId,
            isActive: true
        });
        if (!membership || !membership.permissions.includes('manage_channels')) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to update this channel'
            });
            return;
        }
        if (name)
            channel.name = name;
        if (description !== undefined)
            channel.description = description;
        await channel.save();
        res.json({
            success: true,
            message: 'Channel updated successfully',
            data: { channel }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update channel',
            error: error.message
        });
    }
};
exports.updateChannel = updateChannel;
const sendChannelMessage = async (req, res) => {
    try {
        const { channelId } = req.params;
        const { content, type = 'text' } = req.body;
        const senderId = req.user.id;
        const channel = await ChannelModel_1.Channel.findById(channelId);
        if (!channel) {
            res.status(404).json({
                success: false,
                message: 'Channel not found'
            });
            return;
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId: senderId,
            teamId: channel.teamId,
            isActive: true
        });
        if (!membership || !membership.permissions.includes('send_messages')) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to send messages in this channel'
            });
            return;
        }
        const message = new MessageModel_1.Message({
            senderId,
            channelId,
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
exports.sendChannelMessage = sendChannelMessage;
const getChannelMessages = async (req, res) => {
    try {
        const { channelId } = req.params;
        const userId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const skip = (page - 1) * limit;
        const channel = await ChannelModel_1.Channel.findById(channelId);
        if (!channel) {
            res.status(404).json({
                success: false,
                message: 'Channel not found'
            });
            return;
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId: channel.teamId,
            isActive: true
        });
        if (!membership) {
            res.status(403).json({
                success: false,
                message: 'You do not have access to this channel'
            });
            return;
        }
        const messages = await MessageModel_1.Message.find({
            channelId,
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
            message: 'Failed to get channel messages',
            error: error.message
        });
    }
};
exports.getChannelMessages = getChannelMessages;
const deleteChannel = async (req, res) => {
    try {
        const { channelId } = req.params;
        const userId = req.user.id;
        const channel = await ChannelModel_1.Channel.findById(channelId);
        if (!channel) {
            res.status(404).json({
                success: false,
                message: 'Channel not found'
            });
            return;
        }
        const membership = await ChannelModel_1.TeamMember.findOne({
            userId,
            teamId: channel.teamId,
            isActive: true
        });
        if (!membership || !membership.permissions.includes('manage_channels')) {
            res.status(403).json({
                success: false,
                message: 'You do not have permission to delete this channel'
            });
            return;
        }
        await ChannelModel_1.Channel.findByIdAndDelete(channelId);
        await MessageModel_1.Message.updateMany({ channelId }, { isDeleted: true, deletedAt: new Date() });
        res.json({
            success: true,
            message: 'Channel deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete channel',
            error: error.message
        });
    }
};
exports.deleteChannel = deleteChannel;
