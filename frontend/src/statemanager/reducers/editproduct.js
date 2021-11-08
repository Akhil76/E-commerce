import { EDIT_PRODUCT} from "../action_type/constants";

const initialstate = {
    items:[]
}

const editproductReducer = (state=initialstate,action)=>{
    switch (action.type){
        case EDIT_PRODUCT:
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





export default editproductReducer ;
