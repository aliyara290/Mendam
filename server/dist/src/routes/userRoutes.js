"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.get('/profile', userController_1.getCurrentUser);
router.put('/profile', userController_1.updateProfile);
router.get('/search', userController_1.searchUsers);
router.get('/:userId', userController_1.getUserById);
router.put('/status', userController_1.updateStatus);
exports.default = router;
