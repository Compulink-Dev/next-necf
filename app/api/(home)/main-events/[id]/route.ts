import { connectToDB } from "@/lib/connectToDB";
import MainEvent from "@/models/(home)/event";
import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const event = await MainEvent.findById(params.id)

        if (!event) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(event)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const eventUpdated = await MainEvent.findByIdAndUpdate(params.id, body)

        if (!eventUpdated) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(eventUpdated)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const event = await MainEvent.findByIdAndDelete(params.id)

        if (!event) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(event)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}