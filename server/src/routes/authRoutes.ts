import express from 'express';
import { register, login, logout, getProfile } from '@/controllers/authController';
import { authMiddleware } from '@/middleware/authMiddleware';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.post('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, getProfile);

export default router;