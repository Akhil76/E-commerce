import {CUSTOMER_LOGIN, CUSTOMER_LOGIN_ERROR, CUSTOMER_SIGNUP } from '../action_type/constants';


const initialState ={
    items:[],
    isAuthenticated : false,
    customer:{},
    error:{},
}



const customer_authReducer = (state=initialState,action) =>{
    switch(action.type){
        case CUSTOMER_SIGNUP:
            return{
                ...state,
                customerInfo:action.payload
            }
        case CUSTOMER_LOGIN:
            return{
                customer:action.payload.customer,
                isAuthenticated : Object.keys(action.payload.customer).length!==0,  
            }    
        case CUSTOMER_LOGIN_ERROR:
            return{
                ...state,
                error:action.payload
            }    
        default :
            return state    
    }
}

export default customer_authReducer;