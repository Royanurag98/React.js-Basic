import { useState } from 'react'
import { ThemContext } from './Context/ThemContext'

import './App.css'
import { useContext } from 'react'

function App() {
const {setThem}=useContext(ThemContext)

setThem(()=>{
  if( sessionStorage.getItem('Them')=='dark')
    document.documentElement.classList.toggle('dark')
 
})


const COlorChange=()=>{
  if(sessionStorage.getItem('Them')=='light' ){
    document.documentElement.classList.remove('dark')
    sessionStorage.setItem('light')
  }
}
  return (
    <>
     <button onClick={COlorChange}>light/dark</button>
    </>
  )
}

export default App
