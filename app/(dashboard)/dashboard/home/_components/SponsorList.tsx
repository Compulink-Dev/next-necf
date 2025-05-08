"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

type Sponsor = {
  _id: string;
  name: string;
  tier: string;
  logo: string;
  website?: string;
};

export default function AdminSponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch("/api/sponsors");
        const data = await response.json();
        setSponsors(data.sponsors);
      } catch (error) {
        console.error("Failed to fetch sponsors:", error);
        toast.error("Failed to load sponsors");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this sponsor?")) {
      try {
        const response = await fetch(`/api/sponsors/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setSponsors(sponsors.filter((sponsor) => sponsor._id !== id));
          toast.success("Sponsor deleted successfully");
        } else {
          toast.error("Failed to delete sponsor");
        }
      } catch (error) {
        console.error("Error deleting sponsor:", error);
        toast.error("Error deleting sponsor");
      }
    }
  };

  if (isLoading)
    return <div className="text-center py-12">Loading sponsors...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Sponsors</h1>
        <Link
          href="/dashboard/sponsors/add"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add New Sponsor
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Logo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sponsors.map((sponsor) => (
              <tr key={sponsor._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {sponsor.name}
                  </div>
                  {sponsor.website && (
                    <div className="text-sm text-gray-500">
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        {sponsor.website}
                      </a>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      sponsor.tier === "Platinum"
                        ? "bg-purple-100 text-purple-800"
                        : sponsor.tier === "Gold"
                        ? "bg-yellow-100 text-yellow-800"
                        : sponsor.tier === "Silver"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {sponsor.tier}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="h-10 w-20 relative">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain h-full w-full"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    href={`/dashbaord/sponsors/edit/${sponsor._id}`}
                    className="text-green-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(sponsor._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
