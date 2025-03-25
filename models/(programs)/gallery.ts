import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the gallery
const gallerySchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Safely define the model, avoiding redefinition during hot reloads
const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default Gallery;
