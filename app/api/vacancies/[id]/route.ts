export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Vacancy from "@/models/vacancy"

import { NextRequest, NextResponse } from "next/server"




export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    const vacancy = await Vacancy.findById(id)
    return NextResponse.json({ vacancy })
}

export async function PATCH(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    const vacancy = await Vacancy.findByIdAndUpdate(id)
    return NextResponse.json({ vacancy })
}


export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    await Vacancy.findByIdAndDelete(id)
    return NextResponse.json({ message: "Vacancy Deleted" }, { status: 201 })
}