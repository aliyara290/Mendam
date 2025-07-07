import { Request, Response } from 'express';
import { Team, TeamMember, workspace, worksapceMember } from '../models/ChannelModel';
import { User } from '../models/UserModel';

// Create a new team
export const createTeam = async (req: Request, res: Response) => {
  try {
    const { name, workspaceId, isPrivate = false } = req.body;
    const createdBy = (req as any).user.id;

    // Check if workspace exists and user is a member
    const workspaceMembership = await worksapceMember.findOne({
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

    // Create the team
    const team = new Team({
      name,
      workspaceId,
      isPrivate,
      createdBy
    });

    await team.save();

    // Add creator as admin member
    const teamMember = new TeamMember({
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

    // Populate creator info
    await team.populate('createdBy', 'username fullName avatar');

    res.status(201).json({
      success: true,
      message: 'Team created successfully',
      data: { team }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create team',
      error: error.message
    });
  }
};

// Get user's teams
export const getUserTeams = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    // Find teams where user is an active member
    const memberships = await TeamMember.find({
      userId,
      isActive: true
    }).populate({
      path: 'teamId',
      populate: {
        path: 'createdBy',
        select: 'username fullName avatar'
      }
    });

    const teams = memberships.map(membership => ({
      ...membership.teamId.toObject(),
      userRole: membership.role,
      userPermissions: membership.permissions
    }));

    res.json({
      success: true,
      data: { teams }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get teams',
      error: error.message
    });
  }
};

// Get team details
export const getTeamDetails = async (req: Request, res: Response) => {
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

    // Get team details
    const team = await Team.findById(teamId)
      .populate('createdBy', 'username fullName avatar');

    if (!team) {
      return res.status(404).json({
        success: false,
        message: 'Team not found'
      });
    }

    // Get team members
    const members = await TeamMember.find({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get team details',
      error: error.message
    });
  }
};

// Add member to team
export const addMemberToTeam = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const { userId, role = 'member' } = req.body;
    const currentUserId = (req as any).user.id;

    // Check if current user has permission to add members
    const currentMembership = await TeamMember.findOne({
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

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if user is already a member
    const existingMembership = await TeamMember.findOne({
      userId,
      teamId
    });

    if (existingMembership && existingMembership.isActive) {
      return res.status(400).json({
        success: false,
        message: 'User is already a member of this team'
      });
    }

    // Default permissions based on role
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
    } else if (role === 'moderator') {
      permissions = [
        'manage_channels',
        'send_messages',
        'delete_messages',
        'kick_members'
      ];
    }

    // Add or reactivate member
    if (existingMembership) {
      existingMembership.isActive = true;
      existingMembership.joinedAt = new Date();
      existingMembership.role = role;
      existingMembership.permissions = permissions;
      await existingMembership.save();
    } else {
      const newMember = new TeamMember({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to add member to team',
      error: error.message
    });
  }
};

// Update member role
export const updateMemberRole = async (req: Request, res: Response) => {
  try {
    const { teamId, memberId } = req.params;
    const { role } = req.body;
    const currentUserId = (req as any).user.id;

    // Check if current user is admin
    const currentMembership = await TeamMember.findOne({
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

    // Find the member to update
    const memberToUpdate = await TeamMember.findOne({
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

    // Update role and permissions
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
    } else if (role === 'moderator') {
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update member role',
      error: error.message
    });
  }
};

// Remove member from team
export const removeMemberFromTeam = async (req: Request, res: Response) => {
  try {
    const { teamId, memberId } = req.params;
    const currentUserId = (req as any).user.id;

    // Check if current user has permission to remove members
    const currentMembership = await TeamMember.findOne({
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

    // Find and deactivate membership
    const membership = await TeamMember.findOne({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to remove member from team',
      error: error.message
    });
  }
};

// Leave team
export const leaveTeam = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const userId = (req as any).user.id;

    // Find membership
    const membership = await TeamMember.findOne({
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

    // Check if user is the only admin
    const adminCount = await TeamMember.countDocuments({
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

    // Deactivate membership
    membership.isActive = false;
    await membership.save();

    res.json({
      success: true,
      message: 'Left team successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to leave team',
      error: error.message
    });
  }
};

// Delete team
export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const { teamId } = req.params;
    const userId = (req as any).user.id;

    // Check if user is admin
    const membership = await TeamMember.findOne({
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

    // Delete the team
    await Team.findByIdAndDelete(teamId);

    // Deactivate all memberships
    await TeamMember.updateMany(
      { teamId },
      { isActive: false }
    );

    res.json({
      success: true,
      message: 'Team deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete team',
      error: error.message
    });
  }
};
