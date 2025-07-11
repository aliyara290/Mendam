import { Request, Response } from 'express';
import { Message } from '../models/MessageModel';
import { User } from '../models/UserModel';
import { ChatGroup, ChatGroupMember } from '../models/ChatGroupModel';

export const sendDirectMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { recipientId, content, type = 'text' } = req.body;
    const senderId = (req as any).user.id;

    const recipient = await User.findById(recipientId);
    if (!recipient) {
      res.status(404).json({
        success: false,
        message: 'Recipient not found'
      });
      return;
    }

    const message = new Message({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
};

export const sendGroupMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { chatGroupId, content, type = 'text' } = req.body;
    const senderId = (req as any).user.id;

    // Check if user is member of the group
    const membership = await ChatGroupMember.findOne({
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

    const message = new Message({
      senderId,
      chatGroupId,
      content,
      type
    });

    await message.save();

    // Populate sender info
    await message.populate('senderId', 'username fullName avatar');

    res.status(201).json({
      success: true,
      message: 'Group message sent successfully',
      data: { message }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to send group message',
      error: error.message
    });
  }
};

export const getDirectMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const currentUserId = (req as any).user.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;

    // Get messages between current user and specified user
    const messages = await Message.find({
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

    // Mark messages as read
    await Message.updateMany(
      {
        senderId: userId,
        recipientId: currentUserId,
        'readBy.userId': { $ne: currentUserId }
      },
      {
        $push: {
          readBy: {
            userId: currentUserId,
            readAt: new Date()
          }
        }
      }
    );

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
      message: 'Failed to get messages',
      error: error.message
    });
  }
};

export const getGroupMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const currentUserId = (req as any).user.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;

    // Check if user is member of the group
    const membership = await ChatGroupMember.findOne({
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

    // Get group messages
    const messages = await Message.find({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get group messages',
      error: error.message
    });
  }
};

export const deleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { messageId } = req.params;
    const currentUserId = (req as any).user.id;

    const message = await Message.findById(messageId);
    
    if (!message) {
      res.status(404).json({
        success: false,
        message: 'Message not found'
      });
      return;
    }

    // Check if user is the sender
    if (message.senderId.toString() !== currentUserId) {
      res.status(403).json({
        success: false,
        message: 'You can only delete your own messages'
      });
      return;
    }

    // Mark message as deleted
    message.isDeleted = true;
    message.deletedAt = new Date();
    await message.save();

    res.json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete message',
      error: error.message
    });
  }
};