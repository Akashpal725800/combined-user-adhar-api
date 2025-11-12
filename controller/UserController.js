import user from "../module/UserModel.js";
import AdharModel from "../module/AdharModel.js";

export const create = async (req, res) => {
  try {
    const {
      User_Id,
      Adhar_Number,
      First_Name,
      Last_Name,
      Contact,
      Verification_Status,
      Verified_Date,
      Age,
      Gender,
    } = req.body;

    const Userdata = await user.create({
      User_Id,
      First_Name,
      Last_Name,
      Contact,
      Age,
      Gender,
    });

    const Adhardata = await AdharModel.create({
      User_Id,
      Adhar_Number,
      Verification_Status,
      Verified_Date,
    });

    res.status(201).json({ message: "✅ Data inserted successfully", Userdata, Adhardata });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "❌ Data insert problem", error: error.message });
  }
};

export const Adhar = async (req, res) => {
  res.send("Adhar route working ✅");
};
