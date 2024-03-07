// user.js

import mongoose from "mongoose";
import { UserStatusEnum } from "./enum/Enum.js";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: () => Math.floor(Date.now() % 1000),
    index: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  status: {
    type: String,
    enum: Object.values(UserStatusEnum),
    default: UserStatusEnum.INACTIVE,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
