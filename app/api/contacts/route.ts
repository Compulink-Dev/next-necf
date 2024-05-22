import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const { name, contact, email, image } = await request.json()
        const contactData = { name, contact, email, image }
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