import { useState } from 'react'
import './App.css'
import SessionStorage from './Components/SessionStorage'


function App() {
  const [count, setCount] = useState(0)
// Store the data in session storage
  sessionStorage.setItem("Name", "Anurag Roy" )
  sessionStorage.setItem("Age", "23")

// Get the data from session storage
  sessionStorage.getItem('Name')
// Remove the data from session storage
 sessionStorage.removeItem('Name')

// Clear the data in session storage
 sessionStorage.clear()

  return (
    <>
    <SessionStorage/>
    </>
  )
}

export default App
