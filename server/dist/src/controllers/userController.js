"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = exports.getUserById = exports.searchUsers = exports.deleteAvatar = exports.uploadAvatar = exports.updateProfile = exports.getCurrentUser = void 0;
const UserModel_1 = require("../models/UserModel");
const fileUploadService_1 = require("../services/fileUploadService");
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
        const { fullName, jobTitle, biography } = req.body;
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
const uploadAvatar = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!req.file) {
            res.status(400).json({
                success: false,
                message: 'No image file provided'
            });
            return;
        }
        const fileData = {
            buffer: req.file.buffer,
            mimetype: req.file.mimetype,
            size: req.file.size,
            originalname: req.file.originalname
        };
        const validation = fileUploadService_1.FileUploadService.validateImageFile(fileData);
        if (!validation.isValid) {
            res.status(400).json({
                success: false,
                message: validation.error
            });
            return;
        }
        const currentUser = await UserModel_1.User.findById(userId);
        if (!currentUser) {
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
        }
        const uploadResult = await fileUploadService_1.FileUploadService.uploadAvatar(req.file.buffer, userId, req.file.originalname);
        const updatedUser = await UserModel_1.User.findByIdAndUpdate(userId, { avatar: uploadResult.url }, { new: true });
        if (currentUser.avatar && currentUser.avatar !== uploadResult.url) {
            const oldPublicId = fileUploadService_1.FileUploadService.extractPublicIdFromUrl(currentUser.avatar);
            if (oldPublicId) {
                fileUploadService_1.FileUploadService.deleteAvatar(oldPublicId).catch(console.error);
            }
        }
        res.json({
            success: true,
            message: 'Avatar uploaded successfully',
            data: {
                user: {
                    id: updatedUser._id,
                    username: updatedUser.username,
                    email: updatedUser.email,
                    fullName: updatedUser.fullName,
                    avatar: updatedUser.avatar,
                    status: updatedUser.status,
                    jobTitle: updatedUser.jobTitle,
                    biography: updatedUser.biography
                },
                upload: {
                    url: uploadResult.url,
                    size: uploadResult.bytes,
                    format: uploadResult.format
                }
            }
        });
    }
    catch (error) {
        console.error('Avatar upload error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to upload avatar',
            error: error.message
        });
    }
};
exports.uploadAvatar = uploadAvatar;
const deleteAvatar = async (req, res) => {
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
        if (!user.avatar) {
            res.status(400).json({
                success: false,
                message: 'No avatar to delete'
            });
            return;
        }
        const publicId = fileUploadService_1.FileUploadService.extractPublicIdFromUrl(user.avatar);
        if (publicId) {
            await fileUploadService_1.FileUploadService.deleteAvatar(publicId);
        }
        const updatedUser = await UserModel_1.User.findByIdAndUpdate(userId, { avatar: '' }, { new: true });
        res.json({
            success: true,
            message: 'Avatar deleted successfully',
            data: {
                user: {
                    id: updatedUser._id,
                    username: updatedUser.username,
                    email: updatedUser.email,
                    fullName: updatedUser.fullName,
                    avatar: updatedUser.avatar,
                    status: updatedUser.status,
                    jobTitle: updatedUser.jobTitle,
                    biography: updatedUser.biography
                }
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete avatar',
            error: error.message
        });
    }
};
exports.deleteAvatar = deleteAvatar;
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
