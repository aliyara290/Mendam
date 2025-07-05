import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IAttachment extends Document {
  messageId: mongoose.Types.ObjectId;
  fileName: string;
  fileType: string;
  fileSize: number;
  fileUrl: string;
  thumbnailUrl?: string;
  uploadedBy: mongoose.Types.ObjectId;
  createdAt: Date;
}

const attachmentSchema = new Schema<IAttachment>(
  {
    messageId: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    fileType: {
      type: String,
      required: true
    },
    fileSize: {
      type: Number,
      required: true
    },
    fileUrl: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String
    },
    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);