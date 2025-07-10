import express from 'express';
import {
  createChatGroup,
  getUserChatGroups,
  getChatGroupDetails,
  addMemberToGroup,
  removeMemberFromGroup,
  updateMemberRole,
  leaveGroup,
  joinGroup,
  searchPublicGroups
} from '../controllers/chatGroupController';
import { validateChatGroup, validateObjectId } from '../middleware/validation';

const router = express.Router();

// Group management
router.post('/', validateChatGroup, createChatGroup);
router.get('/', getUserChatGroups);
router.get('/search', searchPublicGroups);
router.get('/:groupId', validateObjectId('groupId'), getChatGroupDetails);

// Group membership
router.post('/:groupId/join', validateObjectId('groupId'), joinGroup);
router.delete('/:groupId/leave', validateObjectId('groupId'), leaveGroup);

// Member management (admin/moderator only)
router.post('/:groupId/members', validateObjectId('groupId'), addMemberToGroup);
router.delete('/:groupId/members/:memberId', 
  validateObjectId('groupId'), 
  validateObjectId('memberId'), 
  removeMemberFromGroup
);
router.put('/:groupId/members/:memberId/role', 
  validateObjectId('groupId'), 
  validateObjectId('memberId'), 
  updateMemberRole
);

export default router;