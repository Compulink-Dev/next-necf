import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";





import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const section = await Section.findById(params.id)

        if (!section) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(section)

    } catch (error) {
        return NextResponse.json({ message: "main error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const sectionUpdated = await Section.findByIdAndUpdate(params.id, body)

        if (!sectionUpdated) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(sectionUpdated)

    } catch (error) {
        return NextResponse.json({ message: "main error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const section = await Section.findByIdAndDelete(params.id)

        if (!section) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(section)

    } catch (error) {
        return NextResponse.json({ message: "section error" }, { status: 400 })
    }
}