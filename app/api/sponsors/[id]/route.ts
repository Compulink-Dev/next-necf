export const dynamic = "force-dynamic";
import { connectToDB } from "@/lib/connectToDB";
import Sponsor from "@/models/sponsors";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
      await connectToDB();
      const deletedSponsor = await Sponsor.findByIdAndDelete(params.id);
  
      if (!deletedSponsor) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        { message: "Sponsor deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error deleting sponsor:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
  
  //@ts-ignore
  export async function GET(request, { params }) {
    await connectToDB();
    try {
      const sponsor = await Sponsor.findById(params.id);
  
      if (!sponsor) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 400 }
        );
      }
  
      return NextResponse.json(sponsor);
    } catch (error) {
      return NextResponse.json({ message: "Sponsor error" }, { status: 400 });
    }
  }
  
  //@ts-ignore
  export async function PUT(request, { params }) {
    const body = await request.json();
    await connectToDB();
    try {
      const sponsorUpdated = await Sponsor.findByIdAndUpdate(params.id, body, { new: true });
  
      if (!sponsorUpdated) {
        return NextResponse.json(
          { message: "Sponsor not found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(sponsorUpdated);
    } catch (error) {
      return NextResponse.json({ message: "Sponsor error" }, { status: 400 });
    }
  }