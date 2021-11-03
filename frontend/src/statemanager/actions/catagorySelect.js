import axios from 'axios';
import { CATAGORY_SELECT,SUBCATAGORY_SELECT,SUBCATAGORY_TWO_SELECT} from '../action_type/constants';

export const mainCatagory = ()=>(dispatch)=>{
    axios.get('/admin/maincatagory')
    .then(response =>{
        dispatch({
            type:CATAGORY_SELECT,
            payload: {
                catagories: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const subcatagory = (catagoryId)=>(dispatch)=>{
    axios.get(`/admin/subcatagory/${catagoryId}`)
    .then(response =>{
        dispatch({
            type:SUBCATAGORY_SELECT,
            payload: {
                subcatagories: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const subcatagorytwo = (subcatagoryId)=>(dispatch)=>{
    axios.get(`/admin/subcatagorytwo/${subcatagoryId}`)
    .then(response =>{
        dispatch({
            type:SUBCATAGORY_TWO_SELECT,
            payload: {
                subcatagorytwo: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};