import React from 'react';
import './App.css'


/*How to Access and Use Props in React
The Child component receives props as a function parameter which is pass through the parents components as arguments .
We know that props recive data in an object formate which is pased through the parents components so if you want to use 
props data any where in you componets we have to access like a obje data. like {props.Name}
*/
function SimpleProps(props) {
    return (
        <>
        <div className='main-contener'>
            <div className='user'>
                 <h1>Simple-Data</h1>
                 <img src={props.Img} alt="" />
                 <p>Age:{props.Age}</p>
                 <p>Name:{props.Name}</p>           
                <p>Address:{props.Address}</p>
            </div>

            <div className='user'>
                <h1>Object-Data</h1>
                <img src={props.myObject.Img1} alt="User" />
               <p>Name: {props.myObject.Name1}</p>
               <p>Age: {props.myObject.Age1}</p>
               <p>Address: {props.myObject.Address1}</p>
            </div>
        </div >

        </>
    );
}

export default SimpleProps;
