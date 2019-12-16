const mongoose = require('mongoose');
const Schema = mongoose.Schema



const Music = new Schema({

        name: String,
        filepath : String,


},{ timestamps , true})



const Music = mongoose.model('Music' , PostSchema);

module.exports = Music
