import React, { useContext } from 'react';
import { nameContext, ageContext } from '../App';

function Comp3() {
  const Name=useContext(nameContext)
  const Age=useContext(ageContext)
  return (
    <div>
      <h1>Name={Name}</h1>
      <h2>Age={Age}</h2>
    </div>
  );
}

export default Comp3;
