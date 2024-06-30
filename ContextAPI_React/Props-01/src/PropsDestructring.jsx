import React from 'react';
import './App.css'

/*if you want to use props data any where in you componets we have to access like a obje data. like {props.Name}
But you dont wanna access props data like object in your components we can Destructuring of Props */

/* Destructuring Props in React /////////////////////////////////////////////////////////////////////////////////

   We can also Destructure the props because we know that whatever we pass data
   as a props through parents components to child components props recive all data in a object formate 
   so we can easly destructure the props data*/
function PropsDestructring(props) { 
    // We can destructure props in two ways
    // we can store in a variable like
    // or we directly pass as parameters .
    const {Imgages, Name, Age , Address}=props
     // we can not directly distructure props data in different name of variable 
     //like const {myImg, myName, myAge, myAddress}=props
    // Suppose you want to distructure props data in differrent name of variable in that case we have to store object kye 
    // in a varabile what you want. we can do it
    //like const {myImg=Images, myName=Name, myAge=Age, myAddress=Address}=props


    // Suppose you pass object or array as a props how we can destructure.
    // Lets do it 
    const obj=props.myObject
    console.log(obj)
    const {Img1,Name1,Age1,Address1}=obj;


  
  return (
    <div>
       <div className='main-contener'>
            <div className='user'>
                 <h1>Simple-Data</h1>
                 <img src={Imgages} alt="" />
                 <p>Name:{Name}</p>    
                 <p>Age:{Age}</p>      
                <p>Address:{Address}</p>
            </div>

            <div className='user'>
                <h1>Object-Data</h1>
                <img src={Img1} alt="User" />
               <p>Name: {Name1}</p>
               <p>Age: {Age1}</p>
               <p>Address: {Address1}</p>
            </div>
        </div >
    </div>
  );
}

export default PropsDestructring;
