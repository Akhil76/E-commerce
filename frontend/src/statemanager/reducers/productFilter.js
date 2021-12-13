import { FETCH_PRODUCT_BY_NAME,
    FETCH_PRODUCT_BY_CAT,
    FETCH_PRODUCT_BY_SUB_CAT, 
    PRODUCT_DETAILS} from "../action_type/constants";

const initialstate = {
    items:[],
    loading:true
}

const productFilterReducer = (state=initialstate,action)=>{
    switch (action.type){
        case FETCH_PRODUCT_BY_NAME:
            return {
                ...state,
                items:action.payload.products,
                loading:false  
            }
        case FETCH_PRODUCT_BY_CAT:
            return {
                ...state,
                items:action.payload.products,
                loading:false  
            }
        case FETCH_PRODUCT_BY_SUB_CAT:
            return {
                ...state,
                items:action.payload.products,
                loading:false  
            }
        case PRODUCT_DETAILS:
            return {
                ...state,
                items:action.payload.products,
                loading:false  
            }      
        default :
            return state    
    }
        
            
};





export default productFilterReducer ;