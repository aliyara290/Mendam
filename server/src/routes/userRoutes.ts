import express from 'express';
import {
  getCurrentUser,
  updateProfile,
  uploadAvatar,
  deleteAvatar,
  searchUsers,
  getUserById,
  updateStatus
} from '../controllers/userController';
import { uploadAvatar as uploadMiddleware, handleUploadError } from '../middleware/uploadMiddleware';

const router = express.Router();

// User profile routes
router.get('/profile', getCurrentUser);
router.put('/profile', updateProfile);

// Avatar management routes
router.post('/avatar', uploadMiddleware, handleUploadError, uploadAvatar);
router.delete('/avatar', deleteAvatar);

// User search and discovery
router.get('/search', searchUsers);
router.get('/:userId', getUserById);

// Status management
router.put('/status', updateStatus);

export default router;