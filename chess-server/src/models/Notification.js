// Importing necessary modules
import mongoose from "mongoose";
import { MessageStatus } from "./enum/Enum.js";

// Define the Mongoose schema
const notificationSchema = new mongoose.Schema({
  senderId: {
    type: Number,
    required: true,
  },
  receiverId: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(MessageStatus),
    required: true,
  },
});

// Create and export the Mongoose model
const Notification = mongoose.model("Notification", notificationSchema);

// Export the model for use in other files
export default Notification;
