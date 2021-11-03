import axios from 'axios';
import{ ADD_CHILD_CATEGORY, 
        ADD_MAIN_CATAGORY,
        EDIT_MAIN_CATAGORY,
        DELETE_MAIN_CAT, 
        ADD_SUB_CATEGORY,
        EDIT_SUB_CATAGORY,
        DELETE_SUB_CAT,
        EDIT_CHILD_CATAGORY, 
        DELETE_CHILD_CAT,
        FETCH_CATAGORY } from '../action_type/constants';

export const fetch_catagory = ()=>(dispatch)=>{
    axios.get('/navcatagories')
    .then(response =>{
        dispatch({
            type:FETCH_CATAGORY,
            payload: {
                catagory: response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const addcatagory =(newcatagory)=>(dispatch)=>{
    axios.post('/admin/addcatagory',newcatagory)
    .then(response =>{
        dispatch(
            {type:ADD_MAIN_CATAGORY,
                payload:{
                    newcatagory:response.data
                }
            }
        )
    })
    .catch(error=>{
        console.log(error)
    })
}

export const editMainCat = (id,editedMainCat)=>(dispatch)=>{
    axios.put(`/admin/editmaincatagory/${id}`,editedMainCat)
    .then(response=>{
        dispatch({
            type:EDIT_MAIN_CATAGORY,
            payload:{
                editedMainCat:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const deleteMainCat = (id)=>(dispatch)=>{
    axios.delete(`/admin/deletemaincatagory/${id}`)
    .then(response=>{
        dispatch({
            type:DELETE_MAIN_CAT,
            payload:response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const addsubcatagory =(newSubcatagory)=>(dispatch)=>{
    axios.post('/admin/addsubcatagory',newSubcatagory)
    .then(response =>{
        dispatch(
            {type:ADD_SUB_CATEGORY,
                payload:{
                    newSubcatagory:response.data
                }
            }
        )
    })
    .catch(error=>{
        console.log(error)
    })
}

export const editSubCat = (id,editedSubCat)=>(dispatch)=>{
    axios.put(`/admin/editsubcatagory/${id}`,editedSubCat)
    .then(response=>{
        dispatch({
            type:EDIT_SUB_CATAGORY,
            payload:{
                editedSubCat:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const deleteSubCat = (id)=>(dispatch)=>{
    axios.delete(`/admin/deletesubcategory/${id}`)
    .then(response=>{
        dispatch({
            type:DELETE_SUB_CAT,
            payload:response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })

}


export const addchildcatagory =(newchildCat)=>(dispatch)=>{
    axios.post('/admin/addsubcatagory_two',newchildCat)
    .then(response =>{
        dispatch(
            {type:ADD_CHILD_CATEGORY,
                payload:{
                    newchildCat:response.data
                }
            }
        )
    })
    .catch(error=>{
        console.log(error)
    })
}

export const editChildCat = (id,editedChildCat)=>(dispatch)=>{
    axios.put(`/admin/editchildcatagory/${id}`, editedChildCat)
    .then(response=>{
        dispatch({
            type:EDIT_CHILD_CATAGORY,
            payload:{
                editedChildCat:response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
};

export const deleteChildCat = (id)=>(dispatch)=>{
    axios.delete(`/admin/deletechildcategory/${id}`)
    .then(response=>{
        dispatch({
            type:DELETE_CHILD_CAT,
            payload:response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
};