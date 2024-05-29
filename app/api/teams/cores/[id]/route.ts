import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params: { id } }) {
    try {
        const core = await db.core.findUnique({
            where: { id },
        });
        if (!core) {
            return NextResponse.json(
                {
                    message: "Core NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(core);
    } catch (error) {
        console.log("Failed to fetch member", error);
        return NextResponse.json(
            {
                message: "Failed to fetch member",
            },
            {
                status: 500,
            }
        );
    }
}


//@ts-ignore
export async function PATCH(request, { params: { id } }) {
    try {
        const { title, position, link, image } = await request.json()
        const data = { title, position, link, image }

        const updatedCore = await db.core.update({
            where: { id },
            data
        });
        if (!updatedCore) {
            return NextResponse.json(
                {
                    message: "Contact NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedCore);
    } catch (error) {
        console.log("Failed to update member", error);
        return NextResponse.json(
            {
                message: "Failed to update member",
            },
            {
                status: 500,
            }
        );
    }
}

//@ts-ignore
export async function DELETE(request: Request, { params: { id } }) {
    try {

        await db.team.delete({
            where: { id }
        })
        return NextResponse.json({
            message: "Team deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete member",
        }, {
            status: 500
        })
    }
}

