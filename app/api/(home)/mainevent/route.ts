export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Event from "@/models/(home)/event"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, date, imageUrl, link } = await req.json()
    await connectToDB()
    await Event.create({ title, date, imageUrl, link })
    return NextResponse.json({ message: "Event program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const tasks = await Event.find()
    return NextResponse.json({ tasks })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const tasks = await Event.findByIdAndDelete(params.id)

        if (!tasks) {
            return NextResponse.json(
                {
                    message: "Event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(tasks)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}