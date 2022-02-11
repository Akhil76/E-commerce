import { ADD_CHILD_CATEGORY, 
    ADD_MAIN_CATAGORY,
    EDIT_MAIN_CATAGORY, 
    DELETE_MAIN_CAT,
    ADD_SUB_CATEGORY,
    EDIT_SUB_CATAGORY,
    DELETE_SUB_CAT,
    EDIT_CHILD_CATAGORY, 
    DELETE_CHILD_CAT,
    FETCH_CATAGORY ,
    ERROR
} from "../action_type/constants";


const initialstate = {
    items:[],
    error:{},
    message:{}
}

const catagoryReducer = (state=initialstate,action)=>{
        switch (action.type){
            case FETCH_CATAGORY:
                return{
                    ...state,
                    items:action.payload.catagory
                }
            case ADD_MAIN_CATAGORY:
                return{
                    ...state,
                    message: action.payload.message,
                    error:{}
                }
            case ADD_SUB_CATEGORY:
                return{
                    ...state,
                    newSubcatagory:action.payload,
                    
                }
            case ADD_CHILD_CATEGORY:
                return{
                    ...state,
                    newchildCat:action.payload
                } 
            case EDIT_MAIN_CATAGORY:
                return {
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    )
                }
            case EDIT_SUB_CATAGORY:
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    )
                }
            case EDIT_CHILD_CATAGORY:
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    ) 
                }
            case DELETE_MAIN_CAT:
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    ) 
                }
            case DELETE_SUB_CAT :
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    ) 
                }
            case DELETE_CHILD_CAT:
                return{
                    ...state,
                    items:state.items.map((e)=>
                    e._id===action.payload.id?action.payload:e
                    ) 
                }
            case ERROR:
                return{
                    ...state,
                    error:action.payload.error
                }          
            default :
                return state    
        }
        
            
};

export default catagoryReducer;