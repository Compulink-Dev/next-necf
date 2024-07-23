import mongoose, { Schema } from "mongoose";

const galleryScheme = new Schema(
    {
        image: String,
    },
    {
        timestamps: true
    }
)

const Gallery = mongoose.models.Gallery || mongoose.model("gallery", galleryScheme)

export default Gallery
