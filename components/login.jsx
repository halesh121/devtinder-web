import axios from "axios";
import { useState } from "react";
import{addUser} from "../appstore/userslice"
import { useDispatch } from "react-redux";
import {BASE_URL} from '../appstore/constants'
import { useNavigate } from "react-router-dom";
import { removeFeed } from "../appstore/feeduserslice";



const Login=()=>{
    
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [email,setEmailid]=useState("")
    const [password,setPassword]=useState("")
    const [isLoginform,setIsloginform]=useState(true)
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // console.log(password)

    const clickhandler=async()=>{
        try {

            console.log(email,password)
        
         const res= await axios.post(BASE_URL + "/login",{
            email,
            password
        }
        ,{
            
            withCredentials:true,
            // headers:true
        }
    );
    dispatch(addUser(res.data));
     navigate("/feed")
        } catch (error) {
            setError(error?.response?.data || "something went wrong");
            console.error(error)
        }
    }

    const clicksingup=async()=>{
        try {
         const res= await axios.post(BASE_URL + "/signup",{
            firstname,
            lastname,
            email,
            password
        },{
            withCredentials:true,
        }
    );
    
    setIsloginform(true);
    // dispatch(removeFeed());    
    //  navigate("/feed")
        } catch (error) {
            setError(error?.response?.data || "something went wrong");
            console.error(error)
        }
       
        


    }

    return(
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto ">
  <legend className="fieldset-legend">{isLoginform? "Login":"Singup"}</legend>
{!isLoginform && (
    <>
   <label className="label" >Firstname</label>
  <input type="text" className="input" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} />

  <label className="label">Lastname </label>
  <input type="text" className="input" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>     
</>
)}

  <label className="label">Email {email}</label>
  <input type="text" className="input" value={email}  onChange={(e)=>{setEmailid(e.target.value)}} />

  <label className="label">Password {password}</label>
  <input type="text" className="input" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
    <p className="text-red-500">{error}</p>
  <button className="btn btn-neutral mt-4" onClick={isLoginform ? clickhandler : clicksingup}>{isLoginform ? "Login" : "Signup"}</button>

<p className="text" onClick={()=>setIsloginform(!isLoginform)}>{isLoginform ? "Don't have an account? Sign up" : "Already have an account? Login"}</p>
</fieldset>
    );
}

export default Login;