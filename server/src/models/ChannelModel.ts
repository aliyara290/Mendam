import mongoose, { Document, Schema } from "mongoose";

export interface ITeam extends Document {
  name: string;
  workspaceId: mongoose.Types.ObjectId;
  isPrivate: boolean;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IChannel extends Document {
  name: string;
  teamId: mongoose.Types.ObjectId;
  createdBy: mongoose.Types.ObjectId;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITeamMember extends Document {
  userId: mongoose.Types.ObjectId;
  teamId: mongoose.Types.ObjectId;
  role: "admin" | "moderator" | "member";
  joinedAt: Date;
  isActive: boolean;
  permissions: string[];
}

export interface IWorkspace extends Document {
  name: string;
  description: string;
  avatar: string;
  createdBy: Schema.Types.ObjectId;
}

export interface IWorkspaceMember extends Document {
  userId: mongoose.Types.ObjectId;
  workspaceId: mongoose.Types.ObjectId;
  role: "admin" | "moderator" | "member";
  joinedAt: Date;
  isActive: boolean;
  permissions: string[];
}

// Team Schema
const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: [true, "Team name is required"],
      trim: true,
      maxlength: [100, "Team name cannot exceed 100 characters"],
    },
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: [true, "Group ID is required"],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Channel Schema
const channelSchema = new Schema<IChannel>(
  {
    name: {
      type: String,
      required: [true, "Channel name is required"],
      trim: true,
      maxlength: [100, "Channel name cannot exceed 100 characters"],
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team ID is required"],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Channel description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Team Member Schema
const teamMemberSchema = new Schema<ITeamMember>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team ID is required"],
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "member"],
      default: "member",
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    permissions: [
      {
        type: String,
        enum: [
          "manage_channels",
          "manage_members",
          "send_messages",
          "delete_messages",
          "manage_roles",
          "kick_members",
          "ban_members",
          "view_audit_log",
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const workspaceSchema = new Schema<IWorkspace>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Workspace name is required"],
    },
    description: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const workspaceMemberSchema = new Schema<IWorkspaceMember>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "Workspace",
      required: [true, "Workspace ID is required"],
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "member"],
      default: "member",
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    permissions: [
      {
        type: String,
        enum: [
          "manage_teams",
          "manage_members",
          "send_messages",
          "delete_messages",
          "manage_roles",
          "kick_members",
          "ban_members",
          "view_audit_log",
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Indexes
teamSchema.index({ workspaceId: 1 });
teamSchema.index({ createdBy: 1 });
teamSchema.index({ name: 1 });

channelSchema.index({ teamId: 1 });
channelSchema.index({ createdBy: 1 });
channelSchema.index({ name: 1, teamId: 1 }, { unique: true });

teamMemberSchema.index({ userId: 1, teamId: 1 }, { unique: true });
teamMemberSchema.index({ teamId: 1, isActive: 1 });
teamMemberSchema.index({ userId: 1, isActive: 1 });

workspaceMemberSchema.index({ userId: 1, isActive: 1 });

workspaceSchema.index({ name: 1 });

teamSchema.virtual("memberCount", {
  ref: "TeamMember",
  localField: "_id",
  foreignField: "teamId",
  count: true,
  match: { isActive: true },
});

teamSchema.virtual("channelCount", {
  ref: "Channel",
  localField: "_id",
  foreignField: "teamId",
  count: true,
});

teamSchema.set("toJSON", { virtuals: true });
teamSchema.set("toObject", { virtuals: true });

export const Team = mongoose.model<ITeam>("Team", teamSchema);
export const Channel = mongoose.model<IChannel>("Channel", channelSchema);
export const TeamMember = mongoose.model<ITeamMember>(
  "TeamMember",
  teamMemberSchema
);
export const workspace = mongoose.model<IWorkspace>("Team", workspaceSchema);
export const worksapceMember = mongoose.model<IWorkspaceMember>(
  "Team",
  workspaceMemberSchema
);
