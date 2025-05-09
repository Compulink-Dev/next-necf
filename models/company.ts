import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true },
    tel: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  { timestamps: true }
);

const Company =
  mongoose.models.Company || mongoose.model("Company", CompanySchema);
export default Company;
