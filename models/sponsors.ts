import { Schema, model, models } from "mongoose";

const SponsorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  logo: {
    type: String,
    required: [true, "Logo is required"],
  },
  tier: {
    type: String,
    enum: ["Platinum", "Gold", "Silver", "Bronze"],
    default: "Bronze",
  },
  website: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Sponsor = models.Sponsor || model("Sponsor", SponsorSchema);

export default Sponsor;