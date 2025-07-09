import { Request, Response } from 'express';
import { User } from '../models/UserModel';

// Get current user profile
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          avatar: user.avatar,
          status: user.status,
          lastSeen: user.lastSeen,
          isOnline: user.isOnline,
          jobTitle: user.jobTitle,
          biography: user.biography
        }
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get user profile',
      error: error.message
    });
  }
};

// Update user profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { fullName, avatar, jobTitle, biography } = req.body;

    // Validation
    if (fullName && fullName.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Full name cannot exceed 50 characters'
      });
    }

    if (jobTitle && jobTitle.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Job title cannot exceed 100 characters'
      });
    }

    if (biography && biography.length > 500) {
      return res.status(400).json({
        success: false,
        message: 'Biography cannot exceed 500 characters'
      });
    }

    // Build update object with only provided fields
    const updateData: any = {};
    if (fullName !== undefined) updateData.fullName = fullName;
    if (avatar !== undefined) updateData.avatar = avatar;
    if (jobTitle !== undefined) updateData.jobTitle = jobTitle;
    if (biography !== undefined) updateData.biography = biography;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          avatar: user.avatar,
          status: user.status,
          jobTitle: user.jobTitle,
          biography: user.biography
        }
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: error.message
    });
  }
};

// Search users
export const searchUsers = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    const currentUserId = (req as any).user.id;

    if (!query || typeof query !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    // Search users by username or full name (case-insensitive)
    const users = await User.find({
      _id: { $ne: currentUserId }, // Exclude current user
      $or: [
        { username: { $regex: query, $options: 'i' } },
        { fullName: { $regex: query, $options: 'i' } }
      ]
    })
    .select('username fullName avatar status isOnline')
    .limit(10);

    res.json({
      success: true,
      data: { users }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to search users',
      error: error.message
    });
  }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('username fullName avatar status isOnline lastSeen jobTitle biography');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: { user }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get user',
      error: error.message
    });
  }
};

// Update user status
export const updateStatus = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { status } = req.body;

    if (!['online', 'offline', 'idle'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { 
        status,
        isOnline: status === 'online',
        lastSeen: new Date()
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: {
        status: user.status,
        isOnline: user.isOnline
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update status',
      error: error.message
    });
  }
};