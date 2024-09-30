import React, { createContext } from 'react'
import './App.css'
import LoginUseer from './components/LoginUseer'
import ProfileUser from './components/ProfileUser'


export const nameContext=createContext()
export const ageContext=createContext()
function App() {
  

  return (
    <>
    <LoginUseer/>
    <ProfileUser/>
  
    </>
  )
}

export default App
