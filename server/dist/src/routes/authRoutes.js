"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const validation_1 = require("../middleware/validation");
const router = express_1.default.Router();
router.post('/register', validation_1.validateRegistration, authController_1.register);
router.post('/login', validation_1.validateLogin, authController_1.login);
router.post('/logout', authMiddleware_1.authMiddleware, authController_1.logout);
router.get('/profile', authMiddleware_1.authMiddleware, authController_1.getProfile);
exports.default = router;
