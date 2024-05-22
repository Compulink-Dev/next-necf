import db from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const contacts = await db.contact.findMany()

        return NextResponse.json(contacts, {
            status: 201
        })
    } catch (error) {
        console.log('Error while fetching', error);
        return NextResponse.json({
            message: "Failed to fetch contact",
        }, {
            status: 500
        })
    }
}

export async function POST(request: Request) {
    try {
        const { name, contact, email, image } = await request.json()
        const data = { name, contact, email, image }

        const contactData = await db.contact.create({ data })

        console.log(contactData);

        return NextResponse.json(contactData, {
            status: 201
        })

    } catch (error) {
        console.log('Error while creating', error);
        return NextResponse.json({
            message: "Failed to create contact",
        }, {
            status: 500
        })
    }
}