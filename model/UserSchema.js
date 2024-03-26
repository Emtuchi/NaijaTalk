import mongoose from "mongoose";

// create a skeleton(Schema) to hold info about the user
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    /**blogs: An array of references to blog posts (represented by MongoDB ObjectIds)
     * associated with this user
     * 
     * ref: used to link to a mongoose schema model named "Blog",
     * where content will be shared from, using "User.findById(ObjectId).populate('blogs')"
     * "User" being the current mongoose model and "blogs" being this Schema key 
     * that is linked to the "Blog" mongoose model, and "populate" used to retrieve content by the doc "ObjectId"
     * 
     * type: to specify that this will contain the object id of a document
     */
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true
    }],
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model("User", UserSchema);
