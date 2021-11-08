import { ADD_PRODUCT, FETCH_ALL_PRODUCT,EDIT_PRODUCT_DISPLAY} from "../action_type/constants";

// const initialstate = {
//     products:[]
// }

const productsReducer = (state=[],action)=>{
    switch (action.type){
        case ADD_PRODUCT:
            return{...state,addproduct: action.payload} 
        case FETCH_ALL_PRODUCT:
            {return action.payload.products}
        case EDIT_PRODUCT_DISPLAY:
            {return action.payload.products}
        default :
            return state    
    }
        
            
};





export default productsReducer ;
