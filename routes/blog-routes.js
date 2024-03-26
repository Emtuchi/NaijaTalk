import express from "express"
import { UpdateBlog, UploadBlog, deleteBlog, getAllBlogs, getBlog, getUser } from "../controllers/blog-controller.js"

const BlogRouter = express.Router();


BlogRouter.get("/", getAllBlogs);
BlogRouter.post("/upload", UploadBlog);
BlogRouter.put("/update/:blog_id", UpdateBlog);
BlogRouter.get("/:blog_id", getBlog);
BlogRouter.delete("/:blog_id", deleteBlog);
BlogRouter.get('/user/:user_id', getUser);

export default BlogRouter;
