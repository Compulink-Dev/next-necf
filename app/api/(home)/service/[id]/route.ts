import { connectToDB } from "@/lib/connectToDB";
import Service from "@/models/(home)/service";

import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const service = await Service.findById(params.id)

        if (!service) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(service)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const serviceUpdated = await Service.findByIdAndUpdate(params.id, body)

        if (!serviceUpdated) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(serviceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const service = await Service.findByIdAndDelete(params.id)

        if (!service) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(service)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}