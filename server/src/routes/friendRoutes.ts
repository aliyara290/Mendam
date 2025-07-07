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

const router = express.Router();

// Friend request management
router.post('/request', sendFriendRequest);
router.put('/request/:requestId/accept', acceptFriendRequest);
router.put('/request/:requestId/decline', declineFriendRequest);
router.get('/requests', getFriendRequests);

// Friends management
router.get('/', getFriends);
router.delete('/:friendId', removeFriend);
router.post('/block', blockUser);

export default router;
