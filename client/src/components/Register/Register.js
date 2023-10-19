import React, { useState } from 'react'
import "./Register.css" 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/Actions/actionUser';

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState();
  
  const navigate = useNavigate();
  const Disptach=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hi");
    if(img==null) 
    {alert(" please add your photo") }
  
  
    const data = new FormData();
    
     data.append("password",password)
     data.append("email", email)
     data.append("name",name)
     data.append("file",img)
 
     Disptach(addUser(data, navigate))
    
  }
 
 
     


  return (
    <div>
    <h2>Register</h2>
    <form >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"    onChange={(e) => setname(e.target.value)}
          
        />
         <label htmlFor="email">email</label>
        <input
          type="text" onChange={(e) => setemail(e.target.value)}
          
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"  onChange={(e) => setpassword(e.target.value)}
          
        />
        <label htmlFor="passw "> photo</label>
        <input
          type="file"  onChange={(e) => setimg(e.target.files[0])}/>

          </div>
      <div>
        <button type="submit"  onClick={handleSubmit}   >Register</button>
      </div>
    </form>
  </div>
  )
}

export default Register