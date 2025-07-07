import express from 'express';
import {
  createChannel,
  getTeamChannels,
  getChannelDetails,
  updateChannel,
  sendChannelMessage,
  getChannelMessages,
  deleteChannel
} from '../controllers/channelController';
import { validateObjectId, validateMessage } from '../middleware/validation';

const router = express.Router();

// Channel management
router.post('/', createChannel);
router.get('/team/:teamId', validateObjectId('teamId'), getTeamChannels);
router.get('/:channelId', validateObjectId('channelId'), getChannelDetails);
router.put('/:channelId', validateObjectId('channelId'), updateChannel);
router.delete('/:channelId', validateObjectId('channelId'), deleteChannel);

// Channel messages
router.post('/:channelId/messages', 
  validateObjectId('channelId'), 
  validateMessage, 
  sendChannelMessage
);
router.get('/:channelId/messages', 
  validateObjectId('channelId'), 
  getChannelMessages
);

export default router;
