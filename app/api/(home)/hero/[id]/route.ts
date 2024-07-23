import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/models/(home)/hero";




import { NextRequest, NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params }) {
    await connectToDB()
    try {
        const hero = await Hero.findById(params.id)

        if (!hero) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(hero)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}


//@ts-ignore
export async function PUT(request, { params }) {
    const body = await request.json()
    await connectToDB()
    try {
        const heroUpdated = await Hero.findByIdAndUpdate(params.id, body)

        if (!heroUpdated) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(heroUpdated)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}


//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const hero = await Hero.findByIdAndDelete(params.id)

        if (!hero) {
            return NextResponse.json(
                {
                    message: "hero not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(hero)

    } catch (error) {
        return NextResponse.json({ message: "hero error" }, { status: 400 })
    }
}