import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function UsiGenerator(key) {
 const [convert,setConvert]=useState()

    function Transform(){
        console.log("btn clicked")
        let length=setConvert.length;

        let convertCase=convert.toLowerCase();
        let str=convertCase.split(" ").join("");
        
    
        setConvert(`${str}@${length * Math.floor(Math.random() * 100)}`)
    }
    function handleonChange(){
        setConvert(event.target.value);
    }
  return (
    <div className='container'>
    
        <h1 className='heading' style={{color:"yellow"}}> Create User Name</h1>
        <div className='box2'>
          <h1 className='txt'>User Name Generator</h1>
          <input type="text"  className='input' value={convert} onChange={handleonChange} placeholder='Enter your text'/>  
          <button className='btn8 ' onClick={Transform} >Create User Name</button>  
        </div>
     
        </div>
     
  );
}

export default UsiGenerator;
