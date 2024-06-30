import React, { createContext } from 'react'
import './App.css'
import Comp3 from './components/Comp3'

export const nameContext=createContext()
export const AgeContext=createContext()
function App() {
  

  return (
    <>
    <nameContext.Provider value={"Anurag Roy"}>
      <AgeContext.Provider value={23}>
      <Comp3/>
      </AgeContext.Provider>
    </nameContext.Provider>
  
    </>
  )
}

export default App
