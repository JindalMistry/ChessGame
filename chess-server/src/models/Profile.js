// Importing necessary modules
import mongoose from "mongoose";

// Define the Mongoose schema
const profileSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true, // This ensures an index is created for faster queries
  },
  image: {
    type: Buffer, // Using Buffer type for binary data (blob)
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  preferedTheme: {
    type: Number,
    required: true,
  },
});

// Create and export the Mongoose model
const Profile = mongoose.model("Profile", profileSchema);

// Export the model for use in other files
export default Profile;
