const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
    findAllUsers: (req, res) => {
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

    findOne: (req, res) => {
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
            // check to make sure email is not the same
            const checkEmail = await User.findOne({ email: req.body.email });
            if (checkEmail) {
                res.status(400).json({
                    errors: { email: { message: "Email in use 📸" } },
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
                        email: user.email,
                        first: user.first,
                        last: user.last,
                    };
                    // create a token
                    const token = jwt.sign(
                        { id: user._id },
                        process.env.SECRET_KEY
                    );
                    res.cookie("userToken", token, {
                        expires: new Date(Date.now() + 900000),
                        // }).json({ successMessage: "userToken: ", user: payload });
                    }).json({
                        successMessage: `userToken is ${token}`,
                        user: payload,
                    });
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
        res.clearCookie("userToken").json({ successMessage: "User logged out" });
    },

    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedUser) => res.json({ updatedUser }))
            .catch((err) =>
                res.status(400).json({
                    message: "Something went wrong while updating.",
                    error: err,
                })
            );
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

// const User = require('../models/user.model')
// // decrypt and encrypt passwords
// const bcrypt = require('bcrypt')
// // JWT: Json Web Token
// // encoded and varified by secret key
// // decodent into json object
// const jwt = require('jsonwebtoken')

// const index = (req, res) => {
//     res.json({ message: "Hello World" })
// }

// const login = async (req, res) => {
//     const user = await Model.findOne({ email: req.body.email })
//     console.log('logging in:' + user)
//     try {
//         // if email not in system
//         if (!user) {
//             res.status(400).json({ errors: 'Email not found' })
//             // else check the rest
//         } else {
//             const validPassword = await bcrypt.compare(req.body.password, user.password)
//             if (!validPassword) {
//                 res.status(400).json({ errors: 'Invalid email/password' })
//             } else {
//                 const payload = { _id: user._id, email: user.email, first: user.first, last:user.last }
//                 const token = jwt.sign(payload, SECRET)
//                 res.cookie('userToken', token, { expires: new Date(Date.now() + 900000) })
//                 .json({ successMessage: 'userToken: ', user: payload })
//             }
//         }
//     } catch (err) {
//         res.status(400).json({ errors: 'oops something when wrong in login' })
//     }
// }

// const getLogged = async (req, res) => {
//     try {
//         const user = jwt.verify(req.cookies.userToken, SECRET);
//         const currentUser = await Model.findOne({ _id: user._id });
//         res.json(currentUser);
//     } catch (error) {
//         res.status(400).json({ errors: 'failed to get logged in user' })
//     }
// };

// const updateOne = async (req, res) => {
//     console.log('updateOne:', req.body)
//     Model.findOneAndUpdate( {_id: req.body._id}, req.body, { new: true } )
//         .then( e => {res.json(e)} )
//         .catch( e => res.json(e) )
// }

// // export
// module.exports = { index, register, login, logout, getLogged, updateOne }
