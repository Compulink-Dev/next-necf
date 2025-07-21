import mongoose, { Schema } from "mongoose";

const teamScheme = new Schema(
  {
    title: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: false }, // ✅ Optional
    link: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamScheme)

export default Team