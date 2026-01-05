import { use } from "react";
import Editprofile from "./editprofile";
import Usercard from "./usercardfeed";
import { useSelector } from "react-redux";
const Profile=()=>{
const u=useSelector((store)=>store.user);
// console.log(u);
    return(
        (u &&
        <Editprofile user={u}/>
        )
    );
}


export default Profile;