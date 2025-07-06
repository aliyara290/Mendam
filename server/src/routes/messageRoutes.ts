import express from 'express';
import {
  sendDirectMessage,
  sendGroupMessage,
  getDirectMessages,
  getGroupMessages,
  deleteMessage
} from '@/controllers/messageController';

const router = express.Router();

// Send messages
router.post('/direct', sendDirectMessage);
router.post('/group', sendGroupMessage);

// Get messages
router.get('/direct/:userId', getDirectMessages);
router.get('/group/:groupId', getGroupMessages);

// Delete message
router.delete('/:messageId', deleteMessage);

export default router;