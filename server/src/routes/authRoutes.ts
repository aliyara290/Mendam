import express from 'express';
import { register, login, logout, getProfile } from '@/controllers/authController';
import { authMiddleware } from '@/middleware/authMiddleware';
import { validateRegistration, validateLogin } from '@/middleware/validation';

const router = express.Router();

// Public routes
router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);

// Protected routes
router.post('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, getProfile);

export default router;