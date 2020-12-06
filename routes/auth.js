const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../config/keys')
const requireLogin=require('../middleware/requireLogin')

router.get('/protected',requireLogin,(req,res)=>{
  res.send("Hello user")
})

router.post('/signup',(req,res)=>{
  const {name,email,password}=req.body
  if(!email || !name || !password ){
    return res.status(422).json({error:"Please add all the fields"})
  }
    User.findOne({email:email})
    .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"User already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
        const user = new User({
          email,
          password:hashedpassword,
          name,
        })

        user.save()
        .then(user=>{
          res.json({message:"Saved Successfully"})
        })
        .catch(err=>{
          console.log(err)
        })
      })
      .catch(err=>{
        console.log(err)
      })
      })

})

router.post('/login',(req,res)=>{
  const{email,password} = req.body
  if(!email || !password){
    res.status(422).json({error:"Please add email Id and the password my deAR chiLd"})
  }
  User.findOne({email:email})
  .then(savedUser=>{
    if(!savedUser){
      return res.status(422).json({error:"Invalid id and pass"})
    }
    bcrypt.compare(password,savedUser.password)
    .then(doMatch=>{
      if(doMatch){
        //res.json({message:"Successfully signed in"})
        const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
        const {_id,name, email}=savedUser
        res.json({token,user:{_id,name, email}})
      }
      else{
        return res.status(422).json({error:"Invalid id and pass"})
      }
    })
      .catch(err=>{
        console.log(err)
      })
    })
  })

module.exports = router
