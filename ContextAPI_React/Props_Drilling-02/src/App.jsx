import React from 'react'
import Comp1 from './Components/Comp1'

//If you want to pass normal data or object or array or state without Context , we will need to pass all this thing as a props
// through each nested components. This is called props drilling.
const obj={
  Img:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  Place:"patna",
  State:"Bihar"
}
  
function App() {
  
  return (
    <>
   <Comp1 vlaue="Hello"objData={obj}  />

    
    </>
  )
}

export default App
