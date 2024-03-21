import express from "express";
import { getAllUsers, signup, login } from "../controllers/user-controller.js";

const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.post("/signup", signup);
UserRouter.post("/login", login);

export default UserRouter;
