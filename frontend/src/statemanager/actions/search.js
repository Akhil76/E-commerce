import axios from 'axios';
import { SEARCH} from '../action_type/constants';



export const search = (productName)=>dispatch=>{
    axios.get(`/search/${productName}`)
    .then(Response=>{
        dispatch({type:SEARCH,
            payload:{
                products:Response.data
                }
            })
    })
    .catch(error=>{
        console.log(error)
    })
}