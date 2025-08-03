"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
class FileUploadService {
    static async uploadAvatar(fileBuffer, userId, originalFilename) {
        try {
            const result = await new Promise((resolve, reject) => {
                cloudinary_1.v2.uploader.upload_stream({
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
                }, (error, result) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                }).end(fileBuffer);
            });
            return {
                url: result.secure_url,
                publicId: result.public_id,
                width: result.width,
                height: result.height,
                format: result.format,
                bytes: result.bytes,
            };
        }
        catch (error) {
            console.error('Cloudinary upload error:', error);
            throw new Error('Failed to upload image to Cloudinary');
        }
    }
    static async deleteAvatar(publicId) {
        try {
            await cloudinary_1.v2.uploader.destroy(publicId);
        }
        catch (error) {
            console.error('Failed to delete image from Cloudinary:', error);
        }
    }
    static validateImageFile(file) {
        const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        const maxSize = parseInt(process.env.MAX_FILE_SIZE || '5242880');
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
    static extractPublicIdFromUrl(url) {
        try {
            const regex = /\/mendam\/avatars\/([^/.]+)/;
            const match = url.match(regex);
            return match ? `mendam/avatars/${match[1]}` : null;
        }
        catch (error) {
            return null;
        }
    }
}
exports.FileUploadService = FileUploadService;
