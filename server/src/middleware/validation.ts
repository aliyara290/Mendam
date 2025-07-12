import { Request, Response, NextFunction } from 'express';

// Validation for registration
export const validateRegistration = (req: Request, res: Response, next: NextFunction): void => {
  // Debug logging
  console.log('=== VALIDATION DEBUG ===');
  console.log('req.body:', req.body);
  console.log('Content-Type:', req.get('Content-Type'));
  console.log('req.method:', req.method);
  console.log('req.url:', req.url);
  console.log('=======================');

  if (!req.body) {
    res.status(400).json({
      success: false,
      message: 'Request body is missing. Make sure to send JSON data with Content-Type: application/json'
    });
    return;
  }

  const { username, email, password, fullName } = req.body;

  // Check required fields
  if (!username || !email || !password || !fullName) {
    res.status(400).json({
      success: false,
      message: 'Please provide all required fields: username, email, password, fullName',
      received: { username, email, password: password ? '[HIDDEN]' : undefined, fullName }
    });
    return;
  }

  // Validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
    return;
  }

  // Validate username format
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!usernameRegex.test(username) || username.length < 3 || username.length > 20) {
    res.status(400).json({
      success: false,
      message: 'Username must be 3-20 characters long and contain only letters, numbers, and underscores'
    });
    return;
  }

  // Validate password strength
  if (password.length < 8) {
    res.status(400).json({
      success: false,
      message: 'Password must be at least 8 characters long'
    });
    return;
  }

  // Validate full name
  if (fullName.length > 50) {
    res.status(400).json({
      success: false,
      message: 'Full name cannot exceed 50 characters'
    });
    return;
  }

  next();
};

// Validation for login
export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: 'Please provide email and password'
    });
    return;
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
    return;
  }

  next();
};

// Validation for sending messages
export const validateMessage = (req: Request, res: Response, next: NextFunction): void => {
  const { content } = req.body;

  if (!content || content.trim().length === 0) {
    res.status(400).json({
      success: false,
      message: 'Message content is required'
    });
    return;
  }

  if (content.length > 2000) {
    res.status(400).json({
      success: false,
      message: 'Message cannot exceed 2000 characters'
    });
    return;
  }

  next();
};

// Validation for creating chat groups
export const validateChatGroup = (req: Request, res: Response, next: NextFunction): void => {
  const { name } = req.body;

  if (!name || name.trim().length === 0) {
    res.status(400).json({
      success: false,
      message: 'Group name is required'
    });
    return;
  }

  if (name.length > 100) {
    res.status(400).json({
      success: false,
      message: 'Group name cannot exceed 100 characters'
    });
    return;
  }

  next();
};

// Fixed ObjectId validation
export const validateObjectId = (paramName: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      const id = req.params[paramName];
      
      if (!id) {
        res.status(400).json({
          success: false,
          message: `${paramName} parameter is required`
        });
        return;
      }

      // MongoDB ObjectId regex pattern
      const objectIdRegex = /^[0-9a-fA-F]{24}$/;

      if (!objectIdRegex.test(id)) {
        res.status(400).json({
          success: false,
          message: `Invalid ${paramName} format. Must be a valid MongoDB ObjectId`
        });
        return;
      }

      next();
    } catch (error) {
      console.error(`Error validating ${paramName}:`, error);
      res.status(500).json({
        success: false,
        message: `Error validating ${paramName}`
      });
    }
  };
};