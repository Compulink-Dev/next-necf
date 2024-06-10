export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Annual from "@/models/(programs)/annual"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, imageUrl } = await req.json()
    await connectToDB()
    await Annual.create({ title, description, imageUrl })
    return NextResponse.json({ message: "annual program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const annual = await Annual.find()
    return NextResponse.json({ annual })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const annual = await Annual.findByIdAndDelete(params.id)

        if (!annual) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(annual)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}