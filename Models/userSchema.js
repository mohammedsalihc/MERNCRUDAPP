const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

const Users = new mongoose.model('users', userSchema)


module.exports = Users