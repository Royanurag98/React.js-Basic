import React, { useState } from 'react';
import './style.css'

function USArray() {

    const [number, setNumber]=useState([2,4,6,8,9,20])
    const changeArray=()=>{
        // setNumber([20,40,35,60]) Update all the array
        setNumber(()=>{
            return [
                ...number, Math.floor(Math.random()*100)
        ]
        })
    }
     
  return (
    <>
    <div className='container'>
       <ul>
        {number.map((n,i)=><li key={i}>{n}</li>)}
       </ul>
       <button onClick={changeArray}>Update Array</button>
    </div>
   
    </>
  );
}

export default USArray;
