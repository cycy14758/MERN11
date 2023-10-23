
import './App.css';
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes ,Route} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/Register/Register';
import Profil from './components/Profil/Profil';
import Addproduct from './components/Addproduct/Addproduct';
import Editprofil from './components/Editprofil/Editprofil';
import Editproduct from './components/Editproduct/Editproduct';
import Userlist from './components/Userlist/userlist';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from './Redux/Actions/actionProduct';
import UserRoute from './components/privateRoute/UserRoute';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
     dispatch(getAllProducts())
 
  }, [])
    const Products=useSelector(state=>state.productReducer.products)
    const err=useSelector(state=>state.userReducer.errors)
    console.log(err);
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/addproduct' element={<UserRoute> <Addproduct/></UserRoute> }/>
      <Route path='/editprofile' element={<Editprofil/>}/>
      <Route path='/editproduct' element={<Editproduct/>}/>
      <Route path='/Userlist' element={<Userlist/>}/>
    </Routes>
    </div>
  );
}

export default App;
