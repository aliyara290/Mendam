"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireFile = exports.handleUploadError = exports.uploadAvatar = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880'),
        files: 1,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file type. Only image files are allowed.'));
        }
    }
});
exports.uploadAvatar = upload.single('avatar');
const handleUploadError = (error, req, res, next) => {
    if (error) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            res.status(400).json({
                success: false,
                message: 'File too large. Maximum size is 5MB.'
            });
            return;
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            res.status(400).json({
                success: false,
                message: 'Too many files. Only one file is allowed.'
            });
            return;
        }
        if (error.message && error.message.includes('Invalid file type')) {
            res.status(400).json({
                success: false,
                message: error.message
            });
            return;
        }
    }
    next(error);
};
exports.handleUploadError = handleUploadError;
const requireFile = (req, res, next) => {
    if (!req.file) {
        res.status(400).json({
            success: false,
            message: 'No file uploaded'
        });
        return;
    }
    next();
};
exports.requireFile = requireFile;
