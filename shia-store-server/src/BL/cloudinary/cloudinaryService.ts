import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
async function connect() {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log("Connected to Cloudinary");
}

// Upload images to Cloudinary
async function uploadImage(files: string, folderName: string) {
    try {
        const fileArray = JSON.parse(files); // Parse the input files (base64 strings)

        const uploadPromises = fileArray.map(async (file: string) => {
            const result = await cloudinary.uploader.upload(file, {
                folder: folderName || "" // Optional: specify a folder
            });
            return result;
        });

        const uploadResults = await Promise.all(uploadPromises);
        console.log("------upload images--------")
        const images = uploadResults.map(img => ({ src: img.url, alt: img.itemsImage || "item-img" }))
        return images;
    } catch (error) {
        console.error('Error uploading images:', error);
        throw new Error('Failed to upload images');
    }
}

export default { connect, uploadImage };
