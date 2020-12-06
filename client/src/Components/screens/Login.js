import React,{useState,useContext,useReducer} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
const Login = () =>{
  const {state,dispatch} = useContext(UserContext)
  const [email,setEmail]= useState("")
  const [password, setPassword]= useState("")
  const history = useHistory()
  const PostData =()=>{

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid email address entered", classes:"#d32f2f red darken-2"})
      return
    }

      fetch("/login",{
        method:"post",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          password,
          email
        })
      }).then(res=>res.json())
      .then(data => {
        console.log(data)
        if(data.error){
          M.toast({html: data.error, classes:"#d32f2f red darken-2"})
        }
        else{
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          dispatch({type:"USER",payload:data.user})
          M.toast({html: "Signed in successfully", classes: "#64dd17 light-green accent-4"})
          history.push("/")
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
      onClick={()=>PostData()}
      >
      Login
      </button>
      <h6>
      < Link to='/signup'> Dont have an account ? </Link>
      </h6>
    </div>
  </div>
)
}

export default Login
