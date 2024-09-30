import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
 
)
// import React, {useState} from 'react'

// function ChangeStateVar() {
//     const [Color, setColor] = useState("gray");
//     const [Text, setText] = useState("");
  
//     const VisibleContent = () => {
//       let x = (document.querySelector(".box").style.backgroundColor = "yellow");
//       setColor("black", x);
  
//       let Btn = document.querySelector(".btn");
//       Btn.innerText = "Double Click";
//     };
  
//     const VisibleText = (Text) => {
//      console.log(Text)
//     // let  z= "Hello!  how can i help you because you  clicked Double click button😁💕 "
//     //   setText(z);
//     };
  
//   return (
//     <div>
//        <div className=" w-full bg-black text-white text-[20px] font-bold p-3">
//         If click on Button change the state of variable and also state of
//         background Color using UseState Hooks</div>
//       <div className="box">
//         <p className="text-white text-[20px] font-bold  " style={{ color: Color }}>
//           I think you click on button and try to find Someone </p>
//         <p className="text-white text-[15px] font-bold " style={{ color: Color }}>{Text} </p>
//       </div>
//       <button className=" btn bg-blue-700 text-white text-[20px] font-bold px-3 py-1 hover:bg-blue-400 active:bg-blue-600 mt-8 "
//         onClick={VisibleContent} onDoubleClick={VisibleText} >Click Me</button>


//     </div>
//   )
// }

// export default ChangeStateVar






// import React from 'react'

// function ToggleText() {
//     const [Toggle, setToggle]=useState("Hello my name is Anurag Kumar")

//     let [Colour, setColour]=useState("yellow")
//     useEffect(()=>{
//       let g=sessionStorage.getItem('Color')
//     if(g)setColour(g)
//     },[Colour])
    
//     const textToggle=()=>{
//       let C = Colour
//       const clr=(C==="yellow") ?"red":"yellow"
//       sessionStorage.setItem("Color", clr );
//       setColour(clr)
    
  
  
  
//       let val=Toggle
//       if(val==="Hello my name is Anurag Kumar"){
//         setToggle("How can i help you")
//       }else{
//         setToggle("Hello my name is Anurag Kumar")
//       }
//     }
//   return (
//     <div>
//       <div className=" w-full  bg-black text-white text-[20px] font-bold p-3 mt-5">
//       </div>
//        <div className=" Container w-full h-[200px] bg-black"  style={{ backgroundColor: Colour }}>
//             <h1 className="text-black text-[20px] font-bold " >{Toggle}</h1>
//             <button className="bg-blue-700 text-white text-[20px] font-bold px-3 py-1 hover:bg-blue-400 active:bg-blue-600 mt-8" onClick={textToggle}>Click</button>
//        </div>
//     </div>
//   )
// }

// export default ToggleText
