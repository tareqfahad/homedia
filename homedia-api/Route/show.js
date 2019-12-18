const express = require('express')
const route = express.Router()

// import model
const Video = require('../Model/Video')
const Music = require('../Model/Music')

route.get('/video' , (req,res) => {

  Video.find()
  .then(data => {
    res.json(data)
  })
.catch(err =>  {
  res.json(err)
})

})


route.get('/music' , (req,res) => {

  Music.find()
  .then(data => {
    res.json(data)
  })
.catch(err =>  {
  res.json(err)
})

})


















module.exports = route
