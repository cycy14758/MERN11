import React from 'react'
import "./Profil.css" 
import Navbar from '../navbar/navbar'
function Profil() {
  return (
    <>
    <Navbar/>
    
    <div className="profile">
    <img
      src="profile-picture.jpg"
      alt="Profile Picture"
      className="profile-picture"
    />
    
    <p>@</p>
    <p></p>
    <p>Location: </p>
    <p>Followers: </p>
    <p>Following: </p>
  </div>
  </>
  )
}

export default Profil