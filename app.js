import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user-routes.js";


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/v1/user", router);

// connect to monogdb website
mongoose.connect(process.env.DB_LOGIN)
.then(()=>app.listen(5000))
.then(()=>console.log('connected to mongoDB!'))
.catch((err)=>console.log(err));
