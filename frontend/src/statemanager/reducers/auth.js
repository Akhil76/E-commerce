import {LOGIN,LOGIN_ERROR} from '../action_type/constants';


const initialState ={
    isAuthenticated : false,
    admin:{},
    error:{},
}



const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case LOGIN:
            return{
                admin:action.payload.admin,
                isAuthenticated : Object.keys(action.payload.admin).length!==0, 
                error:{}
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