import mongoose from "mongoose";

const DelegateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    fullName: { type: String, required: true },
    nationalID: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

const Delegate =
  mongoose.models.Delegate || mongoose.model("Delegate", DelegateSchema);
export default Delegate;
