const express = require('express')
const route = express.Router()
const Video = require('../Model/Video')

//get all videos
route.get('/', async (req,res) => {
	try{
		const videos = await Video.find(
		)
		res.json({videos});
	}catch(err){
		res.json({message: err});
	}
});

route.post('/new' , (req , res) => {
const newVideo = new Video({

      name:req.body.name,
      posterpath:req.body.posterpath,
      filepath:req.body.filepath

})

newVideo.save()
.then(data => {
  res.json(data)
})
.catch(err => {
  res.json(err)
})


})

route.get('/find/:id' , ( req, res ) =>{

  Video.findById(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })

})



route.delete('/delete/:id' , (req , res) => {
    Video.remove({_id:req.params.id})
    .then(()=> {
      res.json({status:"Deleted"})
    })
    .catch(err => {
      res.json(err)
    })
})


route.put('/update/:id' , async (req , res ) => {

	try {
		let update = await Video.findByIdAndUpdate({"_id" : req.params.id}, {"name" : req.body.name})
		res.json(update)

		} catch(err) {
				res.json("Can't find anything")

		}





})


module.exports = route
