import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ISocketSession extends Document {
  userId: mongoose.Types.ObjectId;
  socketId: string;
  isOnline: boolean;
  lastSeen: Date;
  deviceInfo?: {
    platform: string;
    browser: string;
    version: string;
  };
}

const socketSessionSchema = new Schema<ISocketSession>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    socketId: {
      type: String,
      required: true,
      unique: true
    },
    isOnline: {
      type: Boolean,
      default: true
    },
    lastSeen: {
      type: Date,
      default: Date.now
    },
    deviceInfo: {
      platform: String,
      browser: String,
      version: String
    }
  },
  {
    timestamps: true
  }
);


socketSessionSchema.index({ userId: 1 });
socketSessionSchema.index({ socketId: 1 }, { unique: true });

export const SocketSession = mongoose.model<ISocketSession>('SocketSession', socketSessionSchema);
