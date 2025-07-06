import { Request, Response, NextFunction } from 'express';

// Validation for registration
export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password, fullName } = req.body;

  // Check required fields
  if (!username || !email || !password || !fullName) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: username, email, password, fullName'
    });
  }

  // Validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Validate username format
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username) || username.length < 3 || username.length > 20) {
    return res.status(400).json({
      success: false,
      message: 'Username must be 3-20 characters long and contain only letters, numbers, and underscores'
    });
  }

  // Validate password strength
  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters long'
    });
  }

  // Validate full name
  if (fullName.length > 50) {
    return res.status(400).json({
      success: false,
      message: 'Full name cannot exceed 50 characters'
    });
  }

  next();
};

// Validation for login
export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide email and password'
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  next();
};

// Validation for sending messages
export const validateMessage = (req: Request, res: Response, next: NextFunction) => {
  const { content } = req.body;

  if (!content || content.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Message content is required'
    });
  }

  if (content.length > 2000) {
    return res.status(400).json({
      success: false,
      message: 'Message cannot exceed 2000 characters'
    });
  }

  next();
};

// Validation for creating chat groups
export const validateChatGroup = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'Group name is required'
    });
  }

  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Group name cannot exceed 100 characters'
    });
  }

  next();
};

// Validation for MongoDB ObjectId
export const validateObjectId = (paramName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const id = req.params[paramName];
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;

    if (!objectIdRegex.test(id)) {
      return res.status(400).json({
        success: false,
        message: `Invalid ${paramName} format`
      });
    }

    next();
  };
};