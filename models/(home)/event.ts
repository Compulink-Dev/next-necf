import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: { 
      type: String,
      required: true  // Making title required
    },
    image: {
      type: String,
      required: false  // Explicitly making optional
    },
    date: { 
      type: String,
      required: true  // Making date required
    },
    document: {
      type: String,
      required: false  // Explicitly making optional
    }
  },
  {
    timestamps: true
  }
);

const MainEvent = mongoose.models.MainEvent || mongoose.model("MainEvent", eventSchema);

export default MainEvent;