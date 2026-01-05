import { useDispatch, useSelector } from "react-redux";
import Store from "../appstore/store";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../appstore/constants";
import { removeUser } from "../appstore/userslice";
import { removeFeed } from "../appstore/feeduserslice";

const Nav = ()=>{
  const user=useSelector((Store)=>Store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleclick=async()=>{
   
    // alert("hi")
    try{
    await axios.post(BASE_URL + "/logout",{},{
      withCredentials:true
    })
    dispatch(removeUser());
    dispatch(removeFeed());
    navigate("/login")

  }
  catch(e){

    console.log(e)
  }
}
  // console.log(user)
return(
 <div className="navbar bg-base-300 ">
  <div className="flex-1">
    <Link to="/feed" className="btn btn-ghost text-xl">Devtinder</Link>
  </div>
  {user &&(
   
  <div className="flex gap-2">
 <div className="mx-8"><p>Welcome {user.firstname}</p></div>
   
    <div className="dropdown dropdown-end ">
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user photo"
            src={user.photourl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between" >
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/connectioned">Connections</Link></li>
        <li><Link to="/requests">Requests</Link></li>
        <li><a onClick={handleclick}>Logout</a></li>
      </ul>
    </div>
  </div>
  )}
</div>

);
}

export default Nav;