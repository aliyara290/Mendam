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

// Parse CORS origins from environment variable
const corsOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
  : ["https://mendam.vercel.app", "http://localhost:3000"];

const socketCorsOrigins = process.env.SOCKET_CORS_ORIGIN 
  ? process.env.SOCKET_CORS_ORIGIN.split(',').map(origin => origin.trim())
  : ["https://mendam.vercel.app", "http://localhost:3000"];

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
    return false;
  }
});

app.use(helmet());
app.use(compression());
app.use(morgan("combined"));

app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    preflightContinue: false,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(limiter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', limiter, authMiddleware, userRoutes);
app.use('/api/chat-groups', limiter, authMiddleware, chatGroupRoutes);
app.use('/api/messages', limiter, authMiddleware, messageRoutes);
app.use('/api/friends', limiter, authMiddleware, friendRoutes);
app.use('/api/notifications', limiter, authMiddleware, notificationRoutes);

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