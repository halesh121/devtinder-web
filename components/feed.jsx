import { useEffect } from "react";
import Usercard from "./usercardfeed";
import Store from "../appstore/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../appstore/constants";
import { addFeed } from "../appstore/feeduserslice";
const Feed=()=>{
    
    const feedslice=useSelector((Store)=>Store.feed)
    const dispatch=useDispatch();

    // console.log("before",feedslice)
    const feeduser=async()=>{    
        // alert("hi")
        try{
        
            if(feedslice) return;
       const res= await axios.get(BASE_URL + "/feed",{
    withCredentials:true});

    console.log("users feed",res.data)
    dispatch(addFeed(res.data))
    // console.log("after",feedslice)
        }
        
        catch(e){
            console.log(e)
        }


}


useEffect(()=>{
                feeduser();
            },[])

    
// for(let i =0;i<feedslice.)

return( feedslice && (  
<div className="flex justify-center ">
    <Usercard user={feedslice[0]}/>
    </div>
)
)};


export default Feed;