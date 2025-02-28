import { connectToDB } from "@/lib/connectToDB";
import { NextResponse } from "next/server";
import Message from "../../../models/messages";

export async function POST(req: Request) {
  const { name, email, phone, eventTitle } = await req.json();

  try {
    await connectToDB();
    await Message.create({ name, email, phone, eventTitle });

    return NextResponse.json(
      { message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving registration." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectToDB();
  const messages = await Message.find();
  return NextResponse.json({ messages });
}
