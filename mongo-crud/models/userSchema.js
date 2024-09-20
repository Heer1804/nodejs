const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type:Array ,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobbies: {
        type: String ,
        required: true
    }
})

const user = mongoose.model('userTbl', userSchema);

module.exports = user;