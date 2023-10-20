import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Navbar() {
  const token=localStorage.getItem("token")

  console.log(user);
console.log(token);
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
       <Link  to={`/`}> <button type="button" class="btn btn-warning">home</button></Link>
        </li>
        {!token?<li className="nav-item">
        <Link  to={`/Register`}> <button type="button" class="btn btn-warning">Register</button></Link>
        </li>:null}
       {token ? <li className="nav-item">
        <Link  to={"/Profil"}> <button type="button" className="btn btn-warning">Profil</button></Link>
        </li>:null}
       { !token ?<li className="nav-item">
          <Link to={"/login"}   > <button type="button" className="btn btn-warning">login</button></Link>
        </li>:null}
        <li className="nav-item">
          <Link to={"/Addproduct"}   > <button type="button" className="btn btn-warning">Add product</button></Link>
        </li>
        <li className="nav-item">
          <Link to={"/Editprofile"}   > <button type="button" className="btn btn-warning">edit profile</button></Link>
        </li>
        <li className="nav-item">
          <Link to={"/Editproduct"}   > <button type="button" className="btn btn-warning">edit product</button></Link>
        </li>
      { token&& <li className="nav-item">
          <Link to={"/Userlist"}   > <button type="button" className="btn btn-warning">Userlist</button></Link>
        </li>}
      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar