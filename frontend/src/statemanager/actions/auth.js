import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {LOGIN,LOGIN_ERROR} from '../action_type/constants';
import setAuthHeader from '../../utils/setAuthHeader';

export const login =(admindata,history)=>dispatch=>{
    axios.post('/admin/login',admindata)
    .then(res=>{
        const token = res.data.token;
        localStorage.setItem('auth_token',token); 
        setAuthHeader(token);   
        const decode = jwtDecode(token);
        dispatch({
            type:LOGIN,
            payload:{
                admin:decode,
                
            }
        })
        history.push('/admin');
    })
    .catch(error=>{
        dispatch({
            type:LOGIN_ERROR,
            payload:{
                error:error.response.data
            }
        })
    })
}


export const logout = history =>{
    localStorage.removeItem('auth_token');
    //history.push('/login')
    window.location.href="/login";
    return{
        type:LOGIN,
        payload:{
            admin:{}
        }
    }
}


