import {createContext} from 'react'
import '../App.css'
import Comp2 from '../Components/Comp2'
// import App from '../App'

export const nameContext=createContext()
export const AgeContext=createContext()

function Comp3() {

  return (
   <>
    <nameContext.Provider value={"Anurag roy"}>
      <AgeContext.Provider value={24}>
     <Comp2/>
       </AgeContext.Provider>
   </nameContext.Provider>

 
   </>
  );
}


export default Comp3;
