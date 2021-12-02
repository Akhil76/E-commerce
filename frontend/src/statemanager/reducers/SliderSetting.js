import {ADD_SLIDER,
    DEL_SLIDER,
    DISPLAY_SLIDER, 
    DISPLAY_SLIDER_CLIENT} from "../action_type/constants";

const initialstate = {
    items:[]
}

const SliderSetting = (state=initialstate,action)=>{
        switch (action.type){
            case ADD_SLIDER:
                return{...state,
                    addslider: action.payload
                } 
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
            case DEL_SLIDER:
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    )
                }    
            default :
                return state    
        }          
};

export default SliderSetting;