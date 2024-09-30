export const reducer=(state, action)=>{
    if(action.type === 'Remove_Item'){
        return {
            ...state,
            items:state.items.filter((curElem)=>{
                 return curElem.id !=action.payload;
            })
        }
    }

    if(action.type==="Clear_Cart_Data"){
        return{
            ...state,
            items:[]
        }
    }

    if(action.type==="Item_Increment"){
        let updateCart = state.items.map((curElem)=>{
            if(curElem.id===action.payload){
                return{
                    ...curElem, quantity:curElem.quantity+1
                };
            }
            return curElem;
        })
       return { ...state, items:updateCart}
    }


    if(action.type==="Item_Decrement"){
        const updateCart = state.items.map((curElem)=>{
            if(curElem.id===action.payload){
                return{
                    ...curElem, quantity:curElem.quantity-1
                };
            }
            return curElem;
        }).filter((curElem)=>curElem.quantity!=0)
       return { ...state, items:updateCart}
    }
  
   
    
   
  return state
}


