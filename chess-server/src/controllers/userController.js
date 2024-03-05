import express from "express";
import userService from "../services/userService.js";

const router = express.Router();

router.get("/", userService.getAllUsers);
router.post("/add-user", userService.createUser);

export default router;
