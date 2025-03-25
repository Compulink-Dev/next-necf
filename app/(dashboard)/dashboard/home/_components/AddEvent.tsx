"use client";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function AddEvent() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Function to upload images and documents separately
    async function handleFileUpload(file: File, folder: string, isDocument = false) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "next_necf");
        formData.append("folder", folder);

        // Use /raw/upload for PDFs and /image/upload for images
        const url = isDocument
            ? "https://api.cloudinary.com/v1_1/dxkna0tuc/raw/upload/"
            : "https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload/";

        try {
            const response = await fetch(url, { method: "POST", body: formData });
            if (!response.ok) throw new Error(`${folder} upload failed`);

            const fileData = await response.json();
            return fileData.secure_url;
        } catch (error) {
            console.error("Upload Error:", error);
            throw new Error("File upload failed");
        }
    }

    async function onSubmit(data: any) {
        setLoading(true);
        try {
            const imageFile = data.image?.[0];
            const documentFile = data.document?.[0];

            const imageUrl = imageFile ? await handleFileUpload(imageFile, "images") : "";
            const documentUrl = documentFile ? await handleFileUpload(documentFile, "documents", true) : "";

            const eventData = { ...data, image: imageUrl, document: documentUrl };

            const response = await fetch("/api/main-events", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) throw new Error("Failed to upload event");

            reset();
            toast.success("Event uploaded successfully");
            router.push("/dashboard/home");
        } catch (error) {
            console.error(error);
            toast.error("Upload failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-8">
            <div className="py-4">
                <BackButton />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Title */}
                <div className="mb-6">
                    <Label className="text-slate-600">Title</Label>
                    <Input {...register("title", { required: true })} type="text" placeholder="Enter title" />
                    {errors.title && <p className="text-red-600 text-sm">Oops! Title is required.</p>}
                </div>

                {/* Date */}
                <div className="mb-6">
                    <Label className="text-slate-600">Date</Label>
                    <Input {...register("date", { required: true })} type="date" />
                    {errors.date && <p className="text-red-600 text-sm">Oops! Date is required.</p>}
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <Label className="text-slate-600">Image</Label>
                    <Input {...register("image")} type="file" accept="image/*" className="text-slate-400" />
                    {errors.image && <p className="text-red-600 text-sm">Oops! Please upload an image.</p>}
                </div>

                {/* Document Upload */}
                <div className="mb-6">
                    <Label className="text-slate-600">Document</Label>
                    <Input
                        {...register("document")}
                        type="file"
                        accept=".pdf,.doc,.docx,.pptx"
                        className="text-slate-400"
                    />
                    {errors.document && <p className="text-red-600 text-sm">Oops! Please upload a document.</p>}
                </div>

                {/* Submit Button */}
                {loading ? (
                    <button
                        disabled
                        type="button"
                        className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                        <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841"
                                fill="currentColor"
                            />
                        </svg>
                        Loading...
                    </button>
                ) : (
                    <Button type="submit" className="bg-green-600 hover:bg-green-500">
                        Save changes
                    </Button>
                )}
            </form>
            <Toaster />
        </div>
    );
}

export default AddEvent;
