export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image } = await req.json()
    await connectToDB()
    await Hero.create({ title, description, image })
    return NextResponse.json({ message: "Hero Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const hero = await Hero.find()
    return NextResponse.json({ hero })
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