import mongoose, { Schema } from "mongoose";

const aboutGalleryScheme = new Schema(
    {
        title: String,
        image: String
    },
    {
        timestamps: true,
    }
)

const AboutGallery = mongoose.models.AboutGallery || mongoose.model("AboutGallery", aboutGalleryScheme)

export default AboutGallery