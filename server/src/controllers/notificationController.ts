import { Request, Response } from 'express';
import { Notification } from '@/models/NotificationsModel';

// Get user notifications
export const getNotifications = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const notifications = await Notification.find({ userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const unreadCount = await Notification.countDocuments({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to get notifications',
      error: error.message
    });
  }
};

// Mark notification as read
export const markAsRead = async (req: Request, res: Response) => {
  try {
    const { notificationId } = req.params;
    const userId = (req as any).user.id;

    const notification = await Notification.findOneAndUpdate(
      { _id: notificationId, userId },
      { isRead: true },
      { new: true }
    );

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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to mark notification as read',
      error: error.message
    });
  }
};

// Mark all notifications as read
export const markAllAsRead = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;

    await Notification.updateMany(
      { userId, isRead: false },
      { isRead: true }
    );

    res.json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to mark all notifications as read',
      error: error.message
    });
  }
};

// Delete notification
export const deleteNotification = async (req: Request, res: Response) => {
  try {
    const { notificationId } = req.params;
    const userId = (req as any).user.id;

    const notification = await Notification.findOneAndDelete({
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete notification',
      error: error.message
    });
  }
};

// Create notification (internal use)
export const createNotification = async (
  userId: string,
  type: string,
  title: string,
  message: string,
  data?: any
) => {
  try {
    const notification = new Notification({
      userId,
      type,
      title,
      message,
      data
    });

    await notification.save();
    return notification;
  } catch (error) {
    console.error('Failed to create notification:', error);
    throw error;
  }
};