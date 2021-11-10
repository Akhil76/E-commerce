import { EDIT_PRODUCT,DEL_PRODUCT} from "../action_type/constants";

const initialstate = {
    items:[]
}

const editAndDelProduct = (state=initialstate,action)=>{
    switch (action.type){
        case EDIT_PRODUCT:
            return{
              ...state,
              items:state.items.map((e)=>
              e._id===action.payload.id?action.payload:e
              )  
            }
        case DEL_PRODUCT:
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





export default editAndDelProduct ;
