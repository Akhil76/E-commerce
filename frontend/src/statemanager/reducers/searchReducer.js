import { SEARCH} from "../action_type/constants";

const initialstate = {
    items:[]
}

const searchReducer = (state=initialstate,action)=>{
    switch (action.type){
        case SEARCH:
            return{
                ...state,
                items: action.payload.products
            }
        default :
            return state    
    }
        
            
};


export default searchReducer ;