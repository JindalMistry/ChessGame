import express from "express";
import UserService from "../services/UserService.js";
import verifyToken from "../jwt/VerifyToken.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/user/register", UserService.userRegister);
router.post("/user/login", UserService.userLogin);
router.get("/user/logout/:id", UserService.userLogout);
router.post("/user/resetpassword", UserService.resetPassword);
router.post("/user/changepassword", UserService.changePassword);

export default router;
