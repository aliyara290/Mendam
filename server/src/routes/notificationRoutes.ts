import express from 'express';
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification
} from '@/controllers/notificationController';

const router = express.Router();

// Get notifications
router.get('/', getNotifications);

// Mark notifications as read
router.put('/:notificationId/read', markAsRead);
router.put('/read-all', markAllAsRead);

// Delete notification
router.delete('/:notificationId', deleteNotification);

export default router;