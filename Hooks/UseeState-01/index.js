import { createRoot } from "react-dom/client"
import CounterCount from "./componentsCount/CounterCount"
import CountCounter2 from "./componentsCount/CountCounter2"
import ToggleBtn from "./componentsToggle/ToggleBtn"
import Togglebtn2 from "./componentsToggle/Togglebtn2"
import UsiGenerator from "./UserName_Generator/UsiGenerator"
import FormData from "./getFormData/FormData"
import USObject from "./USObject"
import USArray from "./USArray"


const h1=<h1>helow</h1>
const root=createRoot(document.querySelector("#root"))
root.render(
     [ 
    //  <CounterCount key="1"/>, 
    // <CountCounter2 key="2"/>,
    // <ToggleBtn key="3"/>, 
    // <Togglebtn2 key="4"/>,
    // <UsiGenerator key="5"/>,
    // <FormData/>
    <USObject/>,
    <USArray/>
    
]


)