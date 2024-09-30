import React, { useContext } from 'react';
import { IdentityContext, AgeContext } from '../App';

function Comp3() {
// we can store data in a indevisual variable or you can use array destructring
    const [Name , Age , Education, University]=useContext(IdentityContext)
    // const Age=useContext(AgeContext)
  console.log(IdentityContext)

  return (
    <div>
       <h1>Component : 3</h1>
       <h3>Here we use nameContext and AgeContext which is create in App component</h3>
         <h1>`My name is {Name}`</h1>
         <h1>` I am  {Age} year old`</h1>


    </div>
  );
}

export default Comp3;
