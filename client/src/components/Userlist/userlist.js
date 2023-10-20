import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../../Redux/Actions/actionUser'
  
function Userlist() {
  const users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch( getusers())



  }, [])
  
  console.log(users);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>Email: {user.email}</p>
          </li>
      ))
        }
      </ul>
    </div>
  )
}

export default Userlist