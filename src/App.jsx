import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Body from '../components/Body'
import Login from '../components/login';
import Profile from '../components/profile';
import { Provider } from 'react-redux';
import Store from '../appstore/store';
import Feed from '../components/feed';
import Connectioned from '../components/connectioned';
import Requestsusers from '../components/requests';
// import Connections from '../components/connectioned';


function App() {

  return (
    <>
    <Provider store={Store}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />} >
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/connectioned" element={<Connectioned />} />
      <Route path="/requests" element={<Requestsusers />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App
