"use client";
import { UploadButton } from "@/lib/uploadthing";

export default function Upload() {
    return (
        <UploadButton
            endpoint="documentUploader"
            appearance={{
                button: "bg-green-600 hover:bg-green-500 text-white",
            }}
            onClientUploadComplete={(res) => {
                if (res?.[0]) {
                    console.log("Uploaded:", res[0].ufsUrl);
                }
            }}
            onUploadError={(error: Error) => {
                console.error("Upload failed:", error.message);
            }}
        />
    );
}
