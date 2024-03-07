// Importing necessary modules
import mongoose from "mongoose";

// Define the Mongoose schema
const themeSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: () => Math.floor(Date.now() % 1000),
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  bPawn: {
    type: String,
    required: true,
  },
  bRook: {
    type: String,
    required: true,
  },
  bKnight: {
    type: String,
    required: true,
  },
  bBishop: {
    type: String,
    required: true,
  },
  bQueen: {
    type: String,
    required: true,
  },
  bKing: {
    type: String,
    required: true,
  },
  wPawn: {
    type: String,
    required: true,
  },
  wRook: {
    type: String,
    required: true,
  },
  wKnight: {
    type: String,
    required: true,
  },
  wBishop: {
    type: String,
    required: true,
  },
  wQueen: {
    type: String,
    required: true,
  },
  wKing: {
    type: String,
    required: true,
  },
});

// Create and export the Mongoose model
const Theme = mongoose.model("Theme", themeSchema);

// Export the model for use in other files
export default Theme;
