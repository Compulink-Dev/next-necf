import { connectToDB } from "@/lib/connectToDB";
import About from "@/models/(about)/about";
import AboutSection from "@/models/(about)/aboutSection";



import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const about = await AboutSection.findById(params.id)

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


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const aboutUpdated = await AboutSection.findByIdAndUpdate(params.id, body)

        if (!aboutUpdated) {
            return NextResponse.json(
                {
                    message: "about not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(aboutUpdated)

    } catch (error) {
        return NextResponse.json({ message: "about error" }, { status: 400 })
    }
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