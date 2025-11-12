import mongoose from "mongoose";

const UserModel=new mongoose.Schema({

First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Gender: { type: String, required: true },
  User_Id: { type: String, required: true },
  Contact: { type: Number, required: true }
});
export default mongoose.model("user",UserModel,"users")