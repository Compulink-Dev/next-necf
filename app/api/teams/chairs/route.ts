import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const chairs = await db.chair.findMany()

        return NextResponse.json(chairs, {
            status: 201
        })
    } catch (error) {
        console.log('Error while fetching', error);
        return NextResponse.json({
            message: "Failed to fetch member",
        }, {
            status: 500
        })
    }
}

export async function POST(request: Request) {
    try {
        const { title, position, link, image } = await request.json()
        const data = { title, position, link, image }

        const chairsData = await db.chair.create({ data })

        console.log(chairsData);

        return NextResponse.json(chairsData, {
            status: 201
        })

    } catch (error) {
        console.log('Error while creating', error);
        return NextResponse.json({
            message: "Failed to create member",
        }, {
            status: 500
        })
    }
}