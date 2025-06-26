"use client";

import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface DownloadFormData {
  _id?: string;
  title: string;
  date: string;
  document?: FileList | string;
}

function AddDownload() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<DownloadFormData>();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [currentFileUrl, setCurrentFileUrl] = useState("");

  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const initializeForm = async () => {
      if (!id) {
        setValue("title", "");
        setValue("date", new Date().toISOString().substring(0, 10));
        setFetching(false);
        return;
      }

      try {
        const res = await fetch(`/api/downloads/${id}`);
        if (!res.ok) throw new Error("Failed to fetch download");
        const data = await res.json();
        setValue("title", data.title);
        setValue("date", data.date?.substring(0, 10));
        setCurrentFileUrl(data.document || "");
        setFetching(false);
      } catch (error) {
        toast.error("Failed to load download");
        setFetching(false);
      }
    };

    initializeForm();
  }, [id, setValue]);

  async function onSubmit(data: DownloadFormData) {
    console.log("Form submission data:", data);
    setLoading(true);

    try {
      let fileUrl = currentFileUrl;

      // Handle file upload if a new file was provided
      if (data.document instanceof FileList && data.document.length > 0) {
        const file = data.document[0];
        console.log("Uploading file:", file.name);

        // File validation
        if (file.size > 20 * 1024 * 1024) {
          throw new Error("File size exceeds 20MB limit");
        }

        const formData = new FormData();
        formData.append("file", file);

        const uploadResponse = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadResponse.ok) {
          const errorText = await uploadResponse.text();
          throw new Error(`Upload failed: ${errorText}`);
        }

        const result = await uploadResponse.json();
        fileUrl = result.url;
        console.log("File uploaded to:", fileUrl);
      }

      // Prepare the data to send
      const requestData = {
        title: data.title,
        date: data.date,
        document: fileUrl,
      };

      console.log("Submitting data:", requestData);

      const endpoint = id ? `/api/downloads/${id}` : "/api/downloads";
      const method = id ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }

      toast.success(id ? "Download updated!" : "Download created!");
      router.push("/dashboard/downloads");
      router.refresh();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }

  if (fetching) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <div className="my-4">
        <BackButton />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="title" className="text-slate-600">
            Title
          </Label>
          <Input
            {...register("title", { required: "Title is required" })}
            id="title"
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="date" className="text-slate-600">
            Date
          </Label>
          <Input
            {...register("date", { required: "Date is required" })}
            type="date"
            id="date"
          />
          {errors.date && (
            <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="document" className="text-slate-600">
            Document
          </Label>
          <Input
            type="file"
            id="document"
            accept=".pdf,.doc,.docx,.pptx"
            className="text-slate-400"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setValue("document", e.target.files);
              }
            }}
          />
          {currentFileUrl && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">
                Current file:{" "}
                <a
                  href={currentFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View file
                </a>
              </p>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            "Save Changes"
          )}
        </Button>
      </form>
      <Toaster />
    </div>
  );
}

export default AddDownload;
