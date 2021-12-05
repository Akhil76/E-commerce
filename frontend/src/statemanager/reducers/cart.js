import { ADD_TO_CART,CART_ITEM} from "../action_type/constants";

const initialstate = {
    items:[]
}

const cartItemReducer = (state=initialstate,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                items:state.items.map((e)=>
                e._id===action.payload.id?action.payload:e
                )  
              }
        case CART_ITEM:
            return{
                ...state,
                items : action.payload.cartitems
            }      
        default :
            return state    
    }
            
};





export default cartItemReducer ;
