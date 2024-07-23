export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"
import Service from "@/models/(home)/service"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, title2, description2, title3, description3, image } = await req.json()
    await connectToDB()
    await Service.create({ title, description, title2, description2, title3, description3, image })
    return NextResponse.json({ message: "Service Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const service = await Service.find()
    return NextResponse.json({ service })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const service = await Service.findByIdAndDelete(params.id)

        if (!service) {
            return NextResponse.json(
                {
                    message: "Service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(service)

    } catch (error) {
        return NextResponse.json({ message: "Service error" }, { status: 400 })
    }
}