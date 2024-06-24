import mongoose, { Schema } from "mongoose";

const programScheme = new Schema(
    {
        title: String,
        description: String,
        image: String,
        subtitle: String,
    },
    {
        timestamps: true
    }
)

export default mongoose.models?.Program || mongoose.model("Program", programScheme)

