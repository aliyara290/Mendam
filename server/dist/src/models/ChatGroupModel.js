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
exports.ChatGroupMember = exports.ChatGroup = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const chatGroupSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Creator is required']
    },
    maxMembers: {
        type: Number,
        default: 100,
        min: [2, 'Group must allow at least 2 members'],
        max: [1000, 'Group cannot exceed 1000 members']
    }
}, {
    timestamps: true
});
const chatGroupMemberSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    chatGroupId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
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
exports.ChatGroup = mongoose_1.default.model('ChatGroup', chatGroupSchema);
exports.ChatGroupMember = mongoose_1.default.model('ChatGroupMember', chatGroupMemberSchema);
