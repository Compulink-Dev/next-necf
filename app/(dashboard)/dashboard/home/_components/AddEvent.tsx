"use client";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { UploadButton } from "@/lib/uploadthing";

type FormData = {
  title: string;
  date: string;
};

export default function AddEvent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/main-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          date: data.date,
          image: imageUrl,
          document: documentUrl
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      reset();
      setImageUrl("");
      setDocumentUrl("");
      toast.success("Event created successfully!");
      router.push("/dashboard/home");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to create event");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="py-4">
        <BackButton />
      </div>
      
      <h1 className="text-2xl font-bold mb-6">Add New Event</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Event title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="date">Date *</Label>
          <Input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <Label>Image</Label>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              if (res?.[0]) {
                setImageUrl(res[0].ufsUrl);
                toast.success("Image uploaded");
              }
            }}
            onUploadError={(error: Error) => {
              toast.error(`Upload failed: ${error.message}`);
            }}
          />
          <p className="text-sm text-gray-500 mt-1">Recommended size: 800x450px</p>
        </div>

        <div>
          <Label>Document</Label>
          <UploadButton
            endpoint="documentUploader"
            onClientUploadComplete={(res) => {
              if (res?.[0]) {
                setDocumentUrl(res[0].ufsUrl);
                toast.success("Document uploaded");
              }
            }}
            onUploadError={(error: Error) => {
              toast.error(`Upload failed: ${error.message}`);
            }}
          />
          <p className="text-sm text-gray-500 mt-1">
            PDF, Word, or PowerPoint files
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700"
          >
            {isLoading ? "Creating..." : "Create Event"}
          </Button>
        </div>
      </form>
      
      <Toaster position="top-right" />
    </div>
  );
}
