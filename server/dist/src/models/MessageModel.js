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
exports.Message = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const messageSchema = new mongoose_1.Schema({
    senderId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Sender ID is required']
    },
    recipientId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: function () {
            return !this.channelId && !this.chatGroupId;
        }
    },
    channelId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Channel',
        required: function () {
            return !this.recipientId && !this.chatGroupId;
        }
    },
    chatGroupId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'ChatGroup',
        required: function () {
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
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            readAt: {
                type: Date,
                default: Date.now
            }
        }]
}, {
    timestamps: true
});
messageSchema.index({ senderId: 1, createdAt: -1 });
messageSchema.index({ recipientId: 1, createdAt: -1 });
messageSchema.index({ channelId: 1, createdAt: -1 });
messageSchema.index({ chatGroupId: 1, createdAt: -1 });
messageSchema.index({ createdAt: -1 });
messageSchema.index({ isDeleted: 1 });
messageSchema.pre('save', function (next) {
    const destinations = [this.recipientId, this.channelId, this.chatGroupId].filter(Boolean);
    if (destinations.length !== 1) {
        return next(new Error('Message must have exactly one destination (recipientId, channelId, or chatGroupId)'));
    }
    next();
});
messageSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update && update.content) {
        update.isEdited = true;
        update.editedAt = new Date();
    }
    next();
});
exports.Message = mongoose_1.default.model('Message', messageSchema);
//# sourceMappingURL=MessageModel.js.map