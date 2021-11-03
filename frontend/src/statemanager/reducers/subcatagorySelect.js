import { SUBCATAGORY_SELECT} from "../action_type/constants";

/*const initialstate = {
    items:[]
}*/

const subcatagorySelectReducer = (state=[],action)=>{
    switch (action.type){
        case SUBCATAGORY_SELECT:
            {return action.payload.subcatagories}
        default :
            return state    
    }
        
            
};





export default subcatagorySelectReducer ;