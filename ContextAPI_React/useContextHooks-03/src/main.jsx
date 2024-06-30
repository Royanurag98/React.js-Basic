import React from 'react'
import ReactDOM from 'react-dom/client'
import Comp3 from './Components/Comp3'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Comp3/>
  
)

// Note 
/* if we want to pass props from App.js to Child Comp-C we can do that With the help of prop drilling 
   But we can't directly pass props App.js to  Child Comp-C we have also need to pass Comp-A and Comp-B 
   like we have to do nesting of props */


/* If We use useContext Hooks We can directly pass props App.js to  Child Comp-C 
   We can pass props Accending as well as Decending order.
   App ====> Comp-C
   App <==== Comp-C
 */