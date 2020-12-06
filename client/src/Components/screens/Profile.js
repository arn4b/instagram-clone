import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'

const Profile = () =>{
  const [mypics, setPics]= useState([])
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
         fetch('/mypost',{
             headers:{
                 "Authorization":"Bearer "+localStorage.getItem("jwt")
             }
         }).then(res=>res.json())
         .then(result=>{
             console.log(result)
             setPics(result.mypost)
         })
      },[])

  return (

    <div style={{maxWidth:'800px', margin: '0px auto'}}>
      <div style={{
      display: 'flex',
      justifyContent:'space-around',
      margin :"18px 0px",
      borderBottom:"1px solid grey"
    }}>
        <div>
        <img style ={{width: '160px', height: '160px', borderRadius: '80px'}}
        src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
        />
        </div>
      <div>
      <h4> {state?state.name:"loading"} </h4>
      <h5> {state?state.email:"loading"} </h5>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '108%', borderRadius: '108%'}}>
      <h6> {mypics.length} posts</h6>
      <h6> {state?state.followers:"0"} followers</h6>
      <h6> {state?state.following:"0"} following</h6>
      </div>
      </div>
    </div>
    <div className="gallery">
    {
      mypics.map(item => {
        return(
          <img className="item" src={item.photograph} alt={item.title} />

        )
      })
    }
    </div>

  </div>

  )

}

export default Profile
