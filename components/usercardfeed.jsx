import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { BASE_URL } from "../appstore/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFeed } from "../appstore/feeduserslice.js";
const Usercard=({user})=>{

    const userfeeddetails=useSelector((Store)=>Store.feed);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  async function userinstersted(userid,status){
    try{
    const intersteduser=await axios.post(BASE_URL + "/connect/"+userid+"/"+status+"",{     
    },{withCredentials:true})

    // navigate("/feed");
    dispatch(removeFeed(userid));
    // window.location.reload();
    // console.log("intersteduser",intersteduser);
    }
    catch(e){
      console.log(e)
    }
  }
  
  // useEffect(()=>{

  // },[])

  if(!user){
    return <div>No user data available</div>;
  }

    return(

<div className="card bg-base-300 w-96 h-90 p-4 m-4">
  <figure>
    <img
     className="w-40 h-40" src={user.photourl} alt="PHOTO" />
  </figure>
  <div className="card-body justify-center items-center">
    <h2 className=" flex-grow-0">{user.firstname} {user.lastname}</h2>
    <p className=" flex-grow-0">{user.about}</p>
    <p className="py-auto flex-grow-0">{user.skills}</p>
    <div className="card-actions ">
      <button className="btn btn-secondary" value="ignore" onClick={(e) => userinstersted(user._id,e.target.value)}>ignore</button>
      <button className="btn btn-primary" value="intersted" onClick={(e) => userinstersted(user._id,e.target.value)}>intersted</button>
    </div>
  </div>
</div>);
// })
}


export default Usercard;