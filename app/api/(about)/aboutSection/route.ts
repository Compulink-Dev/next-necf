export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import AboutSection from "@/models/(about)/aboutSection"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2, title3, title4, title5, title6, image } = await req.json()
    await connectToDB()
    await AboutSection.create({ title, title2, title3, title4, title5, title6, image })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await AboutSection.find()
    return NextResponse.json({ about })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const about = await AboutSection.findByIdAndDelete(params.id)

        if (!about) {
            return NextResponse.json(
                {
                    message: "about not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(about)

    } catch (error) {
        return NextResponse.json({ message: "about error" }, { status: 400 })
    }
}