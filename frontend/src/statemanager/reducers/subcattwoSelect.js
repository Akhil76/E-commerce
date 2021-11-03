import { SUBCATAGORY_TWO_SELECT} from "../action_type/constants";

/*const initialstate = {
    items:[]
}*/

const subcattwoSelectReducer = (state=[],action)=>{
    switch (action.type){
        case SUBCATAGORY_TWO_SELECT:
            {return action.payload.subcatagorytwo}
        default :
            return state    
    }
        
            
};





export default subcattwoSelectReducer ;