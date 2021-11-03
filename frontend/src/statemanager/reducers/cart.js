import { CART} from "../action_type/constants";

/*const initialstate = {
    items:[]
}*/

const cartItemReducer = (state=[],action)=>{
    switch (action.type){
        case CART:
            {return action.payload.cartitems}
        default :
            return state    
    }
        
            
};





export default cartItemReducer ;
