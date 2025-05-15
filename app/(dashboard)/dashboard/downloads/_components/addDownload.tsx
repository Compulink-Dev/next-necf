"use client";

import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface Download {
  _id: string;
  title: string;
  date: string;
  document: string;
}

function AddDownload() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState<Download | null>(null);
  const [fetching, setFetching] = useState(true);

  const router = useRouter();
  const params = useSearchParams();
  const id = params.get("id"); // Assuming you pass the ID in the URL like ?id=123

  useEffect(() => {
    if (!id) return;

    const fetchDownload = async () => {
      try {
        const res = await fetch(`/api/downloads/${id}`);
        if (!res.ok) throw new Error("Failed to fetch download");
        const data = await res.json();
        setDownload(data);
        setValue("title", data.title);
        setValue("date", data.date?.substring(0, 10)); // format date if needed
      } catch (error) {
        toast.error("Failed to load download");
      } finally {
        setFetching(false);
      }
    };

    fetchDownload();
  }, [id, setValue]);

  async function onSubmit(data: any) {
    if (!download) return;

    setLoading(true);
    let fileUrl = download.document;

    // Handle file upload if new file is selected
    if (data.document?.[0]) {
      const formData = new FormData();
      formData.append("file", data.document[0]);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        setLoading(false);
        toast.error("File upload failed");
        return;
      }

      const result = await uploadResponse.json();
      fileUrl = result.url;
    }

    const updatedData = {
      title: data.title || download.title,
      date: data.date || download.date,
      document: fileUrl,
    };

    const res = await fetch(`/api/downloads/${download._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (res.ok) {
      toast.success("Download updated successfully");
      router.push("/dashboard/downloads");
    } else {
      toast.error("Failed to update download");
    }
    setLoading(false);
  }

  if (fetching) return <p className="p-8">Loading download...</p>;

  return (
    <div className="p-8">
      <div className="my-4">
        <BackButton />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-6">
          <Label className="text-slate-600">Title</Label>
          <Input
            {...register("title", { required: true })}
            type="text"
            id="title"
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm">Oops! Title is required.</p>
          )}
        </div>

        <div className="mb-6">
          <Label className="text-slate-600">Date</Label>
          <Input
            {...register("date")}
            type="date"
            id="date"
            placeholder="Enter date"
          />
          {errors.date && (
            <p className="text-red-600 text-sm">Oops! Date format invalid.</p>
          )}
        </div>

        <div className="mb-6">
          <Label className="text-slate-600">Document</Label>
          <Input
            {...register("document")}
            type="file"
            className="text-slate-400"
            id="document"
          />
        </div>

        {loading ? (
          <Button disabled type="button" className="bg-green-600">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-2 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591..."
                fill="#E5E7EB"
              />
              <path d="M93.9676 39.0409C96.393 ..." fill="currentColor" />
            </svg>
            Loading...
          </Button>
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

export default AddDownload;
