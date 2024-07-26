export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Testimonial from "@/models/(home)/testimonial"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, name, company, position } = await req.json()
    await connectToDB()
    await Testimonial.create({ title, name, company, position })
    return NextResponse.json({ message: "Testimonial Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await Testimonial.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await Testimonial.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "Testimonial not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "Testimonial error" }, { status: 400 })
    }
}