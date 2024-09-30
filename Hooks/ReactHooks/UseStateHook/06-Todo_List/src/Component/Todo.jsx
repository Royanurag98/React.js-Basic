import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './Context/TodoContext'
// import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'

function Todo() {
    const { TodoInput}=useContext(TodoContext)
    const [Todo, setTodo]=useState([])

    const addTodo = (Todo)=>{
        setTodo([
            ...Todo
        ])
    }
  return (
    <>
    <div  className='bg-gray-200 h-[100vh] flex justify-center items-center'>
      <div className='w-[400px]  bg-gray-900 flex  justify-center items-center flex-col  '>
            <div className='text-white font-bold text-[20px] text-center pt-5'>Todo List !</div>
            <div className=' flex  space-x-[2px] mt-5 '>
              <TodoInput addTodo={addTodo}/>
             
            </div>
            <div className=' w-[350px] h-[300px] mt-11 overflow-auto'>
            <div className='bg-[rgb(141,80,146)] rounded-[5px] p-2 flex justify-between  text-white font-medium m-3'>
            <span className='text-[15px]'>HTML5</span> 
            <div className='flex space-x-1 '>
            <svg className="stroke-current text-white stroke-[3px] size-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
           </svg>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className='size-5 stroke-white stroke-2'><path strokeLinecap="round" strokeLinejoin="round" d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>  
            </div>
       </div>
            </div>
        </div>
          
    </div> 
    </>
  )
}

export default Todo
