// Importing necessary modules
import mongoose from "mongoose";
import { MessageStatus } from "./enum/Enum.js";

// Define the Mongoose schema
const chatSchema = new mongoose.Schema({
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
  timestamp: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(MessageStatus),
    required: true,
  },
});

// Create and export the Mongoose model
const Chat = mongoose.model("Chat", chatSchema);

// Export the model for use in other files
export default Chat;
