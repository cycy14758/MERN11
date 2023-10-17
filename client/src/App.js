import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes ,Route} from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/Register/Register';
import Profil from './components/Profil/Profil';
import Addproduct from './components/Addproduct/Addproduct';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
