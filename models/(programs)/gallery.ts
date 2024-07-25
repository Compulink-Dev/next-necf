import mongoose, { Schema } from "mongoose";

const galleryScheme = new Schema(
    {
        title: String,
        description: {
            type: String,
            require: false
        },
        image: String
    },
    {
        timestamps: true,
    }
)

const Gallery = mongoose.models.Gallery || mongoose.model("Gallery", galleryScheme)

export default Gallery