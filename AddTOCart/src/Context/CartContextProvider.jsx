import React, { useReducer } from "react";
import { CartContext } from "./CartContext";
import { products } from "../components/Product";
import Items from "../components/Items";
import { reducer } from "../components/reducer";

const initialState = {
  items: products,
  totalItems: 0,
  totalAmount: 0,
};

function CartContextProvider(props) {
  // dispatch is use to triger the action whatever we define in reducer function
  const [State, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "Remove_Item",
      payload: id,
    });
  };

  
const clearCart=()=>{
  return dispatch({
    type: "Clear_Cart_Data",
})
}

const Increment=(id)=>{
  return dispatch({
    type:"Item_Increment",
   payload:id,
  });
}

const Decrement=(id)=>{
  return dispatch({
    type:"Item_Decrement",
   payload:id,
  });
}
  return (
    // here i pass the state object
    <CartContext.Provider value={{ ...State, removeItem, clearCart,Increment, Decrement }}>
      {props.children}
    </CartContext.Provider>
  );
}



export default CartContextProvider;
