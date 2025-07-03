import mongoose, { Document, Schema } from 'mongoose';

export interface IChatGroup extends Document {
  name: string;
  description?: string;
  avatar?: string;
  isPrivate: boolean;
  createdBy: mongoose.Types.ObjectId;
  maxMembers: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChatGroupMember extends Document {
  userId: mongoose.Types.ObjectId;
  chatGroupId: mongoose.Types.ObjectId;
  role: 'admin' | 'moderator' | 'member';
  joinedAt: Date;
  isActive: boolean;
  invitedBy?: mongoose.Types.ObjectId;
}

const chatGroupSchema = new Schema<IChatGroup>(
  {
    name: {
      type: String,
      required: [true, 'Group name is required'],
      trim: true,
      maxlength: [100, 'Group name cannot exceed 100 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Group description cannot exceed 500 characters']
    },
    avatar: {
      type: String,
      default: ''
    },
    isPrivate: {
      type: Boolean,
      default: false
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Creator is required']
    },
    maxMembers: {
      type: Number,
      default: 100,
      min: [2, 'Group must allow at least 2 members'],
      max: [1000, 'Group cannot exceed 1000 members']
    }
  },
  {
    timestamps: true
  }
);

const chatGroupMemberSchema = new Schema<IChatGroupMember>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    chatGroupId: {
      type: Schema.Types.ObjectId,
      ref: 'ChatGroup',
      required: [true, 'Chat Group ID is required']
    },
    role: {
      type: String,
      enum: ['admin', 'moderator', 'member'],
      default: 'member'
    },
    joinedAt: {
      type: Date,
      default: Date.now
    },
    isActive: {
      type: Boolean,
      default: true
    },
    invitedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

chatGroupSchema.index({ createdBy: 1 });
chatGroupSchema.index({ name: 1 });
chatGroupSchema.index({ isPrivate: 1 });

chatGroupMemberSchema.index({ userId: 1, chatGroupId: 1 }, { unique: true });
chatGroupMemberSchema.index({ chatGroupId: 1, isActive: 1 });
chatGroupMemberSchema.index({ userId: 1, isActive: 1 });

chatGroupSchema.virtual('memberCount', {
  ref: 'ChatGroupMember',
  localField: '_id',
  foreignField: 'chatGroupId',
  count: true,
  match: { isActive: true }
});

chatGroupSchema.set('toJSON', { virtuals: true });
chatGroupSchema.set('toObject', { virtuals: true });

export const ChatGroup = mongoose.model<IChatGroup>('ChatGroup', chatGroupSchema);
export const ChatGroupMember = mongoose.model<IChatGroupMember>('ChatGroupMember', chatGroupMemberSchema);