const mongoose = require("mongoose");
// const validator = require('validator')

const PhotoDetailsSchema = new mongoose.Schema(
    {
        photoDetailsCreator: {
            type: String,
            required: [true, "A creator is required."],
            minlength: [3, "A creator needs to be at least 3 characters long"],
        },
        photoDetailsLabel: {
            type: String,
            required: [true, "A label is required."],
            minlength: [3, "A label needs to be at least 3 characters long"],
        },
        photoDetailsDescription: {
            type: String,
            required: [true, "A Description is required."],
            minlength: [
                3,
                "Description is required and must be at least 3 characters",
            ],
        },
        photoDetailsDateTaken: {
            type: Date,
            default: Date.now(),
        },
    },
    { timestamps: true }
);

PhotoDetailsSchema.pre('save', function(next) { if (!this.createdAt) { this.createdAt = new Date(); } next(); });
const PhotoDetails = mongoose.model("PhotoDetails", PhotoDetailsSchema);
module.exports = PhotoDetails;
