import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await connectToDB()
    const teams = await Adhoc.find()
    return NextResponse.json({ teams })
}


export async function POST(req: NextRequest) {
    const { title, description, image, subtitle } = await req.json()
    await connectToDB()
    await Adhoc.create({ title, description, image, subtitle })
    return NextResponse.json({ message: "Adhoc  Created" }, { status: 201 })
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    await Adhoc.findByIdAndDelete(id)
    return NextResponse.json({ message: "Team Deleted" }, { status: 201 })
}