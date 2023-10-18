import React from 'react'

function Editproduct() {
  return (
    <div>
    <h2>Edit product</h2>
    <form >
      <div>
        <label htmlFor="username">title:</label>
        <input
          type="text"
          
         
        />
      </div>
      <div>
        <label htmlFor="email">description:</label>
        <input
          type="email"
          
        />
      </div>
      <div>
        <label htmlFor="bio">price:</label>
        <textarea
          name="bio"
        
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
  )
}

export default Editproduct