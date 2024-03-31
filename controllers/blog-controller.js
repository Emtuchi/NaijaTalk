import mongoose from "mongoose";
import Blog from "../model/BlogSchema.js";
import User from "../model/UserSchema.js";

export const getAllBlogs = async (req, res) => {
    let blogs;
    try{
        blogs = await Blog.find();
    } catch(err) {
        return console.log(err)
    }
    if (!blogs) {
        return res.status(404).json({message: "No Blogs Found !"});
    }
    return res.status(200).json({blogs})
};

export const UploadBlog = async (req, res) => {
    const { title, description, user, date } = req.body;
    let RegisteredUser;
    try {
        RegisteredUser = await User.findById(user);
    } catch(err) {
        return console.log(err)
    }
    if (!RegisteredUser) {
        return res.status(400).json({message: "User not Found !"});
    }
    const blog = new Blog({
        title,
        description,
        user,
        date,
    })
    try {
        /**
         * Transactions allow you to group multiple database 
         * operations together into a single unit of work
         * 
         * Transactions are managed through sessions.
         * 
         * session represents a logical connection to the database
         * and allows you to perform operations within a transaction.
         * 
         * the transaction in this code is between "session.startTransaction();"
         * and "await session.commitTransaction();", so everything inbetween is performed
         * as a single unit i.e if one fails, then all fail
         */
        const session = await mongoose.startSession();
        session.startTransaction();// start transaction
        await blog.save({session});// save blogs to database as part of the current session
        RegisteredUser.blogs.push(blog);// push blog into blogs array of a user gotten by its id
        await RegisteredUser.save({ session });// save the actions taken on RegisteredUser as part of the session
        await session.commitTransaction(); //save and end transaction
    } catch(err) {
        return res.status(500).json({message: err})
    }
    return res.status(200).json({ blog });
};

export const UpdateBlog = async (req, res) => {
    const { title, description } = req.body;
    const Id = req.params.blog_id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(Id, {
            title,
            description
        })
    } catch(err) {
        console.log(err)
    }
    if (!blog) {
        return res.status(500).json({message: "OOps, Error Occured while Updating!"});
    }
    return res.status(200).json({ blog });
}

export const getBlog = async (req, res) => {
    const id = req.params.blog_id;
    let blog;
    try {
        blog = await Blog.findById(id);
    } catch(err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(404).json({message: "Blog Not Found !"})
    }
    return res.status(200).json({ blog });
}

export const deleteBlog = async (req, res) => {
    const id = req.params.blog_id;
    let blog;
    try {
        /**
         * When you retrieve a document (e.g., a blog post) 
         * from the database, the user field contains only the ObjectId
         * 
         * To retrieve the actual user data associated with that ObjectId,
         * you use .populate('user').
         */
        blog = await Blog.findByIdAndDelete(id).populate('user');
        if (blog.user && blog.user.blogs) {
            await blog.user.blogs.pull(blog);// delete the blog
            await blog.user.save();
        }
    } catch(err) {
        return console.log(err);
    }
    if (!blog) {
        return res.status(500).json({ message: "OOps, Error Occurred while deleting"})
    }
    return res.status(200).json({message: "Successfully Deleted"});
}

export const getUserBlogs = async (req, res) => {
    const id = req.params.user_id;
    let blogsOfuser;
    try {
        /**
         * When you retrieve a document (e.g., a blog post) 
         * from the database, the user field contains only the ObjectId
         * 
         * To retrieve the actual user data associated with that ObjectId,
         * you use .populate('user').
         */
        blogsOfuser = await User.findById(id).populate("blogs");
    } catch(err) {
        return console.log(err)
    }
    if (!blogsOfuser) {
        return res.status(404).json({message:"Unable to find blogs of this user"})
    }
    return res.status(200).json({blogs: blogsOfuser}) // this prints actual content and not an object id
}
