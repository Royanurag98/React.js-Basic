import React, { useContext } from 'react';
import { AgeContext, nameContext } from '../App';

function ComponentC() {
   const myName= useContext(nameContext)
   const myAge=useContext(AgeContext)
  return (
    <div>

      <h1>hello i am componet C</h1>
      <h1>My name is {myName}</h1>
      <h1>And i am {myAge} year old</h1>
    </div>
  );
}

export default ComponentC;
