import {CUSTOMER_LOGIN, CUSTOMER_LOGIN_ERROR } from '../action_type/constants';


const initialState ={
    isAuthenticated : false,
    customer:{},
    error:{},
}



const customer_authReducer = (state=initialState,action) =>{
    switch(action.type){
        case CUSTOMER_LOGIN:
            return{
                customer:action.payload.customer,
                isAuthenticated : Object.keys(action.payload.customer).length!==0,
                error:{}  
            }    
        case CUSTOMER_LOGIN_ERROR:
            return{
                ...state,
                error:action.payload.error
            }    
        default :
            return state    
    }
}

export default customer_authReducer;