import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {CUSTOMER_LOGIN, CUSTOMER_LOGIN_ERROR} from '../action_type/constants';
import setAuthHeader from '../../utils/setAuthHeader';



export const customerlogin =(customerdata,history)=>dispatch=>{
    axios.post('/customerlogin',customerdata)
    .then(res=>{
        const customer_token = res.data.customertoken;
        localStorage.setItem('customer_auth_token', customer_token); 
        setAuthHeader(customer_token);   
        const decode = jwtDecode(customer_token);
        dispatch({
            type:CUSTOMER_LOGIN,
            payload:{
                customer:decode
            }
        })
        history.push('/cart');
    })
    .catch(error=>{
        dispatch({
            type:CUSTOMER_LOGIN_ERROR,
            payload:{
                error: error.response.data
            }
        })
    })
}

export const customerlogout = history =>{
    localStorage.removeItem('customer_auth_token');
    history.push('/signin')
    //window.location.href="/login";
    return{
        type:CUSTOMER_LOGIN,
        payload:{
            customer:{}
        }
    }
}