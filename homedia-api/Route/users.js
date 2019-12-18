const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Model/Users')
require('dotenv').config()
const router = express.Router()

//find by id
router.get('/find/:id' , ( req, res ) =>{

  User.findById(req.params.id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.json(err)
  })
})
//delete user
router.delete('/delete/:id' , (req , res) => {
  User.remove({_id:req.params.id})
  .then(()=> {
    res.json({status:"Deleted"})
  })
  .catch(err => {
    res.json(err)
  })
})

//update user

router.put('/update/:id', async (req,res) => {
	try{
		let updateBody = {};

		req.body.newPassword? updateBody.password = req.body.newPassword: updateBody;
		const user = await User.findByIdAndUpdate(req.params.id, updateBody);
		if(!user){
			res.status(404).json({message: "user not found"});
		}else{
			res.json({message: "Password Updated", user});
		}
	}catch(err){
		res.json({message: err});
	}
});


router.post("/register", (req, res) => {
    const newUser = { ...req.body };
    User.findOne({ username: newUser.username })
      .then(user => {
        if (!user) {
          bcrypt.hash(newUser.password, 10, (err, hash) => {
            newUser.password = hash;
            User.create(newUser)
              .then(user => {
                res
                  .status(201)
                  .json(`user ${newUser.username} created successfully`);
              })
              .catch(err => res.status(400).send(err));
          });
        } else {
          res.status(400).send("username exists , please use a different username ");
        }
      })
      .catch(err => res.status(400).send(err));
  });
  //login
  router.post("/login", (req, res) => {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            let payload = {
              id: user._id,
              username: user.username
            };
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: "24h"
            });
            res.status(200).json({ msg: "logged in successfully", token: token });
          } else {
            res.status(400).send("password is not correct");
          }
        } else {
          res.status(400).send("username not found");
        }
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });






module.exports = router
