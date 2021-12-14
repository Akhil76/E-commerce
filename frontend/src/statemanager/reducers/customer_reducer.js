import { CUSTOMER_SIGNUP,CUSTOMER_ERROR,SUCCESS_MSG, ALL_CUSTOMER } from '../action_type/constants';


const initialState = {
    items: [],
    error:{},
    message:{},
    
}



const customer_Reducer = (state=initialState, action) => {
    switch (action.type) {
        case ALL_CUSTOMER:
            return{
                ...state,
                items:action.payload.customers
            }
        case CUSTOMER_SIGNUP:
            return {
                ...state,
                message:action.payload.message,
               
            }
        case CUSTOMER_ERROR:
            return{
                ...state,
                error:action.payload.error
            }    
        default:
            return state
    }
}

export default customer_Reducer;