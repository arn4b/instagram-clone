import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const Profile = ()=>{
  const [userProfile,setProfile] = useState(null)
  const {state,dispatch} = useContext(UserContext)
  const {userid} = useParams()
  const [showfollow,setShowFollow] = useState(true)
  useEffect(()=>{
     fetch(`/user/${userid}`,{
         headers:{
             "Authorization":"Bearer " + localStorage.getItem("jwt")
         }
     }).then(res=>res.json())
     .then(result=>{
         console.log(result)

          setProfile(result)
     })
  },[])

const followUser = () =>{
  fetch('/follow',{
    method:"put",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+ localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      followId:userid
    })
  }).then(data=>{
      console.log(data)
      dispatch({type:"UPDATE",payload:{following:data.following, followers:data.followers}})
      localStorage.setItem("user", JSON.stringify(data))
      setProfile((prevState)=>{
        return{
          ...prevState,
          user:{
            ...prevState.user,
            followers:[
              ...prevState.user.followers, data._id
            ]
          }
        }
      }
      )
      setShowFollow(false)
  })

}

const unfollowUser = () =>{
  fetch('/unfollow',{
    method:"put",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+ localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      unfollowId:userid
    })
  }).then(data=>{
      console.log(data)
      dispatch({type:"UPDATE",payload:{following:data.following, followers:data.followers}})
      localStorage.setItem("user", JSON.stringify(data))
      setProfile((prevState)=>{
        const newFollower = prevState.user.followers.filter(item=>item != data._id)
        return{
          ...prevState,
          user:{
            ...prevState.user,
            followers:newFollower

          }
        }
      }
      )

  })

}

  return (
    <>
    {userProfile ?
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
        <h4> {userProfile.user.name} </h4>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '108%', borderRadius: '108%'}}>
          <h5> {userProfile.posts.length} posts </h5>
          <h5> {userProfile.user.followers.length} followers </h5>
          <h5> {userProfile.user.following.length} following </h5>
        </div>
        {showfollow

          ?

          <a className="waves-effect waves-light btn #64b5f6 blue lighten-2"
          onClick={()=>{
          followUser()
          }}
          style={{margin:"5px"}}
          >
          follow
          <i className="material-icons right">person_add</i></a>

          :

          <a className="waves-effect waves-light btn #ff1744 red accent-3"
          onClick={()=>{
          unfollowUser()
          }}
          style={{margin:"5px"}}
          >
          unfollow
          <i className="material-icons right">person_outline</i></a>
        }



        </div>
      </div>
      <div className="gallery">
      {
        userProfile.posts.map(item => {
          return(
            <img className="item" src={item.photograph} alt={item.title} />

          )
        })
      }
      </div>

    </div>

    :
    <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  }
  </>
  )

}

export default Profile
