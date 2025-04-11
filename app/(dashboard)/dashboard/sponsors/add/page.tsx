"use client";
import BackButton from "@/components/backButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Add Controller import
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  logo: FileList;
  tier: string;
  website: string;
};

export default function AddSponsor() {
  const {
    register,
    handleSubmit,
    reset,
    control, // Add control from useForm
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      tier: "Bronze", // Set default value here
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleFileUpload(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "next_necf");
    formData.append("folder", "sponsors");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    return await response.json();
  }

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    try {
      let logoUrl = "";

      // Upload logo if provided
      if (data.logo?.[0]) {
        const logoData = await handleFileUpload(data.logo[0]);
        logoUrl = logoData.secure_url;
      }

      // Submit to API
      const response = await fetch("/api/sponsors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          logo: logoUrl,
          tier: data.tier,
          website: data.website,
        }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      reset();
      toast.success("Sponsor created successfully!");
      router.push("/dashboard/sponsors");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to create sponsor"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="py-4">
        <BackButton />
      </div>

      <h1 className="text-2xl font-bold mb-6">Add New Sponsor</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Sponsor name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="tier">Tier *</Label>
          <Controller
            name="tier"
            control={control}
            rules={{ required: "Tier is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Platinum">Platinum</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                  <SelectItem value="Bronze">Bronze</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.tier && (
            <p className="text-red-500 text-sm mt-1">{errors.tier.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            type="url"
            {...register("website")}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <Label htmlFor="logo">Logo *</Label>
          <Input
            id="logo"
            type="file"
            accept="image/*"
            {...register("logo", { required: "Logo is required" })}
          />
          <p className="text-sm text-gray-500 mt-1">
            Recommended size: 400x200px (transparent PNG preferred)
          </p>
          {errors.logo && (
            <p className="text-red-500 text-sm mt-1">{errors.logo.message}</p>
          )}
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700"
          >
            {isLoading ? "Creating..." : "Create Sponsor"}
          </Button>
        </div>
      </form>

      <Toaster position="top-right" />
    </div>
  );
}