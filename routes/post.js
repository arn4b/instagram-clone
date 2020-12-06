const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const requireLogin=require('../middleware/requireLogin')
const Post=mongoose.model("Post")
const User= mongoose.model("User")

router.get('/allposts',requireLogin,(req,res)=>{
  Post.find()
  .populate("postedByUser","_id name")
  .populate("comments.postedByUser","_id name")
  .then(posts=>{
    res.json({posts})
  })
  .catch(err=>{
    console.log(err)
  })
})

router.post('/createpost',requireLogin,(req,res)=>{
  const{title,body,pic}=req.body
  if(!title || !body || !pic){
    res.status(422).json({error:"Please add all the fields"})
  }
  req.user.password=undefined
  const post = new Post({
    title,
    body,
    photograph:pic,
    postedByUser:req.user
  })
  post.save().then(result=>{
    res.json({post:result})
  })
  .catch(err=>{
    console.log(err)
  })

})

router.get('/mypost',requireLogin,(req,res)=>{
  Post.find({postedByUser:req.user._id})
  .populate("postedByUser","_id name")
  .then(mypost=>{
    res.json({mypost})
  })
  .catch(err=>{
    console.log(err)
  })
})

router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedByUser:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedByUser","_id name")
    .populate("postedByUser","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedByUser","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedByUser._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})

module.exports= router
