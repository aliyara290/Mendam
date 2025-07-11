"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = exports.deleteNotification = exports.markAllAsRead = exports.markAsRead = exports.getNotifications = void 0;
const NotificationsModel_1 = require("../models/NotificationsModel");
const getNotifications = async (req, res) => {
    try {
        const userId = req.user.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        const notifications = await NotificationsModel_1.Notification.find({ userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);
        const unreadCount = await NotificationsModel_1.Notification.countDocuments({
            userId,
            isRead: false
        });
        res.json({
            success: true,
            data: {
                notifications,
                unreadCount,
                pagination: {
                    page,
                    limit,
                    hasMore: notifications.length === limit
                }
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to get notifications',
            error: error.message
        });
    }
};
exports.getNotifications = getNotifications;
const markAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const userId = req.user.id;
        const notification = await NotificationsModel_1.Notification.findOneAndUpdate({ _id: notificationId, userId }, { isRead: true }, { new: true });
        if (!notification) {
            return res.status(404).json({
                success: false,
                message: 'Notification not found'
            });
        }
        res.json({
            success: true,
            message: 'Notification marked as read'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to mark notification as read',
            error: error.message
        });
    }
};
exports.markAsRead = markAsRead;
const markAllAsRead = async (req, res) => {
    try {
        const userId = req.user.id;
        await NotificationsModel_1.Notification.updateMany({ userId, isRead: false }, { isRead: true });
        res.json({
            success: true,
            message: 'All notifications marked as read'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to mark all notifications as read',
            error: error.message
        });
    }
};
exports.markAllAsRead = markAllAsRead;
const deleteNotification = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const userId = req.user.id;
        const notification = await NotificationsModel_1.Notification.findOneAndDelete({
            _id: notificationId,
            userId
        });
        if (!notification) {
            return res.status(404).json({
                success: false,
                message: 'Notification not found'
            });
        }
        res.json({
            success: true,
            message: 'Notification deleted successfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete notification',
            error: error.message
        });
    }
};
exports.deleteNotification = deleteNotification;
const createNotification = async (userId, type, title, message, data) => {
    try {
        const notification = new NotificationsModel_1.Notification({
            userId,
            type,
            title,
            message,
            data
        });
        await notification.save();
        return notification;
    }
    catch (error) {
        console.error('Failed to create notification:', error);
        throw error;
    }
};
exports.createNotification = createNotification;
//# sourceMappingURL=notificationController.js.map