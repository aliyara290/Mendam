"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.worksapceMember = exports.workspace = exports.TeamMember = exports.Channel = exports.Team = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const teamSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Team name is required"],
        trim: true,
        maxlength: [100, "Team name cannot exceed 100 characters"],
    },
    workspaceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Group",
        required: [true, "Group ID is required"],
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Creator is required"],
    },
}, {
    timestamps: true,
});
const channelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Channel name is required"],
        trim: true,
        maxlength: [100, "Channel name cannot exceed 100 characters"],
    },
    teamId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Team",
        required: [true, "Team ID is required"],
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Creator is required"],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [500, "Channel description cannot exceed 500 characters"],
    },
}, {
    timestamps: true,
});
const teamMemberSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },
    teamId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
const workspaceSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true,
});
const workspaceMemberSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },
    workspaceId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, {
    timestamps: true,
});
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
exports.Team = mongoose_1.default.model("Team", teamSchema);
exports.Channel = mongoose_1.default.model("Channel", channelSchema);
exports.TeamMember = mongoose_1.default.model("TeamMember", teamMemberSchema);
exports.workspace = mongoose_1.default.model("Team", workspaceSchema);
exports.worksapceMember = mongoose_1.default.model("Team", workspaceMemberSchema);
