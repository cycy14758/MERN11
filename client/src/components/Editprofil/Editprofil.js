import React from 'react'

function Editprofil() {
  return (
    <div>
    <h2>Edit Profile</h2>
    <form >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          
         
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          name="bio"
        
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
  )
}

export default Editprofil