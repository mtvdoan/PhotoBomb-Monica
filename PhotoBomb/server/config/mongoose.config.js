const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/PhotoBomb", {  //NEED TO UPDATE PROJECT WITH NAME
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Something went wrong", err))