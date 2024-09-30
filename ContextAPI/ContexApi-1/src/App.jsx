import React from 'react'
import './App.css'
import { createContext } from 'react'
import CompC from './Components/CompC'



export const nameContext=createContext()
export const ageContext=createContext()
function App() {
 

  return (
    <>
     <nameContext.Provider value={"Anurag Roy"}>
      <ageContext.Provider value={"24"}>
        <CompC/>
      </ageContext.Provider>
     </nameContext.Provider>
    </>
  )
}

export default App
