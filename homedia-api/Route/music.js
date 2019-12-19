const express = require('express')
const route = express.Router()

// import models
Music = require('../Model/Music')





route.post('/new' , (req , res) => {
const newMusic = new Music({

      name:req.body.name,
      filepath:req.body.filepath


})

newMusic.save()
.then(data => {
  res.json(data)
})
.catch(err => {
  res.json(err)
})


})

route.get('/find/:id' , ( req, res ) =>{

  Music.findById(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })

})

route.delete('/delete/:id' , (req , res) => {
    Music.remove({_id:req.params.id})
    .then(()=> {
      res.json({status:"Deleted"})
    })
    .catch(err => {
      res.json(err)
    })
})








module.exports = route
