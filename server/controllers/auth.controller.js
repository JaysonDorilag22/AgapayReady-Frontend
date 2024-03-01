import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { sendToken } from "../utils/jwtToken.js";
import cloudinary from "cloudinary";

// Registration controller
export const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Upload avatar to Cloudinary
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    // Create a new user instance
    user = new User({
      firstname,
      lastname,
      email,
      password,
      avatar: result.secure_url, // Store the avatar URL from Cloudinary
    });

    // Hash the password before saving
    user.password = await bcryptjs.hash(password, 10);

    // Save the user to the database
    await user.save();

    // Send token in response
    sendToken(user, 201, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Login controller
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the entered password matches with the stored password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Send token in response
    sendToken(user, 200, res);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
