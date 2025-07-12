import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/config/database";
import { errorHandler } from "./src/middleware/errorHandler";
import { notFoundHandler } from "./src/middleware/notFoundHandler";
import { authMiddleware } from "./src/middleware/authMiddleware";

import authRoutes from "./src/routes/authRoutes";
import userRoutes from "./src/routes/userRoutes";
import chatGroupRoutes from "./src/routes/chatGroupRoutes";
import messageRoutes from "./src/routes/messageRoutes";
import friendRoutes from "./src/routes/friendRoutes";
import notificationRoutes from "./src/routes/notificationRoutes";

import { SocketService } from "./src/socket/socketService";

const app = express();
const httpServer = createServer(app);

// Parse CORS origins from environment variable with fallbacks
const corsOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
  : [
      "https://mendam.vercel.app",
      "https://mendam-git-main-aliyarafrs-projects.vercel.app", // Vercel preview URLs
      "https://mendam-*.vercel.app", // Vercel branch deployments
      "http://localhost:3000",
      "http://localhost:5173",
      "http://127.0.0.1:3000",
      "http://127.0.0.1:5173"
    ];

const socketCorsOrigins = process.env.SOCKET_CORS_ORIGIN 
  ? process.env.SOCKET_CORS_ORIGIN.split(',').map(origin => origin.trim())
  : corsOrigins;

// More permissive CORS for production debugging
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin matches our allowed origins or patterns
    const isAllowed = corsOrigins.some(allowedOrigin => {
      if (allowedOrigin.includes('*')) {
        // Handle wildcard patterns
        const pattern = allowedOrigin.replace('*', '.*');
        return new RegExp(`^${pattern}$`).test(origin);
      }
      return allowedOrigin === origin;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      console.log(`❌ CORS blocked origin: ${origin}`);
      console.log(`✅ Allowed origins: ${corsOrigins.join(', ')}`);
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers'
  ],
  exposedHeaders: ['Authorization'],
  optionsSuccessStatus: 200,
  preflightContinue: false,
  maxAge: 86400 // 24 hours
};

const io = new Server(httpServer, {
  cors: {
    origin: socketCorsOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Rate limiter
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
    if (process.env.NODE_ENV === 'development') {
      return req.path.includes('/health') || req.path.includes('/auth');
    }
    return req.path.includes('/health');
  }
});

// Middleware order is important
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));

app.use(compression());

// CORS must be before other middleware
app.use(cors(corsOptions));

// Handle preflight requests explicitly
app.options('*', cors(corsOptions));

app.use(morgan("combined"));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check route (before rate limiting)
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    corsOrigins: corsOrigins
  });
});

// Apply rate limiting after health check
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/chat-groups', authMiddleware, chatGroupRoutes);
app.use('/api/messages', authMiddleware, messageRoutes);
app.use('/api/friends', authMiddleware, friendRoutes);
app.use('/api/notifications', authMiddleware, notificationRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const socketService = new SocketService(io);
socketService.initialize();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log(`🔌 Socket.IO server ready`);
      console.log(`🏥 Health check: http://localhost:${PORT}/health`);
      console.log(`🔗 CORS origins: ${corsOrigins.join(', ')}`);
      console.log(`📡 Socket CORS origins: ${socketCorsOrigins.join(', ')}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

process.on("SIGTERM", () => {
  httpServer.close(() => {
    console.log("Process terminated");
  });
});

process.on("SIGINT", () => {
  httpServer.close(() => {
    console.log("Process terminated");
  });
});

startServer();

export { app, io };