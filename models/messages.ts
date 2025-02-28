import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventTitle: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
