import React from 'react';
import Comp2 from './Comp2';



function Comp1(props) {
  const { objData } = props;
 console.log(objData)
  return (
    <div>
      <h1>{props.vlaue}, My Name is Component-1</h1>
      
      <Comp2 data={props.vlaue} getdata={objData}/>
    </div>
  );
}

export default Comp1;
