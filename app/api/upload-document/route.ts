import { NextResponse } from 'next/server';
import fs from 'fs/promises'; // Using promises API
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { uploadConfig } from '@/config/uploads';

export async function POST(request: Request) {
  try {
    // 1. Parse form data
    const formData = await request.formData();
    const file = formData.get('document') as File | null;

    // 2. Validate file exists
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // 3. Validate file type
    if (!uploadConfig.allowedDocumentTypes.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type. Allowed types: ${uploadConfig.allowedDocumentTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // 4. Validate file size
    if (file.size > uploadConfig.maxFileSize) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${uploadConfig.maxFileSize / (1024 * 1024)}MB` },
        { status: 400 }
      );
    }

    // 5. Create upload directory
    const uploadDir = path.join(process.cwd(), 'public/uploads/documents');
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch (err) {
      console.error('Directory creation error:', err);
      return NextResponse.json(
        { error: 'Failed to create upload directory' },
        { status: 500 }
      );
    }

    // 6. Generate safe filename
    const originalName = path.parse(file.name).name;
    const sanitizedName = originalName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const ext = path.extname(file.name);
    const filename = `${sanitizedName}_${uuidv4()}${ext}`;
    const filePath = path.join(uploadDir, filename);

    // 7. Save file
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      //@ts-ignore
      await fs.writeFile(filePath, buffer);
      
      // Verify file was written
      try {
        await fs.access(filePath);
      } catch {
        throw new Error('File verification failed');
      }
    } catch (err) {
      console.error('File save error:', err);
      return NextResponse.json(
        { error: 'Failed to save file' },
        { status: 500 }
      );
    }

    // 8. Return response
    const publicUrl = `/uploads/documents/${filename}`;
    
    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: file.name,
      size: file.size,
      type: file.type
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : String(error)
        })
      },
      { status: 500 }
    );
  }
}