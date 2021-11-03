import axios from 'axios';
import { FETCH_PRODUCT_BY_NAME,FETCH_PRODUCT_BY_CAT ,FETCH_PRODUCT_BY_SUB_CAT, PRODUCT_DETAILS} from '../action_type/constants';



export const fetchProductByName = (productId)=>dispatch=>{
    axios.get(`/product/${productId}`)
    .then(Response=>{
        dispatch({type:FETCH_PRODUCT_BY_NAME,
            payload:{
                products:Response.data
                }
            })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const fetchProductbyCat = (catId)=>dispatch=>{
    axios.get(`/maincatagory/${catId}`)
    .then(Response=>{
        dispatch({type:FETCH_PRODUCT_BY_CAT,
            payload:{
                products:Response.data
                }
            })
    })
    .catch(error=>{
        console.log(error)
    })
}


export const fetchProductbySubcat = (subcatId)=>dispatch=>{
    axios.get(`/subcatagory/${subcatId}`)
    .then(Response=>{
        dispatch({type:FETCH_PRODUCT_BY_SUB_CAT,
            payload:{
                products:Response.data
                }
            })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const productdetails = (id)=>dispatch=>{
    axios.get(`/singleproduct/${id}`)
    .then(Response=>{
        dispatch({type:PRODUCT_DETAILS,
            payload:{
                products:Response.data
                }
            })
    })
    .catch(error=>{
        console.log(error)
    })
}