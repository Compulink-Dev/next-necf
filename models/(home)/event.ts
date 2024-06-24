import mongoose, { Schema } from "mongoose";

const eventScheme = new Schema(
    {
        title: String,
        date: String,
        imageUrl: String,
        link: String
    },
    {
        timestamps: true
    }
)

const MainEvent = mongoose.models.MainEvent || mongoose.model("MainEvent", eventScheme)

export default MainEvent