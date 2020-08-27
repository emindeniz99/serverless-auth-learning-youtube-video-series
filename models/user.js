const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
            index: {
                unique: true
            },
            minlength: [6, "Email can't be shorter than 6 characters."],
            maxlength: [64, "Email can't be longer than 64 characters."],
        },
        password: {
            required: true,
            type: String
        }
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model("User",UserSchema)

module.exports= UserModel