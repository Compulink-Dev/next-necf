"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function EditSponsor() {
  const router = useRouter();
  const params = useParams();
  const sponsorId = params.id as string;

  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    tier: "Bronze",
    website: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchSponsor = async () => {
      try {
        const response = await fetch(`/api/sponsors/${sponsorId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            name: data.name,
            logo: data.logo,
            tier: data.tier || "Bronze",
            website: data.website || "",
          });
        } else {
          throw new Error("Failed to fetch sponsor");
        }
      } catch (error) {
        console.error("Error fetching sponsor:", error);
        toast.error("Failed to load sponsor data");
        router.push("/dashboard/sponsors");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSponsor();
  }, [sponsorId, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/sponsors/${sponsorId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Sponsor updated successfully");
        router.push("/dashboard/sponsors");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to update sponsor");
      }
    } catch (error) {
      console.error("Error updating sponsor:", error);
      toast.error("Error updating sponsor");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return <div className="text-center py-12">Loading sponsor data...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Sponsor</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Sponsor Name *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Sponsor name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="logo"
            >
              Logo URL *
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="logo"
              name="logo"
              type="url"
              placeholder="https://example.com/logo.png"
              value={formData.logo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tier"
            >
              Tier
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tier"
              name="tier"
              value={formData.tier}
              onChange={handleChange}
            >
              <option value="Platinum">Platinum</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="website"
            >
              Website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="website"
              name="website"
              type="url"
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Sponsor"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/dashboard/sponsors")}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
