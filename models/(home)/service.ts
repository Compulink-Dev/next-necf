import mongoose, { Schema } from "mongoose";

const serviceScheme = new Schema(
    {
        title: String,
        title2: String,
        title3: String,
        description: String,
        description2: String,
        description3: String,
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Service = mongoose.models.Service || mongoose.model("Service", serviceScheme)

export default Service