import express from "express";
import { getAllUsers, signup, login, getUser } from "../controllers/user-controller.js";

const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.post("/signup", signup);
UserRouter.post("/login", login);
UserRouter.get('/:user_id', getUser)

export default UserRouter;
