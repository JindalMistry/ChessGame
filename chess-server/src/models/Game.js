// Importing necessary modules
import mongoose from "mongoose";

// Define the Mongoose schema
const gameSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: () => Math.floor(Date.now() % 1000),
    index: true,
  },
  gameId: {
    type: Number,
    required: true,
  },
  playerId: {
    type: Number,
    required: true,
  },
  fromX: {
    type: Number,
    required: true,
  },
  fromY: {
    type: Number,
    required: true,
  },
  toX: {
    type: Number,
    required: true,
  },
  toY: {
    type: Number,
    required: true,
  },
  time: {
    type: Date, // Using Date type for timestamp
    required: true,
  },
});

// Create and export the Mongoose model
const Game = mongoose.model("Game", gameSchema);

// Export the model for use in other files
export default Game;
