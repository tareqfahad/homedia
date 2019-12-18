const mongoose = require('mongoose');
const Schema = mongoose.Schema



const MusicSchema = new Schema({

        name: String,
        filepath : String,


},{ timestamps: true})



const Music = mongoose.model('Music' , MusicSchema);

module.exports = Music
