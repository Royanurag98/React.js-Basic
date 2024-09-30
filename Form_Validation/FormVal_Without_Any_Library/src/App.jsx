import { useState } from 'react'

import './App.css'
// import LoginForm from './Components/LoginForm'
import SigninForm from './Components/SigninForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SigninForm/>
     {/* <LoginForm/> */}
    </>
  )
}

export default App
