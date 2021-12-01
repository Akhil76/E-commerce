import {DISPLAY_SLIDER, DISPLAY_SLIDER_CLIENT} from "../action_type/constants";

const initialstate = {
    items:[]
}

const SliderSetting = (state=initialstate,action)=>{
        switch (action.type){
            case DISPLAY_SLIDER:
                return{
                    ...state,
                    items: action.payload.slider
                }
            case DISPLAY_SLIDER_CLIENT:
                return{
                    ...state,
                    items: action.payload.slider
                }    
            default :
                return state    
        }          
};

export default SliderSetting;