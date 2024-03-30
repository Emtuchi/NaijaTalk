import express from "express";
import { getAllUsers, signup, login, getUser, deleteUser } from "../controllers/user-controller.js";

const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.post("/signup", signup);
UserRouter.post("/login", login);
UserRouter.get('/:user_id', getUser);
UserRouter.delete('/:user_id', deleteUser);

export default UserRouter;
