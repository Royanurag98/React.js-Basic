import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext'

function LoginUseer() {
    const [UserName, setUserName]=useState("")
    const [Password, setPassWord]=useState("")

    const {setUser}=useContext(UserContext)
  const onsubmit=(e)=>{
      e.preventDefault()
     setUser({UserName,Password})
  }

  return (
    <div style={{background:"gray", width:"300px", height:"250px", lineHeight:"30px" , color:"Yellow"}}>
        <h1>Login</h1>
        User Name: <input type="text"  placeholder='Enter User Name' value={UserName} onChange={(e)=>{ setUserName( e.target.value)}}  /><br />
        Password : <input type="password" placeholder='Enter Password' value={Password} onChange={(e)=>{ setPassWord( e.target.value)}}  /> <br />
        <button onClick={onsubmit}>Submit</button>
    </div>
  )
}

export default LoginUseer
