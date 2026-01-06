import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import Nav from './Navbar'
import Footer from './footer'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../appstore/userslice';
import {BASE_URL} from '../appstore/constants'
import { useEffect } from 'react';
const Body=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userslice=useSelector((store)=>store.user)
    const fetchuser=async()=>{
        // console.log(userslice)

        try {

            if(userslice) return ;

            // console.log(hi)

            const res= await   axios.get(BASE_URL + "/userinfo",{
                withCredentials:true
             })
            //  console.log("hi",res)
            dispatch(addUser(res.data))
             
        } catch (error) {

            if(error.status=401)navigate("/login");
            // console.error(error)
        }
    
           
}
 useEffect(()=>{
                fetchuser();
            },[])
    return(
        <div>
            <Nav />
             <Outlet />
             <Footer />
        </div>
    );
}                      

export default Body;