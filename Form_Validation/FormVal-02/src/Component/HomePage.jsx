import React,{useEffect, useState} from 'react'


function HomePage() {
 

  // We can rander login page with button
  const [isVis,setVis]=useState(false)
    const loginPage=()=>{
        setVis(true)   
    }
   
  // We can rander login page on the compound did mount
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setVis(true)
    //     },2000)
    //  },[])
  
  return (
    <>
    <div>
      <div className='w-full bg-black p-3'>
        <button className='text-white font-bold ' onClick={loginPage}>Login</button> 
      </div>
      <div className='h-[100vh] flex justify-center items-center contain-none mt-5'>
        
         {/* {isVis&&<SignIn/>} */}
    
      </div>
 
      </div>
    </>
  )
}

export default HomePage
