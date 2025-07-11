"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const friendController_1 = require("../controllers/friendController");
const router = express_1.default.Router();
router.post('/request', friendController_1.sendFriendRequest);
router.put('/request/:requestId/accept', friendController_1.acceptFriendRequest);
router.put('/request/:requestId/decline', friendController_1.declineFriendRequest);
router.get('/requests', friendController_1.getFriendRequests);
router.get('/', friendController_1.getFriends);
router.delete('/:friendId', friendController_1.removeFriend);
router.post('/block', friendController_1.blockUser);
exports.default = router;
//# sourceMappingURL=friendRoutes.js.map