import { useState,useContext } from 'react';
import { products } from './JasonData';
import Cards from './Cards';
import { ColorContext } from '../Context/ColorContext';

function ArrayDataForCards() {
  const { Color, ShareBtnComponent } = useContext(ColorContext);

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
      <ShareBtnComponent/>  
    
    </div>

    <div className=' w-full  bg-gray-500  flex flex-wrap gap-8 justify-center p-5' style={{backgroundColor:Color}}>
  
      
   { Card.map((curEle)=>{
  
        return (
          
          <Cards  key={curEle.id} {...curEle}   />
     
  )})}

</div>  
    
    

    </>
  )
}

export default ArrayDataForCards
