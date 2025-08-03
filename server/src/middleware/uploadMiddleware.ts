import multer from 'multer';
import { Request, Response, NextFunction } from 'express';

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '5242880'), // 5MB default
    files: 1, 
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only image files are allowed.'));
    }
  }
});

export const uploadAvatar = upload.single('avatar');

export const handleUploadError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
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