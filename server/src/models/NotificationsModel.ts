import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface INotification extends Document {
  id: string;
  userId: mongoose.Types.ObjectId;
  type: 'friend_request' | 'message' | 'group_invite' | 'team_invite' | 'mention' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  data?: any;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    type: {
      type: String,
      enum: ['friend_request', 'message', 'group_invite', 'team_invite', 'mention', 'system'],
      required: true
    },
    title: {
      type: String,
      required: true,
      maxlength: [100, 'Title cannot exceed 100 characters']
    },
    message: {
      type: String,
      required: true,
      maxlength: [500, 'Message cannot exceed 500 characters']
    },
    isRead: {
      type: Boolean,
      default: false
    },
    data: Schema.Types.Mixed
  },
  {
    timestamps: true
  }
);
