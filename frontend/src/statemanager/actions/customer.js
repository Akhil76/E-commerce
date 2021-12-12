import axios from 'axios';
import {CUSTOMER_SIGNUP,CUSTOMER_ERROR} from '../action_type/constants';




export const customerRegistration=(customerInfo,history)=>(dispatch)=>{
    axios.post('/addcustomer',customerInfo)
    .then(response =>{
        dispatch({
            type:CUSTOMER_SIGNUP,
            payload:{
                message:response.data,
                error:{}  
            }
        });
        history.push('/signin');
    })
    .catch(error=>{
        dispatch({
            type:CUSTOMER_ERROR,
            payload:{
                error:error.response.data
            }
        })
    })
};