import axios from 'axios';
import{ DISPLAY_SLIDER,DISPLAY_SLIDER_CLIENT } from '../action_type/constants';

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