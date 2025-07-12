import express from 'express';
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification
} from '../controllers/notificationController';
import { validateObjectId } from '../middleware/validation';

const router = express.Router();

// Get notifications
router.get('/', getNotifications);

// Mark notifications as read
router.put('/:notificationId/read', validateObjectId('notificationId'), markAsRead);
router.put('/read-all', markAllAsRead);

// Delete notification
router.delete('/:notificationId', validateObjectId('notificationId'), deleteNotification);

export default router;