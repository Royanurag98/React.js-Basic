import React, { useContext} from 'react'
// import {nameContext} from './Components/Comp3'

import { AgeContext } from './Components/Comp3'



  
function App() {

  const Age=useContext(AgeContext)
  
  return (
    <>
 
  <h1> Age value access to Comp3 components ==  {Age}</h1>
   
    
    </>
  )
}

export default App
