import { Request, Response } from 'express';
import { Friend } from '../models/FriendsModel';
import { User } from '../models/UserModel';

// Send friend request
export const sendFriendRequest = async (req: Request, res: Response) => {
  try {
    const { friendId } = req.body;
    const userId = (req as any).user.id;

    // Check if trying to add themselves
    if (userId === friendId) {
      return res.status(400).json({
        success: false,
        message: 'You cannot add yourself as a friend'
      });
    }

    // Check if friend exists
    const friendUser = await User.findById(friendId);
    if (!friendUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if friendship already exists
    const existingFriendship = await Friend.findOne({
      $or: [
        { userId, friendId },
        { userId: friendId, friendId: userId }
      ]
    });

    if (existingFriendship) {
      return res.status(400).json({
        success: false,
        message: 'Friend request already exists or users are already friends'
      });
    }

    // Create friend request
    const friendRequest = new Friend({
      userId: friendId, // The person receiving the request
      friendId: userId, // The person sending the request
      requestedBy: userId,
      status: 'pending'
    });

    await friendRequest.save();

    res.status(201).json({
      success: true,
      message: 'Friend request sent successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to send friend request',
      error: error.message
    });
  }
};

// Accept friend request
export const acceptFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.params;
    const userId = (req as any).user.id;

    // Find the friend request
    const friendRequest = await Friend.findOne({
      _id: requestId,
      userId,
      status: 'pending'
    });

    if (!friendRequest) {
      return res.status(404).json({
        success: false,
        message: 'Friend request not found'
      });
    }

    // Update the request status
    friendRequest.status = 'accepted';
    friendRequest.acceptedAt = new Date();
    await friendRequest.save();

    // Create the reverse friendship
    const reverseFriendship = new Friend({
      userId: friendRequest.friendId,
      friendId: friendRequest.userId,
      requestedBy: friendRequest.requestedBy,
      status: 'accepted',
      acceptedAt: new Date()
    });

    await reverseFriendship.save();

    res.json({
      success: true,
      message: 'Friend request accepted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to accept friend request',
      error: error.message
    });
  }
};

// Decline friend request
export const declineFriendRequest = async (req: Request, res: Response) => {
  try {
    const { requestId } = req.params;
    const userId = (req as any).user.id;

    // Find and update the friend request
    const friendRequest = await Friend.findOneAndUpdate(
      {
        _id: requestId,
        userId,
        status: 'pending'
      },
      { status: 'declined' },
      { new: true }
    );

    if (!friendRequest) {
      return res.status(404).json({
        success: false,
        message: 'Friend request not found'
      });
    }

    res.json({
      success: true,
      message: 'Friend request declined'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to decline friend request',
      error: error.message
    });
  }
};

// Get friend requests (received)
export const getFriendRequests = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const friendRequests = await Friend.find({
      userId,
      status: 'pending'
    })
    .populate('friendId', 'username fullName avatar status')
    .sort({ addedAt: -1 });

    res.json({
      success: true,
      data: { friendRequests }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get friend requests',
      error: error.message
    });
  }
};

// Get friends list
export const getFriends = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    const friends = await Friend.find({
      userId,
      status: 'accepted'
    })
    .populate('friendId', 'username fullName avatar status isOnline lastSeen')
    .sort({ acceptedAt: -1 });

    res.json({
      success: true,
      data: { friends }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get friends',
      error: error.message
    });
  }
};

// Remove friend
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const { friendId } = req.params;
    const userId = (req as any).user.id;

    // Remove both friendship records
    await Friend.deleteMany({
      $or: [
        { userId, friendId, status: 'accepted' },
        { userId: friendId, friendId: userId, status: 'accepted' }
      ]
    });

    res.json({
      success: true,
      message: 'Friend removed successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to remove friend',
      error: error.message
    });
  }
};

// Block user
export const blockUser = async (req: Request, res: Response) => {
  try {
    const { friendId } = req.body;
    const userId = (req as any).user.id;

    // Check if friendship exists
    const friendship = await Friend.findOne({
      userId,
      friendId
    });

    if (friendship) {
      friendship.status = 'blocked';
      await friendship.save();
    } else {
      // Create a blocked relationship
      const blockedUser = new Friend({
        userId,
        friendId,
        requestedBy: userId,
        status: 'blocked'
      });
      await blockedUser.save();
    }

    res.json({
      success: true,
      message: 'User blocked successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to block user',
      error: error.message
    });
  }
};
