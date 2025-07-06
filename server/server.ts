import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import { connectDB } from '@config/database';
import { errorHandler } from '@middleware/errorHandler';
import { notFoundHandler } from '@middleware/notFoundHandler';
import { authMiddleware } from '@middleware/authMiddleware';
import { validateRegistration, validateLogin } from '@middleware/validation';

import authRoutes from '@routes/authRoutes';
import userRoutes from '@routes/userRoutes';
import chatGroupRoutes from '@routes/chatGroupRoutes';
import messageRoutes from '@routes/messageRoutes';
import friendRoutes from '@routes/friendRoutes';
import notificationRoutes from '@routes/notificationRoutes';

// Socket handlers
import { SocketService } from '@socket/socketService';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(limiter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/chat-groups', authMiddleware, chatGroupRoutes);
app.use('/api/messages', authMiddleware, messageRoutes);
app.use('/api/friends', authMiddleware, friendRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Socket.IO setup
const socketService = new SocketService(io);
socketService.initialize();

// Database connection and server start
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    httpServer.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
      console.log(`Socket.IO server ready`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGTERM', () => {
  httpServer.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  httpServer.close(() => {
    console.log('Process terminated');
  });
});

startServer();

export { app, io };