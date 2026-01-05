import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { BASE_URL } from "../appstore/constants";
import { useEffect } from "react";

const Editusercard=({user})=>{

  // const useraary=Object.entries(user);
  // console.log("array",typeof useraary);
// return useraary.filter((u)=>{
  // console.log(user)  

  const navigate=useNavigate();

  async function userinstersted(userid,status){
    try{
    const intersteduser=await axios.post(BASE_URL + "/connect/"+userid+"/"+status+"",{     
    },{withCredentials:true})

    navigate("/feed");
    // window.location.reload();
    console.log("intersteduser",intersteduser);
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

<div className="card bg-base-300 w-96 h-130">
  <figure>
    <img
      src={user.photourl} alt="PHOTO" />
  </figure>
  <div className="card-body justify-center items-center">
    <h2 className=" flex-grow-0">{user.firstname} {user.lastname}</h2>
    <p className=" flex-grow-0">{user.about}</p>
    <p className="py-auto flex-grow-0">{user.skills}</p>
   
  </div>
</div>);
// })
}


export default Editusercard;