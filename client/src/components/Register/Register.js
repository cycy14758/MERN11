import React from 'react'
import "./Register.css" 

function Register() {
  return (
    <div>
    <h2>Register</h2>
    <form >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          
        />
        <label htmlFor="passw "> photo</label>
        <input
          type="file"/>

          </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
  )
}

export default Register