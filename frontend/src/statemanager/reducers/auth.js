import {CUSTOMER_LOGIN, LOGIN, LOGIN_ERROR} from '../action_type/constants';


const initialState ={
    isAuthenticated : false,
    admin:{},
    customer:{},
    error:{},
    
}



const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOGIN:
            return{
                admin:action.payload.admin,
                isAuthenticated : Object.keys(action.payload.admin).length!==0, 
            }
        case CUSTOMER_LOGIN:
            return{
                customer:action.payload.customer,
                isAuthenticated : Object.keys(action.payload.customer).length!==0,  
            }    
        case LOGIN_ERROR:
            return{
                ...state,
                error:action.payload.error
            }    
        default :
            return state    
    }
}

export default authReducer;