const mongoose = require('mongoose')//using mongoose to give a schema to mongodb database for validation
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
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
    signupdate: {
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('user',UserSchema)