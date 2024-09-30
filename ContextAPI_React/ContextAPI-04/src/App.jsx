import React, { createContext } from 'react'
import './App.css'
import Comp3 from './components/Comp3'
export const IdentityContext = createContext();
export const AgeContext=createContext()

function App() {
  
const identityState={
  Name:"Anurag roy",
  Age:'23',
  Education:"MCA",
  University:"LPU"
}
  return (
    <>
    <IdentityContext.Provider value={identityState}>
      <AgeContext.Provider value='23'>
        <Comp3/>
      </AgeContext.Provider>
      </IdentityContext.Provider>
  
    </>
  )
}

export default App
