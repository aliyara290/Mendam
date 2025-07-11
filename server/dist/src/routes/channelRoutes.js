"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const channelController_1 = require("../controllers/channelController");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.post('/', channelController_1.createChannel);
router.get('/team/:teamId', (0, validation_1.validateObjectId)('teamId'), channelController_1.getTeamChannels);
router.get('/:channelId', (0, validation_1.validateObjectId)('channelId'), channelController_1.getChannelDetails);
router.put('/:channelId', (0, validation_1.validateObjectId)('channelId'), channelController_1.updateChannel);
router.delete('/:channelId', (0, validation_1.validateObjectId)('channelId'), channelController_1.deleteChannel);
router.post('/:channelId/messages', (0, validation_1.validateObjectId)('channelId'), validation_1.validateMessage, channelController_1.sendChannelMessage);
router.get('/:channelId/messages', (0, validation_1.validateObjectId)('channelId'), channelController_1.getChannelMessages);
exports.default = router;
//# sourceMappingURL=channelRoutes.js.map