// Importing necessary modules
import mongoose from "mongoose";
import { FriendshipStatus } from "./enum/Enum.js";

// Define the Mongoose schema
const friendshipSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true, // This ensures an index is created for faster queries
  },
  refId: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(FriendshipStatus),
    required: true,
  },
});

// Create and export the Mongoose model
const Friendship = mongoose.model("Friendship", friendshipSchema);

// Export the model for use in other files
export default Friendship;
