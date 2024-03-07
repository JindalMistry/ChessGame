// Importing necessary modules
import mongoose from "mongoose";

// Define the Mongoose schema
const gameRoomSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: () => Math.floor(Date.now() % 1000),
    index: true,
  },
  playerId: {
    type: Number,
    required: true,
  },
  opponentId: {
    type: Number,
    required: true,
  },
  winnerId: {
    type: Number,
    required: true,
  },
  time: {
    type: Date, // Using Date type for timestamp
    required: true,
  },
});

// Create and export the Mongoose model
const GameRoom = mongoose.model("GameRoom", gamesRoomSchema);

// Export the model for use in other files
export default GameRoom;
