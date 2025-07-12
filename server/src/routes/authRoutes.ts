import express from 'express';
import { register, login, logout, getProfile } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validateRegistration, validateLogin } from '../middleware/validation';

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Auth API is working',
    timestamp: new Date().toISOString()
  });
});

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);

router.post('/logout', authMiddleware, logout);
router.get('/profile', authMiddleware, getProfile);

export default router;