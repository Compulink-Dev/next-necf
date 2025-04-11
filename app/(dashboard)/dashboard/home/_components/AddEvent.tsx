"use client";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  title: string;
  date: string;
  image?: FileList;
  document?: FileList;
};

export default function AddEvent() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleFileUpload(file: File, folder: string, isDocument = false) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "next_necf");
    formData.append("folder", folder);
    
    if (isDocument) {
      formData.append("resource_type", "raw");
    }

    const url = isDocument
      ? "https://api.cloudinary.com/v1_1/dxkna0tuc/raw/upload"
      : "https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload";

    const response = await fetch(url, { 
      method: "POST", 
      body: formData 
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `${folder} upload failed`);
    }

    return await response.json();
    
  }

  async function uploadDocumentToServer(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('document', file);

    const response = await fetch('/api/upload-document', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Document upload failed');
    }

    const result = await response.json();
    return result.url;
  }


  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      let imageUrl = "";
      let documentUrl = "";

      // Upload image if provided
      if (data.image?.[0]) {
        const imageData = await handleFileUpload(data.image[0], "events/images");
        imageUrl = imageData.secure_url;
      }

      // Upload document if provided
      if (data.document?.[0]) {
        documentUrl = await uploadDocumentToServer(data.document[0]);
      }

      // Submit to API
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
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            {...register("image")}
          />
          <p className="text-sm text-gray-500 mt-1">Recommended size: 800x450px</p>
        </div>

        <div>
          <Label htmlFor="document">Document</Label>
          <Input
            id="document"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            {...register("document")}
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