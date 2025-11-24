import { Outlet } from 'react-router-dom';
import Nav from './Navbar'
import Footer from './footer'
const Body=()=>{
    return(
        <div>
            <Nav />
             <Outlet />
             <Footer />
        </div>
    );
}

export default Body;