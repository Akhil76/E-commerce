import axios from 'axios';
import { ADD_TO_CART,CART_ITEM} from '../action_type/constants';


export const addtoCart =(id,product)=>(dispatch)=>{
    axios.put(`/addtocart/${id}`,product)
    .then(response =>{
        dispatch(
            {type:ADD_TO_CART,
                payload:{
                    cartItem:response.data
                }
            }
        )
    })
    .catch(error=>{
        console.log(error)
    })
}

export const cartItem = (customerid)=>(dispatch)=>{
    axios.get(`/cartitem/${customerid}`)
    .then(response =>{
        dispatch({
            type:CART_ITEM,
            payload: {
                cartitems: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};