import axios from 'axios';
import { DISPLAY_CATAGORIES } from '../action_type/constants';

export const catagorySetting = ()=>(dispatch)=>{
    axios.get('/admin/displaycatagories')
    .then(response =>{
        dispatch({
            type:DISPLAY_CATAGORIES,
            payload: {
                catagory: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}