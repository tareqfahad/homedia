const mongoose = require('mongoose');
const Schema = mongoose.Schema



const UsersSchema = new Schema({

        username: String,
        password: String
},{ timestamps : true})



const User = mongoose.model('User' , UsersSchema);

module.exports = User