import { DISPLAY_CATAGORIES } from "../action_type/constants";

const initialstate = {
    items:[]
}

const catagorySetting = (state=initialstate,action)=>{
    switch (action.type){
        case DISPLAY_CATAGORIES:
            return{
                ...state,
                items : action.payload.catagory
            }
        default :
            return state    
    }
        
            
};

export default catagorySetting;