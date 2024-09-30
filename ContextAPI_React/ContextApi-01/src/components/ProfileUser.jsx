import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function ProfileUser() {
    const {User}=useContext(UserContext)
    if(!User) return <div>Pleace Login</div>
  return (
    <div>
         Welcome {User.UserName}
    </div>
  )
}

export default ProfileUser
