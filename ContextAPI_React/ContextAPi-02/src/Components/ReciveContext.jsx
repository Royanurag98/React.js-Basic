import React, { useContext, useEffect } from 'react';
import BuildContext from '../Context/BuildContext';



function ReciveContext() {
    const ReciveState=useContext(BuildContext)

    useEffect(()=>{
        ReciveState.UpdateState()
    },[])
  return (
    <div>
      <h1>Hello, My Name Is {ReciveState.State.Name}</h1>
      <h2>And I Am {ReciveState.State.Age} Year old</h2>
    </div>
  );
}

export default ReciveContext;
