import mongoose, { Schema } from "mongoose";

const eventScheme = new Schema(
    {
        title: String,
        image: String,
        date: String,
        document: String,
    },
    {
        timestamps: true
    }
)

const MainEvent = mongoose.models.MainEvent || mongoose.model("MainEvent", eventScheme)

export default MainEvent