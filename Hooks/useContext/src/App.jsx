import React, { createContext } from 'react'
import ComponentA from './components/ComponetA'
import './App.css'

// if i want to send data from App components  to components C directly so we use useContext

// create context
export const nameContext = createContext()
export const AgeContext=createContext()
function App() {


  return (
    <>
      <nameContext.Provider value={"Anurag"}>
        <AgeContext.Provider value={23}>
        <ComponentA />
        </AgeContext.Provider>
      </nameContext.Provider>

    </>
  )
}

export default App
