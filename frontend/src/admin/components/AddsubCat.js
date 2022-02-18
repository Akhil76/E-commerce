import React,{ useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid, Typography,Button} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {mainCatagory} from "../../statemanager/actions/catagorySelect";
import {addsubcatagory} from '../../statemanager/actions/catagory';


const useStyles = makeStyles((theme)=>({
    root:{
        background:"#e0e0e0"
    },
	Title:{
		background:"#69f0ae"
	},
    form:{
        marginLeft:"10px"
    },
    inputF:{
        padding: "10px",
        width: "auto%",
        borderRadius: "5px",
        margin: "10px 0px"
    },
    select:{
        width:"100px",
        height:"30px"
    }
}))


function AddsubCat(){
    const classes = useStyles();
    const dispatch = useDispatch();
   
    const Maincatagories = useSelector((state)=>state.catagorySelect);
    useEffect(()=>{
        dispatch(mainCatagory());
    },[mainCatagory()]);

    const initialState = {
        SubcatagoryName:"",
        catagoryId:"",
    };

    const[newSubcatagory,setNewSubcatagory] = useState(initialState);

    // const changeHandler =(e)=>{
    //     setNewSubcatagory({
    //       [e.target.name] : e.target.value
    //     })
    // };

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(addsubcatagory(newSubcatagory));
        setNewSubcatagory({
            SubcatagoryName:"",
            catagoryId:"",
           
        })
    }

   

    return(
        <Grid className={classes.root} xs={12} sm={12} md={6}>
			<Typography className={classes.Title} variant="h6">Add Sub category</Typography>
            <form className={classes.form} onSubmit={submithandler}>
                <input
                className={classes.inputF} 
                placeholder="Add Sub Category"
                Name="SubcatagoryName"
                value={newSubcatagory.SubcatagoryName}
                onChange={(e)=>setNewSubcatagory({...newSubcatagory,SubcatagoryName:e.target.value})}
                />
                <div>
                    <label for="SubCatagory">Select a main category: </label>
                    <select 
                    className={classes.select} 
                    Name="catagoryId" 
                    value={newSubcatagory.catagoryId} 
                    onChange={(e)=>setNewSubcatagory({...newSubcatagory,catagoryId:e.target.value})}
                    >
                        <option value="">Select one</option>
                        {Maincatagories.map((mainCat)=>(<option value={mainCat._id}>{mainCat.CatagoryName}</option>))}
                    </select>
                </div>
                <Button  
                type="submit" 
                variant="contained" 
                color="primary"
                >Add</Button>
               
            </form>
            <p>{newSubcatagory.SubcatagoryName}</p>
            <p>{newSubcatagory.catagoryId}</p>
		</Grid>
    )
}

export default AddsubCat;