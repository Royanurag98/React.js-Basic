import React from 'react';
// PropTypes library is just use to check given props data belongs to set PropsTypes or not.
import PropTypes from 'prop-types' 

function PropsType(props) {
  return (
    <div>
    <h1>Hellow my name is {props.Name} </h1>
    <p>{props.children}</p>
    <h1>and i am {props.Age}year old </h1>
    <h1>and i am from {props.Address} </h1>
    </div>
  );
}
// We can also set the type of props means whatever we pass the data as a props this data belongs to particular type or not 
PropsType.propTypes = {
    Name: PropsType.string
  }


// Specifies the default values for props:
PropTypes.defaultProps = {
    name: 'Anurag'
  };
export default PropsType;

