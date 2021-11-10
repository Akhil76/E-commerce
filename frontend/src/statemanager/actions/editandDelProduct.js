import axios from 'axios';
import { 
    EDIT_PRODUCT,
    DEL_PRODUCT} from '../action_type/constants';


//----------Edit Product ------------------------
export const editproduct = (id,formdata)=>(dispatch)=>{
    axios.put(`/admin/editproduct/${id}`,formdata,{
        headers:{
            "content-type": "application/json" 
        }
    })

    .then(response=>{
        dispatch({
            type:EDIT_PRODUCT,
            payload:{
                formdata:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

//-----------Delete Product ---------------------
export const delproduct = (id)=>(dispatch)=>{
    axios.delete(`/admin/delproduct/${id}`)
    .then(response=>{
        dispatch({
            type:DEL_PRODUCT,
            payload:response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
}    