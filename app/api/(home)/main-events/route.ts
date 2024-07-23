export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import MainEvent from "@/models/(home)/event"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, image, date } = await req.json()
    await connectToDB()
    await MainEvent.create({ title, image, date })
    return NextResponse.json({ message: "Event Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const event = await MainEvent.find()
    return NextResponse.json({ event })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const event = await MainEvent.findByIdAndDelete(params.id)

        if (!event) {
            return NextResponse.json(
                {
                    message: "Event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(event)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}