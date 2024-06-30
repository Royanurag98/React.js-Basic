import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './componets/Home.jsx'
import About from './componets/About.jsx'
import Contact from './componets/Contact.jsx'



// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"About",
//         element: <About/>
//       },
//       {
//         path:"Contect",
//         element: <Contact/>
//       }
      
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
         <Route path='' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contect' element={<Contact/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router}/>

)
