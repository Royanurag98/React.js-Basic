import React,{useState} from 'react'
import Signin from './Signin'

function HomePage() {

    const [isVis,setVis]=useState(false)
    const loginPage=()=>{
        setVis(true)   
    }
  return (
    <>
       <div>
      <div className='w-full bg-black p-3'>
        <button className='text-white font-bold ' onClick={loginPage}>Login</button> 
      </div>
      <div className='h-[100vh] flex justify-center items-center contain-none mt-5'>
        
         {isVis&&<Signin/>}
    
      </div>
 
      </div>
    </>
  )
}

export default HomePage
