import { Request, Response } from 'express';
import { Channel, Team, TeamMember } from '@/models/ChannelModel';
import { Message } from '@/models/MessageModel';

export const createChannel = async (req: Request, res: Response) => {
  try {
    const { name, teamId, description } = req.body;
    const createdBy = (req as any).user.id;

    // Check if user is member of the team and has permission
    const membership = await TeamMember.findOne({
      userId: createdBy,
      teamId,
      isActive: true
    });

    if (!membership) {
      return res.status(403).json({
        success: false,
        message: 'You are not a member of this team'
      });
    }

    if (!membership.permissions.includes('manage_channels')) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to create channels'
      });
    }

    // Check if team exists
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }

    // Check if channel name already exists in this team
    const existingChannel = await Channel.findOne({ name, teamId });
    if (existingChannel) {
      return res.status(400).json({
        success: false,
        message: 'Channel with this name already exists in the team'
      });
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

export const getTeamChannels = async (req: Request, res: Response) => {
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
      return res.status(403).json({
        success: false,
        message: 'You are not a member of this team'
      });
    }

    // Get all channels in the team
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

export const getChannelDetails = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;

    // Get channel and check if it exists
    const channel = await Channel.findById(channelId)
      .populate('createdBy', 'username fullName avatar')
      .populate('teamId', 'name');

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    // Check if user is member of the team
    const membership = await TeamMember.findOne({
      userId,
      teamId: channel.teamId,
      isActive: true
    });

    if (!membership) {
      return res.status(403).json({
        success: false,
        message: 'You are not a member of this team'
      });
    }

    res.json({
      success: true,
      data: {
        channel,
        userPermissions: membership.permissions
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get channel details',
      error: error.message
    });
  }
};

export const updateChannel = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const { name, description } = req.body;
    const userId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    // Check if user has permission to manage channels
    const membership = await TeamMember.findOne({
      userId,
      teamId: channel.teamId,
      isActive: true
    });

    if (!membership || !membership.permissions.includes('manage_channels')) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to update this channel'
      });
    }

    // Check if new name already exists (if name is being changed)
    if (name && name !== channel.name) {
      const existingChannel = await Channel.findOne({
        name,
        teamId: channel.teamId,
        _id: { $ne: channelId }
      });

      if (existingChannel) {
        return res.status(400).json({
          success: false,
          message: 'Channel with this name already exists in the team'
        });
      }
    }

    // Update channel
    const updatedChannel = await Channel.findByIdAndUpdate(
      channelId,
      { name, description },
      { new: true, runValidators: true }
    ).populate('createdBy', 'username fullName avatar');

    res.json({
      success: true,
      message: 'Channel updated successfully',
      data: { channel: updatedChannel }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update channel',
      error: error.message
    });
  }
};

export const sendChannelMessage = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const { content, type = 'text' } = req.body;
    const senderId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    // Check if user is member of the team and has permission to send messages
    const membership = await TeamMember.findOne({
      userId: senderId,
      teamId: channel.teamId,
      isActive: true
    });

    if (!membership || !membership.permissions.includes('send_messages')) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to send messages in this channel'
      });
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
      message: 'Channel message sent successfully',
      data: { message }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to send channel message',
      error: error.message
    });
  }
};

export const getChannelMessages = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    // Check if user is member of the team
    const membership = await TeamMember.findOne({
      userId,
      teamId: channel.teamId,
      isActive: true
    });

    if (!membership) {
      return res.status(403).json({
        success: false,
        message: 'You are not a member of this team'
      });
    }

    // Get channel messages
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
        messages: messages.reverse(), // Return in chronological order
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

export const deleteChannel = async (req: Request, res: Response) => {
  try {
    const { channelId } = req.params;
    const userId = (req as any).user.id;

    // Get channel
    const channel = await Channel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    // Check if user has permission to manage channels
    const membership = await TeamMember.findOne({
      userId,
      teamId: channel.teamId,
      isActive: true
    });

    if (!membership || !membership.permissions.includes('manage_channels')) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to delete this channel'
      });
    }

    // Delete the channel
    await Channel.findByIdAndDelete(channelId);

    // Mark all messages in this channel as deleted
    await Message.updateMany(
      { channelId },
      { 
        isDeleted: true,
        deletedAt: new Date()
      }
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