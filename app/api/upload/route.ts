import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import type { File } from 'buffer'; // Optional for clarity
import { Buffer } from 'buffer'; // Explicitly import Buffer

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as unknown as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'File type not allowed' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadsDir = path.join(process.cwd(), 'public', 'downloads');
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, filename);

    // ✅ Use buffer directly without casting
    //@ts-ignore
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      url: `/downloads/${filename}`,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Error uploading file:', error); // 👈 Make sure this logs the error fully
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
