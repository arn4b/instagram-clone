const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const User = mongoose.model("User")

const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },

  body:{
    type:String,
    required:true
  },

  photograph:{
    type:String,
    required: true
  },

  likes:
    [{
      type:ObjectId,
      ref:"User"
    }],

  comments:
  [{
       text:String,
       postedByUser:
       {type:ObjectId,ref:"User"}
  }],

  postedByUser:{
    type:ObjectId,
    ref:"User"
  }

})

mongoose.model("Post",postSchema)
