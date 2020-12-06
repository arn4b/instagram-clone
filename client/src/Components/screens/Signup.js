import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = () =>{
  const [name,setName]=useState("")
  const [email,setEmail]= useState("")
  const [password, setPassword]= useState("")
  const history = useHistory()
  const PostData =()=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid email address entered", classes:"#d32f2f red darken-2"})
      return
    }

      fetch("/signup",{
        method:"post",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,
          password,
          email
        })
      }).then(res=>res.json())
      .then(data => {
        if(data.error){
          M.toast({html: data.error, classes:"#d32f2f red darken-2"})
        }
        else{
          M.toast({html: data.message, classes: "#64dd17 light-green accent-4"})
          history.push("/login")
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
  <div className="mycard">
    <div className="card auth-card">
      <h2> Xstagram </h2>
      <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <input
      type="text"
      placeholder="Email Address"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button className="btn waves-effect waves-light #448aff blue accent-2"
      onClick={()=>PostData()}>Signup
      </button>
      <h6>
      < Link to='/login'> Already have an account ? </Link>
      </h6>
    </div>
  </div>
)
}

export default Signup
