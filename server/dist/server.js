"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = require("./src/config/database");
const errorHandler_1 = require("./src/middleware/errorHandler");
const notFoundHandler_1 = require("./src/middleware/notFoundHandler");
const authMiddleware_1 = require("./src/middleware/authMiddleware");
const authRoutes_1 = __importDefault(require("./src/routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const chatGroupRoutes_1 = __importDefault(require("./src/routes/chatGroupRoutes"));
const messageRoutes_1 = __importDefault(require("./src/routes/messageRoutes"));
const friendRoutes_1 = __importDefault(require("./src/routes/friendRoutes"));
const notificationRoutes_1 = __importDefault(require("./src/routes/notificationRoutes"));
const socketService_1 = require("./src/socket/socketService");
const app = (0, express_1.default)();
exports.app = app;
const httpServer = (0, http_1.createServer)(app);
const corsOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
    : ["http://localhost:5173", "http://localhost:3000"];
const socketCorsOrigins = process.env.SOCKET_CORS_ORIGIN
    ? process.env.SOCKET_CORS_ORIGIN.split(',').map(origin => origin.trim())
    : ["http://localhost:5173", "http://localhost:3000"];
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: socketCorsOrigins,
        methods: ["GET", "POST"],
        credentials: true,
    },
});
exports.io = io;
const limiter = (0, express_rate_limit_1.default)({
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
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use((0, cors_1.default)({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    preflightContinue: false,
}));
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10mb" }));
app.use(limiter);
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});
app.use('/api/auth', authRoutes_1.default);
app.use('/api/users', limiter, authMiddleware_1.authMiddleware, userRoutes_1.default);
app.use('/api/chat-groups', limiter, authMiddleware_1.authMiddleware, chatGroupRoutes_1.default);
app.use('/api/messages', limiter, authMiddleware_1.authMiddleware, messageRoutes_1.default);
app.use('/api/friends', limiter, authMiddleware_1.authMiddleware, friendRoutes_1.default);
app.use('/api/notifications', limiter, authMiddleware_1.authMiddleware, notificationRoutes_1.default);
app.use(notFoundHandler_1.notFoundHandler);
app.use(errorHandler_1.errorHandler);
const socketService = new socketService_1.SocketService(io);
socketService.initialize();
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await (0, database_1.connectDB)();
        httpServer.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
            console.log(`🔌 Socket.IO server ready`);
            console.log(`🏥 Health check: http://localhost:${PORT}/health`);
            console.log(`🔗 CORS origins: ${corsOrigins.join(', ')}`);
        });
    }
    catch (error) {
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
//# sourceMappingURL=server.js.map