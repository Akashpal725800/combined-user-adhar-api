import mongoose from "mongoose";
const AdharSchema = new mongoose.Schema({
  User_Id: { type: String, required: true },
  Adhar_Number: { type: Number, required: true },
  Verification_Status: { type: String, default: "Pending" },
  Verified_Date: { type: String }
});
export default mongoose.model("Adhar", AdharSchema);
