export const dynamic = "force-dynamic";
import { connectToDB } from "@/lib/connectToDB";
import Sponsor from "@/models/sponsors";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, logo, tier, website } = await req.json();
    await connectToDB();
    
    if (!name || !logo) {
      return NextResponse.json(
        { message: "Name and logo are required" },
        { status: 400 }
      );
    }

    const newSponsor = await Sponsor.create({ name, logo, tier, website });
    return NextResponse.json(
      { message: "Sponsor Created", sponsor: newSponsor },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating sponsor:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const sponsors = await Sponsor.find().sort({ tier: 1, name: 1 });
    return NextResponse.json({ sponsors });
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
