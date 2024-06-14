export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import TaskForce from "@/models/(programs)/taskforce"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, description, image, subtitle } = await req.json()
    await connectToDB()
    await TaskForce.create({ title, description, image, subtitle })
    return NextResponse.json({ message: "TaskForce program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const tasks = await TaskForce.find()
    return NextResponse.json({ tasks })
}

//@ts-ignore
export async function DELETE(request, { params }) {
    await connectToDB()
    try {
        const tasks = await TaskForce.findByIdAndDelete(params.id)

        if (!tasks) {
            return NextResponse.json(
                {
                    message: "TaskForce not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(tasks)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}