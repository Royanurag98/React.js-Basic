import React from 'react'
import { UserContext } from './UserContext'
import { useState } from 'react'

function UserContextProvider(props) {
    const [User, setUser]=useState(null)
  return (
  <UserContext.Provider value={{User, setUser}}>
    {props.children}
  </UserContext.Provider>
  )
}

export default UserContextProvider
