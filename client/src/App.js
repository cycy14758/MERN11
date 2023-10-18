import logo from './logo.svg';
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

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
     dispatch(getAllProducts())
 
  }, [])
    const products=useSelector(state=>state.products)
    console.log(products);
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/editprofile' element={<Editprofil/>}/>
      <Route path='/editproduct' element={<Editproduct/>}/>
      <Route path='/Userlist' element={<Userlist/>}/>
    </Routes>
    </div>
  );
}

export default App;
