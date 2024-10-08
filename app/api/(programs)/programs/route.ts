export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Program from "@/models/(programs)/program"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image, subtitle } = await req.json()
    await connectToDB()
    await Program.create({ title, description, image, subtitle })
    return NextResponse.json({ message: "Program  Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const programs = await Program.find()
    return NextResponse.json({ programs })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const program = await Program.findByIdAndDelete(params.id)

        if (!program) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(program)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}