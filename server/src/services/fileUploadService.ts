// server/src/services/fileUploadService.ts
import { v2 as cloudinary } from 'cloudinary';
import { Request } from 'express';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface UploadResult {
  url: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export class FileUploadService {
  
  /**
   * Upload avatar image to Cloudinary
   */
  static async uploadAvatar(
    fileBuffer: Buffer, 
    userId: string,
    originalFilename?: string
  ): Promise<UploadResult> {
    try {
      const result = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: 'mendam/avatars',
            public_id: `avatar_${userId}_${Date.now()}`,
            resource_type: 'image',
            transformation: [
              { width: 500, height: 500, crop: 'fill' },
              { quality: 'auto' },
              { format: 'webp' }
            ],
            allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'gif'],
            use_filename: false,
            unique_filename: true,
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        ).end(fileBuffer);
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
        width: result.width,
        height: result.height,
        format: result.format,
        bytes: result.bytes,
      };
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload image to Cloudinary');
    }
  }

  /**
   * Delete avatar from Cloudinary
   */
  static async deleteAvatar(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error('Failed to delete image from Cloudinary:', error);
      // Don't throw error here as the main operation might still succeed
    }
  }

  /**
   * Validate image file
   */
  static validateImageFile(file: Express.Multer.File): { isValid: boolean; error?: string } {
    const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    const maxSize = parseInt(process.env.MAX_FILE_SIZE || '5242880'); // 5MB default

    if (!allowedMimeTypes.includes(file.mimetype)) {
      return {
        isValid: false,
        error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF files are allowed.'
      };
    }

    if (file.size > maxSize) {
      return {
        isValid: false,
        error: `File size too large. Maximum size is ${maxSize / 1024 / 1024}MB.`
      };
    }

    return { isValid: true };
  }

  /**
   * Extract public ID from Cloudinary URL
   */
  static extractPublicIdFromUrl(url: string): string | null {
    try {
      const regex = /\/mendam\/avatars\/([^/.]+)/;
      const match = url.match(regex);
      return match ? `mendam/avatars/${match[1]}` : null;
    } catch (error) {
      return null;
    }
  }
}