"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notificationController_1 = require("../controllers/notificationController");
const router = express_1.default.Router();
router.get('/', notificationController_1.getNotifications);
router.put('/:notificationId/read', notificationController_1.markAsRead);
router.put('/read-all', notificationController_1.markAllAsRead);
router.delete('/:notificationId', notificationController_1.deleteNotification);
exports.default = router;
