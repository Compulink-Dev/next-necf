export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Event from "@/models/events/events"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image, subtitle } = await req.json()
    await connectToDB()
    await Event.create({ title, description, image, subtitle })
    return NextResponse.json({ message: "Events program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const events = await Event.find()
    return NextResponse.json({ events })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const events = await Event.findByIdAndDelete(params.id)

        if (!events) {
            return NextResponse.json(
                {
                    message: "Events not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(events)

    } catch (error) {
        return NextResponse.json({ message: "Events error" }, { status: 400 })
    }
}