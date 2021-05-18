const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema(
    {
        nameUser: { type: String, required: true },
        email: { type: [String], required: true },
        gender: { type: [String], required: false },
        bio: { type: [String], required: false },
        photo: { type: [String], required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('profiles', Profile)
