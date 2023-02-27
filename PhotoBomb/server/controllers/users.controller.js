const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
    findAllUsers: async (req, res) => {
        User.find()
            .then((allUsers) => res.json(allUsers))
            .catch((err) =>
                res.status(400).json({
                    message:
                        "Something went wrong while trying to view all users",
                    error: err,
                })
            );
    },

    findOneUser: async (req, res) => {
        User.findById(req.params.id)
            .then((user) => res.json(user))
            .catch((err) =>
                res.status(400).json({
                    message:
                        "Something went wrong while trying to find details of a user ",
                    error: err,
                })
            );
    },
    register: async (req, res) => {
        try {
            // check to make sure email is unique
            const checkEmail = await User.findOne({ email: req.body.email });
            if (checkEmail) {
                res.status(400).json({
                    errors: {
                        email: { message: "Email needs to be unique. 📸" },
                    },
                });
                // check other inputs
            } else {
                // create schema using form data
                const data = new User(req.body);
                // save schema
                const user = await data.save();
                // use schema data to create payload
                const payload = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                };
                // create a token
                const token = jwt.sign(
                    { id: user._id },
                    process.env.SECRET_KEY
                );
                res.cookie("userToken", token, {
                    expires: new Date(Date.now() + 900000),
                }).json({ successMessage: "userToken: ", user: payload });
                console.log(
                    `Thanks for registering, ${user.firstName}.  Here's your userToken: ${token}.`
                );
            }
        } catch (err) {
            res.status(400).json(err);
        }
    },
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        console.log("logging in:" + user);
        try {
            // if email not in system
            if (!user) {
                res.status(400).json({ errors: "Email not found" });
                // else check the rest
            } else {
                const validPassword = await bcrypt.compare(
                    req.body.password,
                    user.password
                );
                if (!validPassword) {
                    res.status(400).json({ errors: "Invalid email/password" });
                } else {
                    const payload = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.username,
                        email: user.email,
                    };
                    // create a token
                    const token = jwt.sign(
                        { id: user._id },
                        process.env.SECRET_KEY
                    );
                    res.cookie("userToken", token, {
                        expires: new Date(Date.now() + 900000),
                    }).json({
                        successMessage: `userToken is ${token}`,
                        user: payload,
                    });
                    console.log(payload);
                }
            }
        } catch (err) {
            res.status(400).json({
                errors: "oops something when wrong in login",
            });
        }
    },
    logout: (req, res) => {
        console.log(`Logging out!`);
        res.clearCookie("userToken").json({
            successMessage: "User logged out",
        });
        console.log(res);
    },

    updateUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((updatedUser) => res.json({ updatedUser }))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong while updating.",
                    error: err,
                })
            );
    },

    getLogged: async (req, res) => {
        try {
            const user = jwt.verify(
                req.cookies.userToken,
                process.env.SECRET_KEY
            );
            const currentUser = await User.findOne({ email: user.email });
            res.json(`${currentUser} is logged in`);
            console.log(currentUser);
        } catch (error) {
            res.status(400).json({ errors: "failed to get logged in user" });
        }
    },

    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then((deletedUser) => res.json({ deletedUser }))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong while deleting.",
                    error: err,
                })
            );
    },
};
