import axios from 'axios';
import { ADD_TO_CART,CART_ITEM, DEL_CART_ITEM} from '../action_type/constants';

//-----------for adding product to cart-------------
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
//--------for displaying product in cart------------
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

//----------for removing product from cart----------

export const delCartItem = (id,product)=>(dispatch)=>{
    axios.put(`/delcartitem/${id}`,product)
    .then(response=>{
        dispatch({
            type:DEL_CART_ITEM,
            payload:{
                cartItem:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};