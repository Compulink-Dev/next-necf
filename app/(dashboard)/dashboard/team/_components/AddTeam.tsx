"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function AddTeam() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(data: any) {
    setLoading(true);
    const raw_image = data.image?.[0]; // Image may be undefined

    let imageUrl = null;

    try {
      if (raw_image) {
        const formData = new FormData();
        formData.append("file", raw_image);
        formData.append("upload_preset", "next_necf");

        const uploadResponse = await fetch(
          "https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload/",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error("Image upload failed");
        }

        const imageData = await uploadResponse.json();
        imageUrl = imageData.secure_url;
      }

      const teamData = {
        ...data,
        image: imageUrl ?? "", // Empty string or undefined if image is optional
      };

      const response = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(teamData),
      });

      if (response.ok) {
        reset();
        setLoading(false);
        toast.success("Details uploaded successfully");
        router.push("/dashboard/team");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Details were not uploaded");
    }
  }

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit(onSubmit)} action="" className="">
        <div className="mb-6">
          <Label className="text-slate-600">Title</Label>
          <Input
            {...register("title", { required: true })}
            type="text"
            id="title"
            className=""
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-600 text-sm">
              Oops!
              <span className=""> title already taken</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <Label className="text-slate-600">Position</Label>
          <Input
            {...register("position", { required: true })}
            type="position"
            className=""
            id="position"
            placeholder="Enter position"
          />
          {errors.position && (
            <p className="text-red-600 text-sm">
              Oops!
              <span className=""> position already taken</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <Label className="text-slate-600">Links</Label>
          <Input
            {...register("link")}
            type="text"
            id="link"
            className=""
            placeholder="Enter link"
          />
          {errors.link && (
            <p className="">
              Oops!
              <span className="">Links already taken</span>
            </p>
          )}
        </div>
        <div className="mb-6">
          <Label className="text-slate-600">Image</Label>
          <Input
            {...register("image")}
            type="file"
            className="text-slate-400"
            id="image"
          />
          {errors.image && (
            <p className="">
              Oops!
              <span className="">Image already inserted</span>
            </p>
          )}
        </div>
        {loading ? (
          <button
            disabled
            type="button"
            className="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800 inline-flex items-center"
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
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
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

export default AddTeam;
