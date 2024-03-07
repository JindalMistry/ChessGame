import User from "../models/User.js"; // Adjust the path based on your project structure
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

// Register User
async function userRegister(req, res) {
  try {
    // Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
      return res
        .status(400)
        .json({ message: "Please provide valid email format" });
    }

    // Check if the username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Create a new user
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Save the user to the database
    const newUser = await user.save();

    // Send the new user in the response
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Login User
async function userLogin(req, res) {
  try {
    // Find the user by username
    const user = await User.findOne({ username: req.body.username });

    // Check if the user exists or not
    if (!user) {
      return res.status(401).json({ message: "User not found!" });
    }

    //check if the password same or not
    if (req.body.password !== user.password) {
      return res.status(401).json({ message: "Please enter valid password" });
    }

    // Update user status to "ONLINE"
    user.status = "ACTIVE";
    await user.save();

    // Generate JWT token with a 7-day expiration
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    const { password, ...info } = user._doc;

    res.status(200).json({ info, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// Logout User
async function userLogout(req, res) {
  try {
    const userId = req.params.id;

    const updatedUser = await User.findOne({ id: userId });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    updatedUser.status = "INACTIVE";
    await updatedUser.save();

    return res.status(200).json({ updatedUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// sent mail for Reset Password
// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ritace31@gmail.com",
    pass: "vemj aeop rfio fifg",
  },
});

// Example in-memory database for storing temporary passwords
const temporaryPasswords = {};

async function resetPassword(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // If the user is not found, respond with an error
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    // Generate a temporary password (you might want to use a more secure method)
    const temporaryPassword = Math.random().toString(36).slice(-8);

    // Set up email options
    const mailOptions = {
      from: "mistryriteshv100@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Your temporary password is: ${temporaryPassword}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // If the email is sent successfully, update the temporary password in the database
    if (info.accepted.length > 0) {
      user.password = temporaryPassword;
      await user.save();
      // You should update the user's password in your database here

      // Respond with a success message
      res.json({
        success: true,
        message: "Temporary password sent successfully.",
      });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

async function changePassword(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User does not exist!" });
    }

    // Check if the new password is different from the existing password
    if (password === user.password) {
      return res.status(400).json({
        message: "New password must be different from the existing password.",
      });
    }

    // Update the password in the database
    user.password = password;
    await user.save();

    // Respond with a success message and the updated user data
    return res
      .status(201)
      .json({ data: user, message: "Password updated successfully." });
  } catch (err) {
    // Handle unexpected errors
    console.error(err);
    return res.status(500).json({ message: "Internal server error." });
  }
}

export default {
  userRegister,
  userLogin,
  userLogout,
  resetPassword,
  changePassword,
};
