import React, { useContext } from 'react';
import ComponentC from '../components/ComponentC';
import { AgeContext } from '../App';

function ComponetB() {
    const age= useContext(AgeContext)
  return (
    <div>
      <ComponentC/>
      {/* // we can get data any where which is passed in App componets */}
      <p>{age}</p>
    </div>
  );
}

export default ComponetB;
