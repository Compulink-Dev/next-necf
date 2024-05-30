import db from "@/lib/db";
import { NextResponse } from "next/server";

//@ts-ignore
export async function GET(request, { params: { id } }) {
    try {
        const download = await db.download.findUnique({
            where: { id },
        });
        if (!download) {
            return NextResponse.json(
                {
                    message: "Download NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(download);
    } catch (error) {
        console.log("Failed to fetch download", error);
        return NextResponse.json(
            {
                message: "Failed to fetch download",
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

        const updatedDownload = await db.download.update({
            where: { id },
            data
        });
        if (!updatedDownload) {
            return NextResponse.json(
                {
                    message: "Contact NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedDownload);
    } catch (error) {
        console.log("Failed to update download", error);
        return NextResponse.json(
            {
                message: "Failed to update download",
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

        await db.download.delete({
            where: { id }
        })
        return NextResponse.json({
            message: "download deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete download",
        }, {
            status: 500
        })
    }
}

