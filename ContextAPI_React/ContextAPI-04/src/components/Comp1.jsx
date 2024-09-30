import React, { useContext } from 'react';

import {AgeContext, nameContext} from '../App'
function Comp1() {
  const age=useContext(AgeContext)
  const name=useContext(nameContext)
  return (
    <div>
      <h1>Component : 1</h1>
        <p>Hello ! my name is {name} </p>
        <h1>And i am {age} year old</h1>
    </div>
  );
}

export default Comp1;
