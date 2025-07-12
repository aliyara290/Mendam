"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatGroupController_1 = require("../controllers/chatGroupController");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.post('/', validation_1.validateChatGroup, chatGroupController_1.createChatGroup);
router.get('/', chatGroupController_1.getUserChatGroups);
router.get('/search', chatGroupController_1.searchPublicGroups);
router.get('/:groupId', (0, validation_1.validateObjectId)('groupId'), chatGroupController_1.getChatGroupDetails);
router.post('/:groupId/join', (0, validation_1.validateObjectId)('groupId'), chatGroupController_1.joinGroup);
router.delete('/:groupId/leave', (0, validation_1.validateObjectId)('groupId'), chatGroupController_1.leaveGroup);
router.post('/:groupId/members', (0, validation_1.validateObjectId)('groupId'), chatGroupController_1.addMemberToGroup);
router.delete('/:groupId/members/:memberId', (0, validation_1.validateObjectId)('groupId'), (0, validation_1.validateObjectId)('memberId'), chatGroupController_1.removeMemberFromGroup);
router.put('/:groupId/members/:memberId/role', (0, validation_1.validateObjectId)('groupId'), (0, validation_1.validateObjectId)('memberId'), chatGroupController_1.updateMemberRole);
exports.default = router;
