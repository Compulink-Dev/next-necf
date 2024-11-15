import mongoose, { Schema } from "mongoose";

const heroScheme = new Schema(
    {
        image: String,
        title: String,
        description: String
    },
    {
        timestamps: true
    }
)

const Hero = mongoose.models?.Hero || mongoose.model("Hero", heroScheme)

export default Hero