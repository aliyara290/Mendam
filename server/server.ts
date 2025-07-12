import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

// Load environment variables first
dotenv.config();

import { connectDB } from "./src/config/database";
import { errorHandler } from "./src/middleware/errorHandler";
import { notFoundHandler } from "./src/middleware/notFoundHandler";
import { authMiddleware } from "./src/middleware/authMiddleware";

// Import routes
import authRoutes from "./src/routes/authRoutes";
import userRoutes from "./src/routes/userRoutes";
import chatGroupRoutes from "./src/routes/chatGroupRoutes";
import messageRoutes from "./src/routes/messageRoutes";
import friendRoutes from "./src/routes/friendRoutes";
import notificationRoutes from "./src/routes/notificationRoutes";

import { SocketService } from "./src/socket/socketService";

const app = express();
const httpServer = createServer(app);

// Simple CORS configuration for debugging
const allowedOrigins = [
  "https://mendam.vercel.app",
  "https://mendam-git-main-aliyarafrs-projects.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173"
];

// Add any Vercel preview URLs that match the pattern
if (process.env.CORS_ORIGIN) {
  const envOrigins = process.env.CORS_ORIGIN.split(',').map(origin => origin.trim());
  allowedOrigins.push(...envOrigins);
}

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list or matches pattern
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (allowedOrigin.includes('*')) {
        const pattern = allowedOrigin.replace(/\*/g, '.*');
        return new RegExp(`^${pattern}$`).test(origin);
      }
      return allowedOrigin === origin;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      console.log(`❌ CORS blocked origin: ${origin}`);
      console.log(`✅ Allowed origins: ${allowedOrigins.join(', ')}`);
      callback(null, false); // Don't throw error, just deny
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  optionsSuccessStatus: 200
};

// Socket.IO configuration
const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Rate limiter configuration
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000"),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "1000"),
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    return req.path.includes('/health');
  }
});

// Apply middleware in correct order
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

app.use(compression());
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Logging
if (process.env.NODE_ENV === 'production') {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check (before rate limiting)
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mendam Server is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    corsOrigins: allowedOrigins.slice(0, 3) // Show first 3 origins for security
  });
});

// Apply rate limiting after health checks
app.use(limiter);

// API Routes with error handling
try {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', authMiddleware, userRoutes);
  app.use('/api/chat-groups', authMiddleware, chatGroupRoutes);
  app.use('/api/messages', authMiddleware, messageRoutes);
  app.use('/api/friends', authMiddleware, friendRoutes);
  app.use('/api/notifications', authMiddleware, notificationRoutes);
} catch (error) {
  console.error('Error setting up routes:', error);
}

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Initialize Socket.IO
const socketService = new SocketService(io);
socketService.initialize();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log('🔧 Starting server initialization...');
    
    // Connect to database
    await connectDB();
    console.log('✅ Database connected');
    
    // Start HTTP server
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔌 Socket.IO server ready`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`🔗 CORS origins configured: ${allowedOrigins.length} origins`);
      console.log(`📡 API Base: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log('SIGTERM received, shutting down gracefully');
  httpServer.close(() => {
    console.log("Process terminated");
  });
});

process.on("SIGINT", () => {
  console.log('SIGINT received, shutting down gracefully');
  httpServer.close(() => {
    console.log("Process terminated");
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

startServer();

export { app, io };