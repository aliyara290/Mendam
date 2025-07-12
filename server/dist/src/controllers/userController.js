"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = exports.getUserById = exports.searchUsers = exports.updateProfile = exports.getCurrentUser = void 0;
const UserModel_1 = require("../models/UserModel");
const getCurrentUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await UserModel_1.User.findById(userId);
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get user profile',
            error: error.message
        });
    }
};
exports.getCurrentUser = getCurrentUser;
const updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { fullName, avatar, jobTitle, biography } = req.body;
        if (fullName && fullName.length > 50) {
            res.status(400).json({
                success: false,
                message: 'Full name cannot exceed 50 characters'
            });
            return;
        }
        if (jobTitle && jobTitle.length > 100) {
            res.status(400).json({
                success: false,
                message: 'Job title cannot exceed 100 characters'
            });
            return;
        }
        if (biography && biography.length > 500) {
            res.status(400).json({
                success: false,
                message: 'Biography cannot exceed 500 characters'
            });
            return;
        }
        const updateData = {};
        if (fullName !== undefined)
            updateData.fullName = fullName;
        if (avatar !== undefined)
            updateData.avatar = avatar;
        if (jobTitle !== undefined)
            updateData.jobTitle = jobTitle;
        if (biography !== undefined)
            updateData.biography = biography;
        const user = await UserModel_1.User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update profile',
            error: error.message
        });
    }
};
exports.updateProfile = updateProfile;
const searchUsers = async (req, res) => {
    try {
        const { query } = req.query;
        const currentUserId = req.user.id;
        if (!query || typeof query !== 'string') {
            res.status(400).json({
                success: false,
                message: 'Search query is required'
            });
            return;
        }
        const users = await UserModel_1.User.find({
            _id: { $ne: currentUserId },
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to search users',
            error: error.message
        });
    }
};
exports.searchUsers = searchUsers;
const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await UserModel_1.User.findById(userId)
            .select('username fullName avatar status isOnline lastSeen jobTitle biography');
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
        }
        res.json({
            success: true,
            data: { user }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get user',
            error: error.message
        });
    }
};
exports.getUserById = getUserById;
const updateStatus = async (req, res) => {
    try {
        const userId = req.user.id;
        const { status } = req.body;
        if (!['online', 'offline', 'idle'].includes(status)) {
            res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
            return;
        }
        const user = await UserModel_1.User.findByIdAndUpdate(userId, {
            status,
            isOnline: status === 'online',
            lastSeen: new Date()
        }, { new: true });
        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
        }
        res.json({
            success: true,
            message: 'Status updated successfully',
            data: {
                status: user.status,
                isOnline: user.isOnline
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update status',
            error: error.message
        });
    }
};
exports.updateStatus = updateStatus;
