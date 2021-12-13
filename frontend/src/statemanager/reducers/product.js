import { ADD_PRODUCT,FETCH_ALL_PRODUCT,EDIT_PRODUCT_DISPLAY} from "../action_type/constants";

const initialstate = {
    items:[],
    loading:true
}

const productsReducer = (state=initialstate,action)=>{
    switch (action.type){
        case ADD_PRODUCT:
            return{...state,
                addproduct: action.payload
            }    
        case FETCH_ALL_PRODUCT:
            return {
                ...state,
                items:action.payload.products,
                loading:false  
            }
        case EDIT_PRODUCT_DISPLAY:
            return {
                ...state,
                items:action.payload.products
            }
        default :
            return state    
    }
        
            
};





export default productsReducer ;
