import React from 'react'
import { useState,useEffect } from 'react';

import { products } from './JasonData';
import Cards from './Cards';

function ArrayDataForCards() {

    const [Color, setColor]=useState("white");
    const [CardColor, setCardColor]=useState("black");

    const BgColorToggling=(action)=>{
      
        let prevColor=Color;
        let c=prevColor==="white"?"black":"white";
       sessionStorage.setItem("bgColor", c)
       setColor(c)
      
       let prev=CardColor;
       let cc=prev==="black"?"white":"black";
       sessionStorage.setItem("ccColor", cc)
       setCardColor(cc)
    
    }
   
    useEffect(()=>{
              let g=sessionStorage.getItem('bgColor')
              let c=sessionStorage.getItem('ccColor')
              if(g) setColor(g)
              if(c) setCardColor(c)
            },[Color,CardColor])



  // Rander Card Data

  const [Card, setCard]=useState(products)


  return (
    <>
    <div className='bg-gray-300 text-blue-900 text-center font-bold flex justify-between p-3 '>
      <div className=' flex justify-center items-center'>
        <ul  className='flex space-x-3 '>
        <li className='hover:bg-blue-500 px-3 py-1 active:bg-blue-400 '>HOME</li>
        <li className='hover:bg-blue-500 px-3 py-1 active:bg-blue-400 '>ABOUT</li>
        <li className='hover:bg-blue-500 px-3 py-1 active:bg-blue-400 '>CONTECT</li>
        </ul>
      </div>
      <div>
        <button className="  bg-blue-700 text-white text-[15px] font-bold px-3 py-2 hover:bg-blue-400 active:bg-blue-600
       rounded-md  "onClick={BgColorToggling} >Light/Dark</button> 
      </div>
    </div>

    <div className=' w-full  bg-gray-500  flex flex-wrap gap-8 justify-center p-5' style={{backgroundColor:Color}}>
  
          
   { Card.map((curEle)=>{
  
        return (
          
          <Cards  key={curEle.id} {...curEle} value={CardColor}  />
     
  )})}

</div>  
    
    

    </>
  )
}

export default ArrayDataForCards
