import express from 'express';
import {
  getCurrentUser,
  updateProfile,
  searchUsers,
  getUserById,
  updateStatus
} from '../controllers/userController';

const router = express.Router();

// User profile routes
router.get('/profile', getCurrentUser);
router.put('/profile', updateProfile);

// User search and discovery
router.get('/search', searchUsers);
router.get('/:userId', getUserById);

// Status management
router.put('/status', updateStatus);

export default router;
