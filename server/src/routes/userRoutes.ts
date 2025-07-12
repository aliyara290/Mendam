import express from 'express';
import {
  getCurrentUser,
  updateProfile,
  searchUsers,
  getUserById,
  updateStatus
} from '../controllers/userController';
import { validateObjectId } from '../middleware/validation';

const router = express.Router();

// User profile routes
router.get('/profile', getCurrentUser);
router.put('/profile', updateProfile);

// User search and discovery
router.get('/search', searchUsers);
router.get('/:userId', validateObjectId('userId'), getUserById);

// Status management
router.put('/status', updateStatus);

export default router;