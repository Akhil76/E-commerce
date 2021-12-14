import axios from 'axios';
import {CUSTOMER_SIGNUP,CUSTOMER_ERROR, ALL_CUSTOMER} from '../action_type/constants';




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

export const allcustomer = ()=>(dispatch)=>{
    axios.get('/admin/customers')
    .then(Response =>{
        dispatch({
            type:ALL_CUSTOMER,
            payload: {
                customers:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}