import React, { useState } from 'react'


function App() { 

  const [ObjecData, setObjectData]=useState(
    {
      Name:"Anurag Roy",
      Age:25,
      College:"LPU",
      Course:"MCA"

    })
const SetobjData=()=>{
    // We can not update directly any single data of object if do that in that case our othr object data is remove.
    // So we use sprade operator to render prev data with updated data
  setObjectData( {...ObjecData, Name:"Aman Kumar"})
}

 
  return (
   <>
   <div className='bg-gray-800 text-white font-bold size-[200px] ml-12 mt-10 p-5'>
   <h1> Name:{ObjecData.Name}</h1>
   <h1> Age:{ObjecData.Age}</h1>
   <h1> College:{ObjecData.College}</h1>
   <h1> Course:{ObjecData.Course}</h1>
   <button className='bg-blue-600 text-black font-bold p-2'onClick={SetobjData}>Click</button>
   </div>
   </>
  )
}

export default App
