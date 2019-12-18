const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')

// App
const app = express()




// Importing Route
const showRoute = require('./Route/show')
const usersRoute = require('./Route/users')
const videoRoute = require('./Route/video')
const musicRoute = require('./Route/music')





// Middlewares
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json({limit: '50gb', extended: true}));


app.use('/api/show' , showRoute)
app.use('/api/users' , usersRoute)
app.use('/api/music' , musicRoute)
app.use('/api/video' , videoRoute)



app.get('/' , (req , res) => {
    res.send("Heeey , this is the home page :) ")
})





// Database conection

mongoose.connect('mongodb://localhost/homedia', {useNewUrlParser: true , useUnifiedTopology: true } , () => {
        console.log("DB is connected");
})



app.listen(62300 , () => {

      console.log("Im working");

})
