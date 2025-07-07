// pages/api/upload.ts
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Define the expected Cloudinary response type
interface CloudinaryUploadResult {
  secure_url: string;
  // Add other properties you might need from the response
  public_id?: string;
  width?: number;
  height?: number;
  format?: string;
  resource_type?: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false, // Disable default bodyParser to handle file uploads
    sizeLimit: '60mb'
  }
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

      // Validate file size (60MB limit)
      if (file.size > 60 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'File size exceeds 60MB limit' },
          { status: 400 }
        );
      }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'auto',
            folder: 'necf',
            chunk_size: 60 * 1024 * 1024 // Set chunk size for large files
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result as CloudinaryUploadResult);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}