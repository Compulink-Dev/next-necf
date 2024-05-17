'use client'
// components/ImageUpload.tsx
import React, { useState } from "react";
import { Button } from "./ui/button";

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!image) return;

        const formData = new FormData();
        formData.append("file", image);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        if (res.ok) {
            setImageUrl(data.url);
        } else {
            console.error(data.message);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <input type="file" onChange={handleImageChange} className="bg-green-600 p-2 rounded" />
            <Button className="w-auto bg-green-600 hover:bg-green-400" onClick={handleUpload}>Upload Image</Button>
            {imageUrl && <img src={imageUrl} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;
