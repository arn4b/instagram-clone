import React,{useState, useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const CreatePost = () =>{
  const history = useHistory()
  const [title,setTitle]= useState("")
  const [body,setBody]= useState("")
  const [image,setImage]= useState("")
  const [url,setUrl]= useState("")
  useEffect(()=>{
    if(url){
    fetch("/createpost",{
      method:"post",
      headers: {
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        title,
        body,
        pic:url
      })
    }).then(res=>res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        M.toast({html: data.error, classes:"#d32f2f red darken-2"})
      }
      else{
        M.toast({html: "Created post Succesfully", classes: "#64dd17 light-green accent-4"})
        history.push("/")
      }
    }).catch(err => {
      console.log(err)
    })
  }
  },[url])
  const postDetails=()=>{
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","arn4b")
    fetch("https://api.cloudinary.com/v1_1/arn4b/image/upload",{
      method: "post",
      body: data
    })
    .then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
    })
    .catch(err=>{
      console.log(err)
    })


  }


  return (
    <div className="card input-field"
    style={{
      margin:"10px auto",
      maxWidth:"500px",
      padding:"20px",
      textAlign: "center"
     }}>

     <h2>Create a Post</h2>
      <input
      type="text"
      placeholder="Caption"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <input
      type="text"
      placeholder="About"
      value={body}
      onChange={(e)=>setBody(e.target.value)}
      />
      <div className="file-field input-field">
      <div className="btn #64b5f6 blue darken-1">
    <span>Uplaod Image</span>
    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
    </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
    onClick={()=>postDetails()}

    >
        Submit post
    </button>
    </div>

  )
}
// onClick={()=>postDetails()}

export default CreatePost
