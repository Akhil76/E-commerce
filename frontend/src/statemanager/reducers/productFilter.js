import { FETCH_PRODUCT_BY_NAME,
    FETCH_PRODUCT_BY_CAT,
    FETCH_PRODUCT_BY_SUB_CAT, 
    PRODUCT_DETAILS} from "../action_type/constants";

/*const initialstate = {
    items:[]
}*/

const productFilterReducer = (state=[],action)=>{
    switch (action.type){
        case FETCH_PRODUCT_BY_NAME:
           {return action.payload.products}
        case FETCH_PRODUCT_BY_CAT:
            {return action.payload.products}
        case FETCH_PRODUCT_BY_SUB_CAT:
            {return action.payload.products}
        case PRODUCT_DETAILS:
            {return action.payload.products}       
        default :
            return state    
    }
        
            
};





export default productFilterReducer ;