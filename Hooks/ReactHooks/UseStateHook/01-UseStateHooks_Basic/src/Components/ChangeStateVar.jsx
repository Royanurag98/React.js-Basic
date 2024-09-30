import React,{useState} from 'react'

function ChangeStateVar() {
const [Text, setText]=useState("HII I Am hear Nice to meet you bady")
const [BgColor, setBgColor]=useState('white')

const VisibleContent=()=>{
   setText("Hello!  how can i help you because you  clicked Double click button😁💕")
   setBgColor('yellow')
  }

  return (
<div className=' bg-gray-400 p-5  ' >
    
    <div className='bg-black text-center text-[15] font-bold text-white p-2'>  If click on Button change the state of variable and also state of background Color using UseState Hooks</div> 
    <div className=" w-full flex justify-center "> 
      <div className="box bg-gray-300  w-[700px] h-[150px]  text-center pt-5 mt-3 rounded-xl " style={{backgroundColor:BgColor}}> 
          <p className=" text-green-600 bg-black text-[15px] p-2 font-bold   "> I think you click on button and try to find Someone </p>        
          <p className=" text-black text-[15px] font-bold ">{Text} </p> 
          <button className=" btn bg-blue-700 text-white text-[20px] font-bold px-3 py-1 hover:bg-blue-400 active:bg-blue-600 mt-8 "
           onClick={VisibleContent}  >Click Me</button>   
      </div>
    </div>
</div>
  )
}

export default ChangeStateVar
