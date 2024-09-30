import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


function Items({id,title, description,price,img,quantity}){
  const {removeItem,Increment,Decrement}=useContext(CartContext)
 
    return (
    <>
       <div className= " hide bg-white  mt-4  flex justify-between items-center p-4 ">
            <div className="w-[100px] h-[50px] flex border-2  ">
                <img
                  className="w-[100px] h-[50px] object-cover"
                  src={img}
                  alt=""/>
            </div>

              <div className=" flex flex-col  ">
                <h1 className="font-bold text-[15px] tracking-wider ">{title}</h1>
                <p>{description}</p>
              </div>

              <div className=" flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"  onClick={()=>Decrement(id)}
                  className=" size-8 stroke-white  fill-black" 
                  viewBox="0 0 24 24"
                >
                  <path d="M5 11h14v2H5z"></path>
                </svg>

                <input
                  type="text"
                  placeholder={quantity}
                  className="w-[50px] h-[25px] text-center"
                />

                <svg                                               
                  className=" size-8 stroke-white  fill-black" onClick={()=>Increment(id)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                </svg>
              </div>

              <div className="bg-white  flex">
                <svg
                  className=" size-5 stroke-white  fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"></path>
                </svg>
                <p>{price}</p>
              </div>

              <div className="bg-white    " onClick={()=>removeItem(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" size-8 stroke-white  fill-red-600"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
                </svg>
              </div>
            </div>
    </>
  )
}

export default Items
