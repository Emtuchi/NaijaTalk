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
    date: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model("User", UserSchema);
