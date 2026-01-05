import { useState } from "react";
import Usercard from "./usercardfeed";
import axios from "axios";
import { BASE_URL } from "../appstore/constants";
import { addUser } from "../appstore/userslice";
import { useDispatch } from "react-redux";
import Editusercard from "./editusercard";
// import { useSelector } from "react-redux";
const Editprofile=({user})=>{

    const usedispatch=useDispatch();
    // console.log("editprofile",user); 
    // const {firstname,lastname,age,skills,about,photourl}=user;
    // const u=useSe
    // lector((store)=>store.user);
    const[firstname,setFirstname]=useState(user.firstname);
    const[lastname,setLastname]=useState(user.lastname);
    const[age,setAge]=useState(user.age);
    const[skills,setSkills]=useState(user.skills);
    const[about,setAbout]=useState(user.about);
    const[photourl,setphotourl]=useState(user.photourl);
    const[messsage,setmessage]=useState(false);
    const[error,setError]=useState(""); 

    const saveprofile=async()=>{
     try {
        
        const res=await axios.patch(BASE_URL + "/profile/edit",{
    firstname,lastname,age,skills,about,photourl        
           },{withCredentials:true})
           usedispatch(addUser(res.data))
           setTimeout(() => {
            
             setmessage("profile updated successfully",true)
             
           }, 3000);   
          


     } catch (error) {
        console.log(error)
         setError(error?.responses?.data || "something went wrong");
     }
          
    }
    return(
    <>
        <div className="flex justify-center my-10">
        <div className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto ">
  <legend className="fieldset-legend center">Edit Profile</legend>

  <label className="label">FirstName</label>
  <input type="text" className="input" value={firstname}  onChange={(e)=>{setFirstname(e.target.value)}} />

  <label className="label">LastName </label>
  <input type="text" className="input" value={lastname}  onChange={(e)=>{setLastname(e.target.value)}}/>
  <label className="label">age </label>
  <input type="text" className="input" value={age}  onChange={(e)=>{setAge(e.target.value)}}/>
  <label className="label">Photourl </label>
  <input type="text" className="input" value={photourl}  onChange={(e)=>{setphotourl(e.target.value)}}/>
  <label className="label">skills </label>
  <input type="text" className="input" value={about}  onChange={(e)=>{setSkills(e.target.value)}}/>
  <label className="label">about </label>
   <textarea className="textarea" placeholder="" value={about} onChange={(e)=>{setSkills(e.target.value)}}></textarea>
  {/* <input type="text" className="input" value={about}  onChange={(e)=>{setAbout(e.target.value)}}/> */}
    <p className="text-red-500">{error}</p>
  <button className="btn btn-neutral mt-4" onClick={saveprofile}>save profile</button>
</fieldset>
</div>
<Editusercard user={{firstname,lastname,age,photourl,skills,about}}/>
</div>

<div className={`toast toast-top toast-center ${messsage ? "" : "hidden"}`}>
  <div className="alert alert-success">
    <span>{messsage}</span>
  </div>
</div>
</>
    )
}

export default Editprofile;