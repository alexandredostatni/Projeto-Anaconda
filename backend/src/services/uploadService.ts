import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadAvatar(base64Image: string) {
  const result = await cloudinary.uploader.upload(base64Image, {
    folder: "avatars",
    transformation: [{ width: 256, height: 256, crop: "fill" }],
  });

  return result.secure_url;
}
