"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../controllers/messageController");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.post('/direct', validation_1.validateMessage, messageController_1.sendDirectMessage);
router.post('/group', validation_1.validateMessage, messageController_1.sendGroupMessage);
router.get('/direct/:userId', (0, validation_1.validateObjectId)('userId'), messageController_1.getDirectMessages);
router.get('/group/:groupId', (0, validation_1.validateObjectId)('groupId'), messageController_1.getGroupMessages);
router.delete('/:messageId', (0, validation_1.validateObjectId)('messageId'), messageController_1.deleteMessage);
exports.default = router;
//# sourceMappingURL=messageRoutes.js.map