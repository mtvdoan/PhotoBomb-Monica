//Dependencies
const express = require("express"); 
const cors = require("cors");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 8000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://localhost:3000"
}));

//Requires
require("./config/mongoose.config");
require("./routes/SOMETHING.routes")(app);  //Need to edit 'SOMETHING' with real name. lol


//Listen Method
app.listen(port, ()=>console.log("Listening on port:", port))             
