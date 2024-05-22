import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET({ id }: any) {
    try {
        const contact = await db.contact.findUnique({
            where: { id }
        })
        if (!contact) {
            return NextResponse.json({
                message: "Contact not found",
            }, { status: 404 })
        }

        return NextResponse.json(contact, {
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
