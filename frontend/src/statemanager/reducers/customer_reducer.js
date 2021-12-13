import { CUSTOMER_SIGNUP,CUSTOMER_ERROR,SUCCESS_MSG } from '../action_type/constants';


const initialState = {
    items: [],
    error:{},
    message:{}
}



const customer_Reducer = (state=initialState, action) => {
    switch (action.type) {
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