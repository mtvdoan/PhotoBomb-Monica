const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is required"],
            minLength: [2, "First Name must be at least 2 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Last Name is required"],
            minLength: [2, "Last Name must be at least 2 characters"],
        },
        username: {
            type: String,
            required: [true, "Username is required"],
            minLength: [2, "Username must be at least 2 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            minLength: [8, "Email must be at least 8 characters"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: [2, "Password must be at least 2 characters"],
        },
    },
    { timestamps: true }
);

/*
? MongoDB schema provides virtual
? short term value
!Commented this block of code BELOW for the sake of testing.  Otherwise, registering a user will think that password & confirmPass don't match for some reason;
 */
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((e) => (this._confirmPassword = e));

// pre or post middleware
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) { //This was a but changed it to == to help with generating random users
        this.invalidate("confirmPassword", "Passwords must match!!");
    }
    // otherwise call next middleware
    // always call next middleware
    next();
});

// check confirm email THIS IS OPTIONAL...
// UserSchema.virtual('confirmEmail')
//     .get( () => this._confirmEmail )
//     .set( e => this._confirmEmail = e);
// UserSchema.pre('validate', function(next){
//     if (this.email !== this.confirmEmail) {
//         this.invalidate('confirmEmail', 'Emails must match💜💜!!')
//     }
//     next()
// })

// SAVE ENCRYPTED PASSWORD
UserSchema.pre("save", async function (next) {
    console.log("userschema.pre")
    try {
        // hash the password, 10 times
        const hashedPassword = await bcrypt.hash(this.password, 10);
        // update password with hashed password
        this.password = hashedPassword;
        next();
    } catch (err) {
        console.log("ERROR IN SAVE: ", err);
    }
});

module.exports = mongoose.model("UserSchema", UserSchema);

/* JOIN
createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
}
*/
