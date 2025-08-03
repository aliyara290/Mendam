import multer from 'multer';
import { Request, Response, NextFunction } from 'express';

// Configure multer for memory storage
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880'), // 5MB default
    files: 1, // Only allow one file
  },
  fileFilter: (req, file, cb) => {
    // Check if the file is an image
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only image files are allowed.'));
    }
  }
});

// Middleware for single avatar upload
export const uploadAvatar = upload.single('avatar');

// Error handling middleware for multer
export const handleUploadError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (error instanceof multer.MulterError) {
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
  }
  
  if (error.message.includes('Invalid file type')) {
    res.status(400).json({
      success: false,
      message: error.message
    });
    return;
  }
  
  // For other errors, pass to general error handler
  next(error);
};

// Optional: Middleware to require file upload
export const requireFile = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.file) {
    res.status(400).json({
      success: false,
      message: 'No file uploaded'
    });
    return;
  }
  next();
};