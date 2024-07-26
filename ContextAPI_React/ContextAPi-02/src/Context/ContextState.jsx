import React, { useState } from "react";
import BuildContext from "./BuildContext";

const ContextState=(props)=>{
    const BuidState={
        Name:"Anurag Kumar",
        Age:23
    }

    const [State,setState]=useState(BuidState)
    const UpdateState=()=>{
        
        setTimeout(()=>{
            setState({
                Name:"Priti Singh",
                Age:35
            })
        },3000)
    }
    return(
        <BuildContext.Provider value={{State,UpdateState}}>
          { props.children}
        </BuildContext.Provider>
    )
}
export default ContextState