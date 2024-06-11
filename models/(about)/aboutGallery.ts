import mongoose, { Schema } from "mongoose";

const aboutGalleryScheme = new Schema(
    {
        title: String,
        imageUrl: String
    },
    {
        timestamps: true,
        bufferCommands: false
    }
)

const AboutGallery = mongoose.models.AboutGallery || mongoose.model("AboutGallery", aboutGalleryScheme)

export default AboutGallery