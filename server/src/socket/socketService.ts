import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import { User } from '@/models/UserModel';

interface AuthenticatedSocket {
  userId: string;
  username: string;
  [key: string]: any;
}

export class SocketService {
  private io: Server;
  private connectedUsers: Map<string, string> = new Map(); // userId -> socketId

  constructor(io: Server) {
    this.io = io;
  }

  initialize() {
    // Authentication middleware
    this.io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token;
        
        if (!token) {
          return next(new Error('No token provided'));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
        const user = await User.findById(decoded.userId);
        
        if (!user) {
          return next(new Error('User not found'));
        }

        // Add user info to socket
        (socket as any).userId = user._id.toString();
        (socket as any).username = user.username;
        
        next();
      } catch (error) {
        next(new Error('Authentication failed'));
      }
    });

    this.io.on('connection', (socket) => {
      this.handleConnection(socket as any);
    });
  }

  private async handleConnection(socket: AuthenticatedSocket) {
    const userId = socket.userId;
    
    console.log(`User ${socket.username} connected`);

    // Store connection
    this.connectedUsers.set(userId, socket.id);

    // Update user status to online
    await User.findByIdAndUpdate(userId, {
      isOnline: true,
      status: 'online',
      lastSeen: new Date()
    });

    // Join user to their personal room
    socket.join(userId);

    // Notify other users that this user is online
    socket.broadcast.emit('user_online', {
      userId,
      username: socket.username
    });

    // Handle joining chat groups
    socket.on('join_group', (groupId: string) => {
      socket.join(`group_${groupId}`);
      console.log(`User ${socket.username} joined group ${groupId}`);
    });

    // Handle leaving chat groups
    socket.on('leave_group', (groupId: string) => {
      socket.leave(`group_${groupId}`);
      console.log(`User ${socket.username} left group ${groupId}`);
    });

    // Handle direct messages
    socket.on('send_direct_message', (data: {
      recipientId: string;
      content: string;
      type?: string;
    }) => {
      // Send message to recipient if they're online
      this.io.to(data.recipientId).emit('new_direct_message', {
        senderId: userId,
        senderUsername: socket.username,
        content: data.content,
        type: data.type || 'text',
        timestamp: new Date()
      });
    });

    // Handle group messages
    socket.on('send_group_message', (data: {
      groupId: string;
      content: string;
      type?: string;
    }) => {
      // Send message to all group members
      this.io.to(`group_${data.groupId}`).emit('new_group_message', {
        senderId: userId,
        senderUsername: socket.username,
        groupId: data.groupId,
        content: data.content,
        type: data.type || 'text',
        timestamp: new Date()
      });
    });

    // Handle typing indicators for direct messages
    socket.on('typing_start_direct', (data: { recipientId: string }) => {
      this.io.to(data.recipientId).emit('user_typing_start', {
        userId,
        username: socket.username,
        type: 'direct'
      });
    });

    socket.on('typing_stop_direct', (data: { recipientId: string }) => {
      this.io.to(data.recipientId).emit('user_typing_stop', {
        userId,
        username: socket.username,
        type: 'direct'
      });
    });

    // Handle typing indicators for groups
    socket.on('typing_start_group', (data: { groupId: string }) => {
      socket.to(`group_${data.groupId}`).emit('user_typing_start', {
        userId,
        username: socket.username,
        groupId: data.groupId,
        type: 'group'
      });
    });

    socket.on('typing_stop_group', (data: { groupId: string }) => {
      socket.to(`group_${data.groupId}`).emit('user_typing_stop', {
        userId,
        username: socket.username,
        groupId: data.groupId,
        type: 'group'
      });
    });

    // Handle message read receipts
    socket.on('message_read', (data: { messageId: string, senderId: string }) => {
      this.io.to(data.senderId).emit('message_read_receipt', {
        messageId: data.messageId,
        readBy: userId,
        readAt: new Date()
      });
    });

    // Handle status updates
    socket.on('status_update', async (status: 'online' | 'idle' | 'offline') => {
      await User.findByIdAndUpdate(userId, { status });
      
      // Notify all connected users about status change
      socket.broadcast.emit('user_status_change', {
        userId,
        username: socket.username,
        status
      });
    });

    // Handle disconnect
    socket.on('disconnect', async () => {
      console.log(`User ${socket.username} disconnected`);

      // Remove from connected users
      this.connectedUsers.delete(userId);

      // Update user status to offline
      await User.findByIdAndUpdate(userId, {
        isOnline: false,
        status: 'offline',
        lastSeen: new Date()
      });

      // Notify other users that this user is offline
      socket.broadcast.emit('user_offline', {
        userId,
        username: socket.username,
        lastSeen: new Date()
      });
    });

    // Handle errors
    socket.on('error', (error) => {
      console.error(`Socket error for user ${socket.username}:`, error);
    });
  }

  // Method to send notification to a specific user
  public sendNotificationToUser(userId: string, notification: any) {
    this.io.to(userId).emit('notification', notification);
  }

  // Method to send message to a group
  public sendMessageToGroup(groupId: string, message: any) {
    this.io.to(`group_${groupId}`).emit('new_group_message', message);
  }

  // Method to get online users count
  public getOnlineUsersCount(): number {
    return this.connectedUsers.size;
  }

  // Method to check if user is online
  public isUserOnline(userId: string): boolean {
    return this.connectedUsers.has(userId);
  }
}