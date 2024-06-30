import React, { useContext } from 'react';
import { nameContext, AgeContext } from '../App';

function Comp3() {
// we can store data in a indevisual variable or you can use array destructring
    // const Name=useContext(nameContext)
    // const Age=useContext(AgeContext)

// Array destructring
    const [name, age]=useContext(nameContext, AgeContext)
  return (
    <div>
       <h1>Component : 3</h1>
       <h3>Here we use nameContext and AgeContext which is create in App component</h3>
         <h1>`My name is {name}`</h1>
         <h1>` I am  {age} year old`</h1>


    </div>
  );
}

export default Comp3;
