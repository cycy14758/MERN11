import React from 'react'
import "./login.css" 

function Login() {
  return (
  
<div className="container">
  <h2>Login</h2>
  <form action="login_process.php" method="post">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" required="" />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required="" />
    <button type="submit">Login</button>
  </form>
</div>
  )
}

export default Login