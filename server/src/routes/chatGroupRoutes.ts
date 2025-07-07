import express from 'express';
import {
  createChatGroup,
  getUserChatGroups,
  getChatGroupDetails,
  addMemberToGroup,
  leaveGroup
} from '../controllers/chatGroupController';

const router = express.Router();

// Group management
router.post('/', createChatGroup);
router.get('/', getUserChatGroups);
router.get('/:groupId', getChatGroupDetails);

// Member management
router.post('/:groupId/members', addMemberToGroup);
router.delete('/:groupId/leave', leaveGroup);

export default router;
