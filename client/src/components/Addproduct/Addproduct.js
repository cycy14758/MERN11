import React from 'react'
import "./Addproduct.css" 

function Addproduct() {
  return (
  
<div className="container">
  <h2  className="addproduct"  >Addproduct</h2>
  <form action="login_process.php" method="post">
    <label htmlFor="username">title</label>
    <input type="text" id="username" name="username" required="" />
    <label htmlFor="password">description </label>
    <input   type="text"   id="password" name="password" required="" />
    <label htmlFor="password">price</label>
    <input type="text" id="password" name="password" required="" />
    <label htmlFor="number">price</label>
    <input type="file" id="password" name="password" required="" />
    <button type="submit">save</button>
  </form>
</div>
  )
}

export default Addproduct