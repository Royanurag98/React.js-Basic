import React from 'react';
import Comp3 from './Comp3';

function Comp2(props) {
  const { getdata} = props;
  console.log(getdata)
  return (
    <div>
       <h1>{props.data}, My Name is Component-2</h1>
       <Comp3  dtata1={props.data} setData={getdata} />
    </div>
  );
}

export default Comp2;
