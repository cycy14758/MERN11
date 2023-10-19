import React, { useState } from 'react'
import "./login.css" 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Actions/actionUser';

function Login() {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  
  const navigate = useNavigate();
  const Disptach=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()


    
    const data = new FormData();
    
     data.append("password",password)
     data.append("email", email)
  
     Disptach(login(data, navigate))
    
  }
  
  return (
  
<div className="container">
  <h2>Login</h2>
  <form action="login_process.php" method="post">
    <label htmlFor="email">email</label>
    <input type="text" onChange={(e) =>setemail(e.target.value)} />
    <label htmlFor="password">Password:</label>
    <input type="password"     onChange={(e) =>setpassword(e.target.value)}  />
    <button type="submit"   onClick={handleSubmit} >Login</button>
  </form>
</div>
  )
}

export default Login