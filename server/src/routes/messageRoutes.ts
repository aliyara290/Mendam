import express from 'express';
import {
  sendDirectMessage,
  sendGroupMessage,
  getDirectMessages,
  getGroupMessages,
  deleteMessage
} from '../controllers/messageController';
import { validateMessage, validateObjectId } from '../middleware/validation';

const router = express.Router();

// Send messages
router.post('/direct', validateMessage, sendDirectMessage);
router.post('/group', validateMessage, sendGroupMessage);

// Get messages
router.get('/direct/:userId', validateObjectId('userId'), getDirectMessages);
router.get('/group/:groupId', validateObjectId('groupId'), getGroupMessages);

// Delete message
router.delete('/:messageId', validateObjectId('messageId'), deleteMessage);

export default router;