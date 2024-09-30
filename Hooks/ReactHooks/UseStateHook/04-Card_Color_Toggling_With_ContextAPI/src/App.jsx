import React from 'react'
import ArrayDataForCards from './Component/ArrayDataForCards.jsx'
import ColorContextProvider from './Context/ColorContextProvider.jsx'

function App() { 
  return (
   <>
   <ColorContextProvider>
   <ArrayDataForCards/>
   </ColorContextProvider>
 
   </>
  )
}

export default App
