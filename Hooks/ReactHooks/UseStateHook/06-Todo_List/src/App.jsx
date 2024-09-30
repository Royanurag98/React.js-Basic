import React, { useState } from 'react'
import Todo from './Component/Todo'
import TodoProvider from './Component/Context/TodoProvider'


function App() { 

 
  return (
   <>
   <TodoProvider>
   <Todo/>
   </TodoProvider>
 
   </>
  )
}

export default App
