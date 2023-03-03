//Read Environment Variables
require("dotenv").config();

// Express: js framework - interface to Node Server
const express = require("express");
const app = express();

// Cors Cross-Origin Request
const cors = require("cors");

// Middleware for Cookies
const cookieParser = require("cookie-parser");
const PORT = 8000;

//Middleware for Node.js and Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());

// Connect to Mongoose and Routes
require("./config/mongoose.config");
require("./routes/users.routes")(app);
require("./routes/photoDetails.routes")(app);

//App Listening to PORT
app.listen(PORT, () => console.log(`Party on port: ${PORT}`));

// LOGIN REG INSTALL
// npm install bcrypt dotenv cookie-parser jsonwebtoken
