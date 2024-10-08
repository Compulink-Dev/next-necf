import mongoose, { Schema } from "mongoose";

const milestoneScheme = new Schema(
    {
        number: String,
        title: String,
        subtitle: String,
        description: String,
    },
    {
        timestamps: true
    }
)

const Milestone = mongoose.models.Milestone || mongoose.model("Milestone", milestoneScheme)

export default Milestone