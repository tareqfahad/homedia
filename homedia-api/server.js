const express = require('express')
const mongoose = require('mongoose')

// App
const app = express()




// Importing Route
const showRoute = require('./Route/show')
const usersRoute = require('./Route/users')
const videoRoute = require('./Route/video')
const musicRoute = require('./Route/music')





// Middlewares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/show' , showRoute)
app.use('/users' , usersRoute)
app.use('/music' , musicRoute)
app.use('/video' , videoRoute)



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
