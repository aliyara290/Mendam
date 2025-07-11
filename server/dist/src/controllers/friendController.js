"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockUser = exports.removeFriend = exports.getFriends = exports.getFriendRequests = exports.declineFriendRequest = exports.acceptFriendRequest = exports.sendFriendRequest = void 0;
const FriendsModel_1 = require("../models/FriendsModel");
const UserModel_1 = require("../models/UserModel");
const sendFriendRequest = async (req, res) => {
    try {
        const { friendId } = req.body;
        const userId = req.user.id;
        if (userId === friendId) {
            return res.status(400).json({
                success: false,
                message: 'You cannot add yourself as a friend'
            });
        }
        const friendUser = await UserModel_1.User.findById(friendId);
        if (!friendUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        const existingFriendship = await FriendsModel_1.Friend.findOne({
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
        const friendRequest = new FriendsModel_1.Friend({
            userId: friendId,
            friendId: userId,
            requestedBy: userId,
            status: 'pending'
        });
        await friendRequest.save();
        res.status(201).json({
            success: true,
            message: 'Friend request sent successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to send friend request',
            error: error.message
        });
    }
};
exports.sendFriendRequest = sendFriendRequest;
const acceptFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const userId = req.user.id;
        const friendRequest = await FriendsModel_1.Friend.findOne({
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
        friendRequest.status = 'accepted';
        friendRequest.acceptedAt = new Date();
        await friendRequest.save();
        const reverseFriendship = new FriendsModel_1.Friend({
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to accept friend request',
            error: error.message
        });
    }
};
exports.acceptFriendRequest = acceptFriendRequest;
const declineFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const userId = req.user.id;
        const friendRequest = await FriendsModel_1.Friend.findOneAndUpdate({
            _id: requestId,
            userId,
            status: 'pending'
        }, { status: 'declined' }, { new: true });
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to decline friend request',
            error: error.message
        });
    }
};
exports.declineFriendRequest = declineFriendRequest;
const getFriendRequests = async (req, res) => {
    try {
        const userId = req.user.id;
        const friendRequests = await FriendsModel_1.Friend.find({
            userId,
            status: 'pending'
        })
            .populate('friendId', 'username fullName avatar status')
            .sort({ addedAt: -1 });
        res.json({
            success: true,
            data: { friendRequests }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get friend requests',
            error: error.message
        });
    }
};
exports.getFriendRequests = getFriendRequests;
const getFriends = async (req, res) => {
    try {
        const userId = req.user.id;
        const friends = await FriendsModel_1.Friend.find({
            userId,
            status: 'accepted'
        })
            .populate('friendId', 'username fullName avatar status isOnline lastSeen')
            .sort({ acceptedAt: -1 });
        res.json({
            success: true,
            data: { friends }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get friends',
            error: error.message
        });
    }
};
exports.getFriends = getFriends;
const removeFriend = async (req, res) => {
    try {
        const { friendId } = req.params;
        const userId = req.user.id;
        await FriendsModel_1.Friend.deleteMany({
            $or: [
                { userId, friendId, status: 'accepted' },
                { userId: friendId, friendId: userId, status: 'accepted' }
            ]
        });
        res.json({
            success: true,
            message: 'Friend removed successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to remove friend',
            error: error.message
        });
    }
};
exports.removeFriend = removeFriend;
const blockUser = async (req, res) => {
    try {
        const { friendId } = req.body;
        const userId = req.user.id;
        const friendship = await FriendsModel_1.Friend.findOne({
            userId,
            friendId
        });
        if (friendship) {
            friendship.status = 'blocked';
            await friendship.save();
        }
        else {
            const blockedUser = new FriendsModel_1.Friend({
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to block user',
            error: error.message
        });
    }
};
exports.blockUser = blockUser;
//# sourceMappingURL=friendController.js.map