import { Request, Response } from 'express';
import { Channel, Team, TeamMember } from '../models/ChannelModel';
import { Message } from '../models/MessageModel';

// Create a new channel
export const createChannel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, teamId, description } = req.body;
    const createdBy = (req as any).user.id;

    // Check if user is member of the team and has permission
    const membership = await TeamMember.findOne({
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

    // Create the channel
    const channel = new Channel({
      name,
      teamId,
      createdBy,
      description
    });

    await channel.save();

    // Populate creator info
    await channel.populate('createdBy', 'username fullName avatar');

    res.status(201).json({
      success: true,
      message: 'Channel created successfully',
      data: { channel }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create channel',
      error: error.message
    });
  }
};

// Get channels for a team
export const getTeamChannels = async (req: Request, res: Response): Promise<void> => {
  try {
    const { teamId } = req.params;
    const userId = (req as any).user.id;

    // Check if user is member of the team
    const membership = await TeamMember.findOne({
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

    // Get channels
    const channels = await Channel.find({ teamId })
      .populate('createdBy', 'username fullName avatar')
      .sort({ createdAt: 1 });

    res.json({
      success: true,
      data: { channels }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get team channels',
      error: error.message
    });
  }
};

// Get channel details
export const getChannelDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;

    // Get channel and check if user has access
    const channel = await Channel.findById(channelId)
      .populate('createdBy', 'username fullName avatar');

    if (!channel) {
      res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
      return;
    }

    // Check if user is member of the team
    const membership = await TeamMember.findOne({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get channel details',
      error: error.message
    });
  }
};

// Update channel
export const updateChannel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { channelId } = req.params;
    const { name, description } = req.body;
    const userId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
      return;
    }

    // Check if user has permission
    const membership = await TeamMember.findOne({
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

    // Update channel
    if (name) channel.name = name;
    if (description !== undefined) channel.description = description;

    await channel.save();

    res.json({
      success: true,
      message: 'Channel updated successfully',
      data: { channel }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update channel',
      error: error.message
    });
  }
};

// Send message to channel
export const sendChannelMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { channelId } = req.params;
    const { content, type = 'text' } = req.body;
    const senderId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
      return;
    }

    // Check if user is member of the team and has permission
    const membership = await TeamMember.findOne({
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

    // Create message
    const message = new Message({
      senderId,
      channelId,
      content,
      type
    });

    await message.save();

    // Populate sender info
    await message.populate('senderId', 'username fullName avatar');

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: { message }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
};

// Get channel messages
export const getChannelMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
      return;
    }

    // Check if user is member of the team
    const membership = await TeamMember.findOne({
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

    // Get messages
    const messages = await Message.find({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get channel messages',
      error: error.message
    });
  }
};

// Delete channel
export const deleteChannel = async (req: Request, res: Response): Promise<void> => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
      return;
    }

    // Check if user has permission
    const membership = await TeamMember.findOne({
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

    // Delete the channel
    await Channel.findByIdAndDelete(channelId);

    // Optionally mark all channel messages as deleted
    await Message.updateMany(
      { channelId },
      { isDeleted: true, deletedAt: new Date() }
    );

    res.json({
      success: true,
      message: 'Channel deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete channel',
      error: error.message
    });
  }
};