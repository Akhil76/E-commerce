import { CATAGORY_SELECT} from "../action_type/constants";

/*const initialstate = {
    items:[]
}*/

const catagorySelectReducer = (state=[],action)=>{
    switch (action.type){
        case CATAGORY_SELECT:
            {return action.payload.catagories}
        default :
            return state    
    }
        
            
};





export default catagorySelectReducer ;
