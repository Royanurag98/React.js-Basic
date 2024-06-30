import React from 'react';
import '../App.css'

function Comp3(props) {


const { setData} = props;
console.log(setData)
const {Img, Place, State}=setData


  return (
    <div>
       <h1>{props.dtata1},My Name is Component-3</h1>
       <div className='user'>
        <img src={Img} alt="" />
        <p>{Place}</p>
        <p>{State}</p>
       </div>
    </div>
  );
}


export default Comp3;
