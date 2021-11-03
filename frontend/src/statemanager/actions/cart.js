import axios from 'axios';
import { CART} from '../action_type/constants';




export const cartItem = (customerid)=>(dispatch)=>{
    axios.get(`/cartitem/${customerid}`)
    .then(response =>{
        dispatch({
            type:CART,
            payload: {
                cartitems : response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};