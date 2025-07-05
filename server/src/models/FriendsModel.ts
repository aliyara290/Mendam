import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export interface IFriend extends Document {
  id: string;
  userId: mongoose.Types.ObjectId;
  friendId: mongoose.Types.ObjectId;
  nickName?: string;
  status: 'pending' | 'accepted' | 'blocked' | 'declined';
  requestedBy: mongoose.Types.ObjectId;
  addedAt: Date;
  acceptedAt?: Date;
}


const friendSchema = new Schema<IFriend>(
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
    friendId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    nickName: {
      type: String,
      trim: true,
      maxlength: [50, 'Nickname cannot exceed 50 characters']
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'blocked', 'declined'],
      default: 'pending'
    },
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    addedAt: {
      type: Date,
      default: Date.now
    },
    acceptedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);
