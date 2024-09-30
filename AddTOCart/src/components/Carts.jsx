
import { useContext } from "react";
import Items from "./Items";
import { CartContext } from "../Context/CartContext";



function Carts() {
    // and we have get only item so we have destructring of state object
const {items,clearCart}=useContext(CartContext)


if(items.length===0){
  return (
    <div className="grid grid-cols-1 space-y-5 ">
        <div className="bg-gray-400 flex justify-between p-3 ">
          <div className="flex items-center">
            <svg
              className=" w-[70px] h-[40px] stroke-white  fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
            </svg>
            <h1 className="text-white font-medium tracking-wide">
              Continue Shoping
            </h1>
          </div>

          <div className=" relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" size-10 stroke-white  fill-black"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
            <p className="bg-blue-500 pt-0.5 rounded-full size-7 text-white font-bold items-center text-center absolute -top-2 left-5">
              7
            </p>
          </div>
        </div>

        <div className=" flex flex-col rounded-2xl ">
          <div className="bg-white ">
            <p className="text-[22px] font-extrabold text-black tracking-wide">
              Shoping Carts
            </p>
            <p className="text-[15px]  text-black tracking-wide">
              You have <span>7</span> items in your Shoping carts
            </p>
          </div>
      </div>
       </div>
  );
}
  
  return (
    <>
      <div className="grid grid-cols-1 space-y-5 ">
        <div className="bg-gray-400 flex justify-between p-3 ">
          <div className="flex items-center">
            <svg
              className=" w-[70px] h-[40px] stroke-white  fill-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
            </svg>
            <h1 className="text-white font-medium tracking-wide">
              Continue Shoping
            </h1>
          </div>

          <div className=" relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" size-10 stroke-white  fill-black"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
            <p className="bg-blue-500 pt-0.5 rounded-full size-7 text-white font-bold items-center text-center absolute -top-2 left-5">
              7
            </p>
          </div>
        </div>

        <div className=" flex flex-col rounded-2xl ">
          <div className="bg-white ">
            <p className="text-[22px] font-extrabold text-black tracking-wide">
              Shoping Carts
            </p>
            <p className="text-[15px]  text-black tracking-wide">
              You have <span>7</span> items in your Shoping carts
            </p>
          </div>

          <div className="bg-gray-600 mt-5 max-w-full  rounded-lg  p-5  h-[400px] overflow-auto">

             {
               items.map((currentItem)=>{
                  return   <Items key={currentItem.id} {...currentItem}/> 
               })
             } 
       

            
          </div>
        </div>
        <div className="bg-white flex justify-end items-end flex-col  ">
            <div>  <p  className="font-bold text-gray-500">Cart Total : <span className="text-black">123200</span></p></div>
          
            <div className="flex  space-x-2">
                <button className="bg-blue-400 text-[10px] font-bold py-1 px-3 text-white   hover:bg-blue-700 active:bg-blue-600   ">CHECKOUT</button>
                <button className="bg-red-400  text-[10px] font-bold  py-1 px-3  text-white hover:bg-red-700   active:bg-red-600  " onClick={clearCart} >CLEAR CART</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Carts;
