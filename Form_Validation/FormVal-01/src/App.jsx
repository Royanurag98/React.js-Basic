import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormVal from '../../FormVal-02/src/Component/FormVal';

import SignIn from '../../FormVal-02/src/Component/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* const router=createBrowserRouter(
    createRoutesFromElements(
   <Route  path='/' element={<SignIn />}>
      <Route path='' element={<FormVal />}/>
    
    
    
         

   </Route>
  )
) */}

<FormVal />  
    </>
  )
}

export default App
