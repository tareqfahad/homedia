const express = require('express')
const route = express.Router()

// import model
const Video = require('../Model/Video')

route.get('/video' , (req,res) => {

  Video.find()
  .then(data => {
    res.json(data)
  })
.catch(err =>  {
  res.json(err)
})

})


















module.exports = route
