import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
function CounterCount(key) {
    const [Count, setCount]=useState(0)
   
    const incCount=(prv)=>{
       if(Count<30){
        setCount((prev)=>prev=prev+1)
        setCount((prev)=>prev=prev+1)
        setCount((prev)=>prev=prev+1)  
       }
       else
       alert("numbe can not inc")
         
    } 
   
    const decCount=()=>{
      if(Count>0){
           setCount((prev)=>prev=prev-1)
         setCount((prev)=>prev=prev-1)
         setCount((prev)=>prev=prev-1)
      }
       
    else alert('Number can not dec')
       
    }

  return (
    
   <>
   <div style={{color: "red", fontSize:"30px", fontWeight:800}} >Number Counting Project Using useState Hooks......................</div>
    <div className="card" style={{ height:'20rem', color:'white' }}>
         <div className='inputBox'>Count: {Count}</div>
        <div classn="card-body">
            <p classn="text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
            <button  className='btn btn-primary'onClick={incCount}>Increase</button>
            <button  className='btn btn-primary 'onClick={decCount}> Descrease</button>
        </div>
    </div>
    </>
   
  );
}

export default CounterCount;
