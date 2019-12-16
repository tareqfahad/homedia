const express = require('express')
const route = express.Router()









route.get('/' , (req , res) => {
    res.send("Heeey , this is the home page :) ")
})







module.exports = route
