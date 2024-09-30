import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export default function Profile() {

    const {User}=useContext(UserContext)

    if(!User){
        return <div>Plese Login</div>
    }
  return (
    <div>
      Welocome {User.UserName} 
    </div>
  )
}
