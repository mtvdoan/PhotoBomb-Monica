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
 */
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((e) => (this._confirmPassword = e));

//Pre or Post Middleware
UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
        
        this.invalidate("confirmPassword", "Passwords must match!!");
    }
    // Otherwise call next middleware
    next();
});

/*
OPTIONAL: EMAIL CONFIRMATION

check confirm email THIS IS OPTIONAL...
UserSchema.virtual('confirmEmail')
    .get( () => this._confirmEmail )
    .set( e => this._confirmEmail = e);
UserSchema.pre('validate', function(next){
    if (this.email !== this.confirmEmail) {
        this.invalidate('confirmEmail', 'Emails must match!!')
    }
    next()
})
 */

//npm install mongoose bcrypt

// SAVE ENCRYPTED PASSWORD
UserSchema.pre("save", async function (next) {
    console.log("userschema.pre");
    try {
        // HASH PASSWORD 10Xs
        const hashedPassword = await bcrypt.hash(this.password, 10);
        // UPDATE WITH HASHED PASSWORD
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
