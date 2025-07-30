‹import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  senderId: mongoose.Types.ObjectId;
  recipientId?: mongoose.Types.ObjectId;
  channelId?: mongoose.Types.ObjectId;
  chatGroupId?: mongoose.Types.ObjectId;
  content: string;
  type: 'text' | 'image' | 'file' | 'audio' | 'video' | 'system';
  isEdited: boolean;
  editedAt?: Date;
  isDeleted: boolean;
  deletedAt?: Date;
  readBy: {
    userId: mongoose.Types.ObjectId;
    readAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender ID is required']
    },
    recipientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: function() {
        return !this.channelId && !this.chatGroupId;
      }
    },
    channelId: {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
      required: function() {
        return !this.recipientId && !this.chatGroupId;
      }
    },
    chatGroupId: {
      type: Schema.Types.ObjectId,
      ref: 'ChatGroup',
      required: function() {
        return !this.recipientId && !this.channelId;
      }
    },
    content: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    type: {
      type: String,
      enum: ['text', 'image', 'file', 'audio', 'video', 'system'],
      default: 'text'
    },
    isEdited: {
      type: Boolean,
      default: false
    },
    editedAt: {
      type: Date
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    deletedAt: {
      type: Date
    },
    readBy: [{
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      readAt: {
        type: Date,
        default: Date.now
      }
    }]
  },
  {
    timestamps: true
  }
);

messageSchema.index({ senderId: 1, createdAt: -1 });
messageSchema.index({ recipientId: 1, createdAt: -1 });
messageSchema.index({ channelId: 1, createdAt: -1 });
messageSchema.index({ chatGroupId: 1, createdAt: -1 });
messageSchema.index({ createdAt: -1 });
messageSchema.index({ isDeleted: 1 });

// Validation: ensure only one destination is set
messageSchema.pre('save', function(next) {
  const destinations = [this.recipientId, this.channelId, this.chatGroupId].filter(Boolean);
  if (destinations.length !== 1) {
    return next(new Error('Message must have exactly one destination (recipientId, channelId, or chatGroupId)'));
  }
  next();
});

// Update editedAt when message is edited
messageSchema.pre('findOneAndUpdate', function(next) {
  const update = this.getUpdate() as any;
  if (update && update.content) {
    update.isEdited = true;
    update.editedAt = new Date();
  }
  next();
});

export const Message = mongoose.model<IMessage>('Message', messageSchema);