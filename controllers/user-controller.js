import { loginValidation, SignupValidation} from "../model/ValidationSchema.js";
import User from "../model/UserSchema.js";
import  bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    }catch(err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found"})
    }
    return res.status(200).json({ users });
};

export const signup = async (req, res) => {
    const { error } = SignupValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    const { name, email, password, date } = req.body;

    let UserExists;
    try {
        UserExists = await User.findOne({ email })
    } catch (err) {
        console.log(err);
    }
    if  (UserExists) {
        return res.status(400).json({message: "User Already Exists!"});
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: [],
        date
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({user})
}

export const login = async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    const { email, password } = req.body
    let UserExists;
    try {
        UserExists = await User.findOne({ email });
    } catch (err) {
        return console.log(err)
    }
    if (!UserExists) {
        return res.status(404)
        .json({ message: "User Not Found! try again"});
    }
    const SamePassword = bcrypt.compareSync(password, UserExists.password);
    if (!SamePassword) {
        return res.status(400).json({message: "Access Denied! Wrong details"})
    }

    return res.status(200).json({message: "login succesful"});
}
