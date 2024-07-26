import { useState } from 'react'

import './App.css'
import SimpleProps from './SimpleProps'
import PropsDestructring from './PropsDestructring';

function App() {
  const [count, setCount] = useState(0)
// object
  const myObj= {
    Img1:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    Name1:"Aman Kumar",
    Age1:"24",
    Address1:"Bihar , Bihpur, Bhagalpur"
 };

// Array
const array=[1,2,3,4,5]

  return (
    <>
    <SimpleProps
    /* Here we can pass simple data as a props through userDetails components */
    Img="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    Name="Anurag Roy"
    Age="23"
    Address="Bihar , Bihpur, Bhagalpur"
    /* We can also pass the object and array as props */
    myObject={myObj}
    myArray={array}

    />


    <PropsDestructring

     /* Here we can pass simple data as a props through userDetails components */
     Imgages="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
     Name="Anurag Roy"
     Age="23"
     Address="Bihar , Bihpur, Bhagalpur"
     /* We can also pass the object and array as props */
     myObject={myObj}
     myArray={array}
    
    />
   
     
    
    
    </>
  )
}

export default App
