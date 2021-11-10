import axios from 'axios';
import { ADD_PRODUCT,
    FETCH_ALL_PRODUCT,
    EDIT_PRODUCT_DISPLAY,
    } from '../action_type/constants';

export const addproduct = (formdata)=>(dispatch)=>{
    axios.post('/admin/addproduct',formdata,{
        headers:{
            "content-type": "application/json"
        }
    })
    .then(Response =>{
        dispatch({
            type:ADD_PRODUCT,
            payload: {
                formdata: Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

//-----------for adminpanel----------------
export const editProductDisplay = ()=>(dispatch)=>{
    axios.get('/admin/allproducts')
    .then(Response =>{
        dispatch({
            type:EDIT_PRODUCT_DISPLAY,
            payload: {
                products: Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

//-----------for client--------------------
export const fetch_all_product = ()=>(dispatch)=>{
    axios.get('/allproducts')
    .then(Response =>{
        dispatch({
            type:FETCH_ALL_PRODUCT,
            payload: {
                products: Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}


