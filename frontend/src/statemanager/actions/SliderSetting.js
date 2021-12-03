import axios from 'axios';
import{ ADD_SLIDER,
    DISPLAY_SLIDER,
    DISPLAY_SLIDER_CLIENT,
    EDIT_SLIDER,
    DEL_SLIDER
} from '../action_type/constants';


export const addslider = (formdata)=>(dispatch)=>{
    axios.post('/admin/addsliderimg',formdata,{
        headers:{
            "content-type": "application/json"
        }
    })
    .then(Response =>{
        dispatch({
            type:ADD_SLIDER,
            payload: {
                formdata: Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};


export const displaySlider = ()=>(dispatch)=>{
    axios.get('/admin/imgslider')
    .then(response =>{
        dispatch({
            type:DISPLAY_SLIDER,
            payload: {
                slider: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const displaySliderClient = ()=>(dispatch)=>{
    axios.get('/imgslider')
    .then(response =>{
        dispatch({
            type:DISPLAY_SLIDER_CLIENT,
            payload: {
                slider: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const editslider = (id,formdata)=>(dispatch)=>{
    axios.put(`/admin/editslider/${id}`,formdata,{
        headers:{
            "content-type": "application/json" 
        }
    })

    .then(response=>{
        dispatch({
            type:EDIT_SLIDER,
            payload:{
                formdata:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const delslider = (id)=>(dispatch)=>{
    axios.delete(`/admin/delslider/${id}`)
    .then(response=>{
        dispatch({
            type:DEL_SLIDER,
            payload:response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
}    