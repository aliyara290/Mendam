import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUserPreference extends Document {
  userId: mongoose.Types.ObjectId;
  notificationSettings: {
    email: boolean;
    push: boolean;
    desktop: boolean;
    sound: boolean;
    mentions: boolean;
    directMessages: boolean;
    groupMessages: boolean;
  };
  theme: string;
  language: string;
  timezone: string;
}

const userPreferenceSchema = new Schema<IUserPreference>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    notificationSettings: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      desktop: { type: Boolean, default: true },
      sound: { type: Boolean, default: true },
      mentions: { type: Boolean, default: true },
      directMessages: { type: Boolean, default: true },
      groupMessages: { type: Boolean, default: true },
    },
    theme: {
      type: String,
      enum: ["light", "dark", "auto"],
      default: "auto",
    },
    language: {
      type: String,
      default: "en",
    },
    timezone: {
      type: String,
      default: "UTC",
    },
  },
  {
    timestamps: true,
  }
);

userPreferenceSchema.index({ userId: 1 }, { unique: true });

export const UserPreference = mongoose.model<IUserPreference>('UserPreference', userPreferenceSchema);
