import React,{useContext} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
const NavBar =() =>{
  const {state,dispatch}= useContext(UserContext)
  const history= useHistory()
  const renderList=()=>{
    if(state){
      return[
        <li>
        <a className="waves-effect waves-light btn #64b5f6 blue lighten-2"
        onClick={()=>{
          history.push('/profile')
        }}
        style={{margin:"5px"}}
        >
        Profile
        <i className="material-icons right">fingerprint</i></a>
        </li>,

        <li>
        <a className="waves-effect waves-light btn #64b5f6 blue lighten-2"
        onClick={()=>{
          history.push('/createpost')
        }}
        style={{margin:"5px"}}
        >
        Create Post
        <i className="material-icons right">add_a_photo</i></a>
        </li>,

        <li>
        <a className="waves-effect waves-light btn #64b5f6 blue lighten-2"
        onClick={()=>{
          history.push('/about')
        }}
        style={{margin:"5px"}}
        >
        About
        <i className="material-icons right">code</i></a>
        </li>,

        <li>
        <a className="waves-effect waves-light btn #ff5252 red accent-2"
        onClick={()=>{
          localStorage.clear()
          dispatch({type: "CLEAR"})
          history.push('/login')
        }}
        style={{margin:"5px"}}        
        >
        Logout
        <i className="material-icons right">exit_to_app</i></a>
        </li>
      ]
    }else{
      return[
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }
return (
  <nav>
   <div className="nav-wrapper white">
     <Link to={state? "/":"/login"}className="brand-logo ">
     <i className="large material-icons">camera_enhance</i>
     Xstagram</Link>
     <ul id="nav-mobile" className="right">
        {renderList()}

     </ul>
   </div>
 </nav>
)

}

export default NavBar
