import { Request, Response } from 'express';
import { ChatGroup, ChatGroupMember } from '../models/ChatGroupModel';
import { User } from '../models/UserModel';

export const createChatGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, isPrivate = false, maxMembers = 100 } = req.body;
    const createdBy = (req as any).user.id;

    // Create the group
    const chatGroup = new ChatGroup({
      name,
      description,
      isPrivate,
      maxMembers,
      createdBy
    });

    await chatGroup.save();

    // Add creator as admin member
    const groupMember = new ChatGroupMember({
      userId: createdBy,
      chatGroupId: chatGroup._id,
      role: 'admin'
    });

    await groupMember.save();

    // Populate creator info
    await chatGroup.populate('createdBy', 'username fullName avatar');

    res.status(201).json({
      success: true,
      message: 'Chat group created successfully',
      data: { chatGroup }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create chat group',
      error: error.message
    });
  }
};

export const getUserChatGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id;

    // Find groups where user is an active member
    const memberships = await ChatGroupMember.find({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get chat groups',
      error: error.message
    });
  }
};

export const getChatGroupDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const userId = (req as any).user.id;

    // Check if user is member of the group
    const membership = await ChatGroupMember.findOne({
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

    // Get group details
    const chatGroup = await ChatGroup.findById(groupId)
      .populate('createdBy', 'username fullName avatar');

    if (!chatGroup) {
      res.status(404).json({
        success: false,
        message: 'Chat group not found'
      });
      return;
    }

    // Get group members
    const members = await ChatGroupMember.find({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get group details',
      error: error.message
    });
  }
};

export const addMemberToGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const { userId } = req.body;
    const currentUserId = (req as any).user.id;

    // Check if current user is admin or moderator
    const currentMembership = await ChatGroupMember.findOne({
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

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    // Check if user is already a member
    const existingMembership = await ChatGroupMember.findOne({
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

    // Check group member limit
    const chatGroup = await ChatGroup.findById(groupId);
    const memberCount = await ChatGroupMember.countDocuments({
      chatGroupId: groupId,
      isActive: true
    });

    if (memberCount >= chatGroup!.maxMembers) {
      res.status(400).json({
        success: false,
        message: 'Group has reached maximum member limit'
      });
      return;
    }

    // Add or reactivate member
    if (existingMembership) {
      existingMembership.isActive = true;
      existingMembership.joinedAt = new Date();
      existingMembership.invitedBy = currentUserId;
      await existingMembership.save();
    } else {
      const newMember = new ChatGroupMember({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to add member',
      error: error.message
    });
  }
};

export const removeMemberFromGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId, memberId } = req.params;
    const currentUserId = (req as any).user.id;

    // Check if current user has permission to remove members
    const currentMembership = await ChatGroupMember.findOne({
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

    // Find the member to remove
    const memberToRemove = await ChatGroupMember.findOne({
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

    // Prevent moderators from removing admins
    if (currentMembership.role === 'moderator' && memberToRemove.role === 'admin') {
      res.status(403).json({
        success: false,
        message: 'Moderators cannot remove administrators'
      });
      return;
    }

    // Deactivate membership
    memberToRemove.isActive = false;
    await memberToRemove.save();

    res.json({
      success: true,
      message: 'Member removed successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to remove member',
      error: error.message
    });
  }
};

export const updateMemberRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId, memberId } = req.params;
    const { role } = req.body;
    const currentUserId = (req as any).user.id;

    // Only admins can update roles
    const currentMembership = await ChatGroupMember.findOne({
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

    // Find the member to update
    const memberToUpdate = await ChatGroupMember.findOne({
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

    // Validate role
    if (!['admin', 'moderator', 'member'].includes(role)) {
      res.status(400).json({
        success: false,
        message: 'Invalid role specified'
      });
      return;
    }

    // Update the role
    memberToUpdate.role = role;
    await memberToUpdate.save();

    res.json({
      success: true,
      message: 'Member role updated successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update member role',
      error: error.message
    });
  }
};

export const leaveGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const userId = (req as any).user.id;

    // Find membership
    const membership = await ChatGroupMember.findOne({
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

    // Check if user is the only admin
    if (membership.role === 'admin') {
      const adminCount = await ChatGroupMember.countDocuments({
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

    // Deactivate membership
    membership.isActive = false;
    await membership.save();

    res.json({
      success: true,
      message: 'Left group successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to leave group',
      error: error.message
    });
  }
};

export const joinGroup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { groupId } = req.params;
    const userId = (req as any).user.id;

    // Check if group exists
    const chatGroup = await ChatGroup.findById(groupId);
    if (!chatGroup) {
      res.status(404).json({
        success: false,
        message: 'Group not found'
      });
      return;
    }

    // Check if group is private
    if (chatGroup.isPrivate) {
      res.status(403).json({
        success: false,
        message: 'Cannot join private group without invitation'
      });
      return;
    }

    // Check if user is already a member
    const existingMembership = await ChatGroupMember.findOne({
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

    // Check member limit
    const memberCount = await ChatGroupMember.countDocuments({
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

    // Add or reactivate membership
    if (existingMembership) {
      existingMembership.isActive = true;
      existingMembership.joinedAt = new Date();
      await existingMembership.save();
    } else {
      const newMember = new ChatGroupMember({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to join group',
      error: error.message
    });
  }
};

export const searchPublicGroups = async (req: Request, res: Response): Promise<void> => {
  try {
    const { query } = req.query;
    const userId = (req as any).user.id;

    if (!query || typeof query !== 'string') {
      res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
      return;
    }

    // Search public groups by name
    const groups = await ChatGroup.find({
      isPrivate: false,
      name: { $regex: query, $options: 'i' }
    })
    .populate('createdBy', 'username fullName avatar')
    .limit(20);

    // Filter out groups user is already a member of
    const userMemberships = await ChatGroupMember.find({
      userId,
      isActive: true
    }).select('chatGroupId');

    const userGroupIds = userMemberships.map(m => m.chatGroupId.toString());
    const availableGroups = groups.filter(group => 
      !userGroupIds.includes(group._id.toString())
    );

    res.json({
      success: true,
      data: { groups: availableGroups }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to search groups',
      error: error.message
    });
  }
};