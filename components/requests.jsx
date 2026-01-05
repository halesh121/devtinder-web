import axios from "axios";
import { BASE_URL } from "../appstore/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addrequestuser,removerequestuser } from "../appstore/requesteduser";

const Requestsusers = () => {    

const dispatch=useDispatch();
const requestuserslice=useSelector((Store)=>Store.requetseduser);
   
    const userreq=async ()=>{
         try{

        const reqs=await axios.get(BASE_URL+"/connect/intersteduserrequests/",{
            withCredentials: true,
        });
        console.log("requested users",reqs.datar);
        dispatch(addrequestuser(reqs.data));
        }
    
    catch(error){
        console.log(error); 
    }
        // console.log("requested users",req);
    }

    useEffect(()=>{
        userreq();
    },[])
      const  userinstersted=async(userid,status)=>{
      try {
         await axios.post(BASE_URL+"/connect/review/"+status+"/"+userid+"",{},{withCredentials:true})
          dispatch(removerequestuser(userid));
      } catch (error) {
        console.log(error)
      }
       
      }
    // console.log("requested users slice",requestuserslice);
       if (!requestuserslice) return null;
  if (requestuserslice.length === 0) return <h1>no user found</h1>;

  const displayConnections = requestuserslice.slice(0, 5);
    console.log("requested users slice",requestuserslice);
    return (  
      <div>
    <div className="flex justify-center items-center m-5 p-5">
                 <h4 className="white">Requested Users</h4>
            </div>

     <div className="flex flex-wrap justify-center gap-4 mt-4">
    {displayConnections.map((connections) => {
      
      // console.log("connections from user",connections.fromuser);
          const { _id, firstname, lastname, about, photourl, skills } = connections.fromuser;
          return (
            <div key={_id} className="card w-60 bg-base-300 shadow-sm p-3">
              <div className="card-body items-center text-center">         
              <figure>
                  <img className="rounded-full w-30 h-30"
                    src={photourl} alt="PHOTO" />
                </figure>
                <h2 className=" flex-grow-0">{firstname+" "+lastname}</h2>
                <p className=" flex-grow-0">{about}</p>
                <p className="py-auto flex-grow-0">{skills}</p>
                <div className="card-actions  mt-4">
                  <button className="btn btn-secondary" value="reject" onClick={(e) => userinstersted(connections._id,e.target.value)}>Reject</button>
                  <button className="btn btn-primary w-20" value="accepted" onClick={(e) => userinstersted(connections._id,e.target.value)}>Accecepted</button>
                </div>
  </div>
</div>
          )
        })}
  </div>
  </div>

    );
}   

export default Requestsusers;