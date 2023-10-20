import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Actions/actionUser';

function Login() {


  const navigate = useNavigate();

  const disptach=useDispatch()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit = (e) => {
  e.preventDefault()
    disptach(login({email,password}, navigate))
console.log("object");
      };

  return (
    <div className="container">
      <h2>Login</h2>
      <form  onSubmit={handleSubmit}  >
        <label htmlFor="email">Email</label>
        <input type="text"  onChange={(e) => setemail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password"  onChange={(e) => setpassword(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
