const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: { type: String, required: true, minlength: 3, maxlength: 20 },
    password: { type: String, required: true, minlength: 6, maxlength: 200 }, // Better security
    email: { type: String, required: true, minlength: 5, maxlength: 50, unique: true }, // Increased length
    profilePhoto: { type: String },
    gender: { type: String },
    bio: { type: String, minlength: 3, maxlength: 200 },
    hobbies: { type: [String] }, // Ensure it's an array of strings
    friendsList: { type: [String] }
}, { timestamps: true });

const UserModel = mongoose.model("User", schema);
module.exports = UserModel;
