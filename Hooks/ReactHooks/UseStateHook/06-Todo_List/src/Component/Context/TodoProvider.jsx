import React from "react";
import { TodoContext } from "./TodoContext";
import { createContext } from "react";
import { useState } from "react";

function TodoProvider(props, {addTodo}) {
  const [Value, setValue]=useState('')
 const handleSubmmit=(e)=>{
    e.preventDefault()
    if(Value){

        addTodo(Value)
        setValue('')
    }
    
 }
  const TodoInput = () => (
   <form className="space-x-[2px] mt-5" onSubmit={handleSubmmit}>
    <input
      type="text"
      value={Value}
      onChange={(e)=>{
        setValue( e.target.value)
     
      }}
      placeholder="What is your task today ?"
      className="bg-transparent border-[1px] w-[230px] border-[#8D5092] p-1 font-sans  "
    />
     <button className="text-white font-bold text-[16px] text-center px-2 py-1 bg-[#8D5092]"> Add Todo</button>
    </form>
  );
 
 
 

  return (
    <TodoContext.Provider value={{ TodoInput}}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
