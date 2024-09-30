import React, { useState } from 'react'

function ToggleText() {
    const [ToggleText, setToggleText]=useState("Hello my name is Anurag Roy")
    const [ToggleBgColor, setToggleBgColor]=useState("gray")

    const ToggleTextState=()=>{
      
        let x=ToggleText;
         ( x==="Hello my name is Anurag Roy")? setToggleText("How can i help you"):setToggleText("Hello my name is Anurag Roy");
 

        let color=ToggleBgColor;
        color==="gray"?setToggleBgColor("yellow"):setToggleBgColor("gray");

    }
  return (
    <div>
      <div className=' bg-gray-400 p-5  ' >
    <div className='bg-black text-center text-[15px] font-bold text-white p-2'>  Toggle the text and background Color</div> 
    <div className=" w-full flex justify-center "> 
      <div className="  w-[800px] h-[180px]  text-center pt-5 mt-3 rounded-xl  " style={{backgroundColor:ToggleBgColor}} > 
          <p className=" text-green-600 bg-black text-[15px] p-2 font-bold  "> I think you gonna click on button and want to see how togle text and background color </p>        
          <p className=" text-black text-[25px] font-bold ">{ToggleText} </p> 
          <button className=" btn bg-blue-700 text-white text-[20px] font-bold px-3 py-1 hover:bg-blue-400 active:bg-blue-600 mt-8 "
           onClick={ToggleTextState}  >Click Me</button>   
      </div>
    </div>
</div>
    </div>
  )
}

export default ToggleText
