import mongoose, { Schema } from "mongoose";

const taskScheme = new Schema(
    {
        title: String,
        document: String,
        date: String
    },
    {
        timestamps: true
    }
)


export default mongoose.models?.Task || mongoose.model("Task", taskScheme)