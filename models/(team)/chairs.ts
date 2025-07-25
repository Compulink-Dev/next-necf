import mongoose, { Schema } from "mongoose";

const teamScheme = new Schema(
    {
        title: String,
        subtitle: String,
          image: {
            type: String,
            required: false
        },
        position: String,
        link: String,
    },
    {
        timestamps: true
    }
)

const Team = mongoose.models.Team || mongoose.model("Team", teamScheme)

export default Team