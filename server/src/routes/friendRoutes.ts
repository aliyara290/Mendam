import express from 'express';
import {
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  getFriendRequests,
  getFriends,
  removeFriend,
  blockUser
} from '../controllers/friendController';
import { validateObjectId } from '../middleware/validation';

const router = express.Router();

// Friend request management
router.post('/request', sendFriendRequest);
router.put('/request/:requestId/accept', validateObjectId('requestId'), acceptFriendRequest);
router.put('/request/:requestId/decline', validateObjectId('requestId'), declineFriendRequest);
router.get('/requests', getFriendRequests);

// Friends management
router.get('/', getFriends);
router.delete('/:friendId', validateObjectId('friendId'), removeFriend);
router.post('/block', blockUser);

export default router;