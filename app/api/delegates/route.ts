import { NextResponse } from "next/server";
import Company from "@/models/company";
import { connectToDB } from "@/lib/connectToDB";
import Delegate from "@/models/delegates";

export async function POST(req: Request) {
  try {
    await connectToDB(); // Ensure MongoDB is connected

    const { companyName, contactPerson, email, tel, mobile, delegates } =
      await req.json();

    // Create a new company entry
    const company = await Company.create({
      name: companyName,
      contactPerson,
      email,
      tel,
      mobile,
    });

    // Create delegate entries linked to the company
    const delegateDocs = delegates.map((delegate: any) => ({
      ...delegate,
      company: company._id,
    }));
    await Delegate.insertMany(delegateDocs);

    return NextResponse.json(
      { success: true, message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// GET - Retrieve all delegates with their associated company
export async function GET() {
  try {
    await connectToDB();
    const delegates = await Delegate.find().populate("company", "name");

    return NextResponse.json(
      { success: true, data: delegates },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
