import React, { useContext } from 'react';
import App from '../App'


import {nameContext} from '../Components/Comp3'

function Comp1() {
  const name=useContext(nameContext)
 
  return (
    <>
   <h2>{name}</h2>
   <App/>
    </>
  );
}

export default Comp1;
