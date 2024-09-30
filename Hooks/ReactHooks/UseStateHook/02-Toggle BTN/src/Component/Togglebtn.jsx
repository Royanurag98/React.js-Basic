import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Togglebtn() {

    const [Color, setColor]=useState("gray");

    const BgColorToggling=()=>{
        let prevColor=Color;
        let c=prevColor==="gray"?"orange":"gray";
       sessionStorage.setItem("bgColor", c)
       setColor(c)
    
    }
   
    useEffect(()=>{
              let g=sessionStorage.getItem('bgColor')
              if(g) setColor(g)
            },[Color])

  return (
    <>
      <div className='bg-black text-white p-2 text-center font-semibold'>Toggle button for changing the color of container</div>
      <div className=' w-[97%] h-[500px] bg-gray-500 m-4 rounded-2xl ' style={{backgroundColor:Color}}></div>
      <button className="  bg-blue-700 text-white text-[15px] font-bold px-3 py-3 hover:bg-blue-400 active:bg-blue-600
       ml-[630px] rounded-xl " onClick={BgColorToggling}>TOGGLE COLOR</button> 

    </>
  )
}

export default Togglebtn
