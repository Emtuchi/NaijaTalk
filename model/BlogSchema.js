import mongoose from "mongoose";

// create a structure(Schema) to hold info about blogs
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    /** user: A reference to a user (represented by a MongoDB ObjectId) 
     * who authored the blog post. It is required and linked to a “User” model
     * 
     * ref: used to link to a mongoose schema model named "User",
     * where content will be shared from, using "Blog.findById(ObjectId).populate('user')"
     * "Blog" being the current mongoose model and "user" being this Schema key 
     * that is linked to the "User" mongoose model, and "populate" used to retrieve content by the doc "ObjectId"
     * 
     * type: This means that the user field(schema key below) will store an ObjectId(id of a stored doc) 
     * which is what is returned when you retrieve a doc, not the actual content, until you
     * use .populate('user') to generate the associated content, 'user' is the name of this key in the schema block below, 
     * it can be anyname too 
     * 
     */
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model("Blog", BlogSchema);
