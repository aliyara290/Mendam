"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = require("../models/UserModel");
class SocketService {
    constructor(io) {
        this.connectedUsers = new Map();
        this.io = io;
    }
    initialize() {
        this.io.use(async (socket, next) => {
            try {
                const token = socket.handshake.auth.token;
                if (!token) {
                    return next(new Error('No token provided'));
                }
                const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                const user = await UserModel_1.User.findById(decoded.userId);
                if (!user) {
                    return next(new Error('User not found'));
                }
                socket.userId = user._id.toString();
                socket.username = user.username;
                next();
            }
            catch (error) {
                next(new Error('Authentication failed'));
            }
        });
        this.io.on('connection', (socket) => {
            this.handleConnection(socket);
        });
    }
    async handleConnection(socket) {
        const userId = socket.userId;
        console.log(`User ${socket.username} connected`);
        this.connectedUsers.set(userId, socket.id);
        await UserModel_1.User.findByIdAndUpdate(userId, {
            isOnline: true,
            status: 'online',
            lastSeen: new Date()
        });
        socket.join(userId);
        socket.broadcast.emit('user_online', {
            userId,
            username: socket.username
        });
        socket.on('join_group', (groupId) => {
            socket.join(`group_${groupId}`);
            console.log(`User ${socket.username} joined group ${groupId}`);
        });
        socket.on('leave_group', (groupId) => {
            socket.leave(`group_${groupId}`);
            console.log(`User ${socket.username} left group ${groupId}`);
        });
        socket.on('send_direct_message', (data) => {
            this.io.to(data.recipientId).emit('new_direct_message', {
                senderId: userId,
                senderUsername: socket.username,
                content: data.content,
                type: data.type || 'text',
                timestamp: new Date()
            });
        });
        socket.on('send_group_message', (data) => {
            this.io.to(`group_${data.groupId}`).emit('new_group_message', {
                senderId: userId,
                senderUsername: socket.username,
                groupId: data.groupId,
                content: data.content,
                type: data.type || 'text',
                timestamp: new Date()
            });
        });
        socket.on('typing_start_direct', (data) => {
            this.io.to(data.recipientId).emit('user_typing_start', {
                userId,
                username: socket.username,
                type: 'direct'
            });
        });
        socket.on('typing_stop_direct', (data) => {
            this.io.to(data.recipientId).emit('user_typing_stop', {
                userId,
                username: socket.username,
                type: 'direct'
            });
        });
        socket.on('typing_start_group', (data) => {
            socket.to(`group_${data.groupId}`).emit('user_typing_start', {
                userId,
                username: socket.username,
                groupId: data.groupId,
                type: 'group'
            });
        });
        socket.on('typing_stop_group', (data) => {
            socket.to(`group_${data.groupId}`).emit('user_typing_stop', {
                userId,
                username: socket.username,
                groupId: data.groupId,
                type: 'group'
            });
        });
        socket.on('message_read', (data) => {
            this.io.to(data.senderId).emit('message_read_receipt', {
                messageId: data.messageId,
                readBy: userId,
                readAt: new Date()
            });
        });
        socket.on('status_update', async (status) => {
            await UserModel_1.User.findByIdAndUpdate(userId, { status });
            socket.broadcast.emit('user_status_change', {
                userId,
                username: socket.username,
                status
            });
        });
        socket.on('disconnect', async () => {
            console.log(`User ${socket.username} disconnected`);
            this.connectedUsers.delete(userId);
            await UserModel_1.User.findByIdAndUpdate(userId, {
                isOnline: false,
                status: 'offline',
                lastSeen: new Date()
            });
            socket.broadcast.emit('user_offline', {
                userId,
                username: socket.username,
                lastSeen: new Date()
            });
        });
        socket.on('error', (error) => {
            console.error(`Socket error for user ${socket.username}:`, error);
        });
    }
    sendNotificationToUser(userId, notification) {
        this.io.to(userId).emit('notification', notification);
    }
    sendMessageToGroup(groupId, message) {
        this.io.to(`group_${groupId}`).emit('new_group_message', message);
    }
    getOnlineUsersCount() {
        return this.connectedUsers.size;
    }
    isUserOnline(userId) {
        return this.connectedUsers.has(userId);
    }
}
exports.SocketService = SocketService;
