import React,{ useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid, TextField, Typography,Button} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {mainCatagory,subcatagory} from "../../statemanager/actions/catagorySelect";
import {addchildcatagory} from '../../statemanager/actions/catagory';


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
        width:"100px"
    }
}))


function AddChildCat(){
    const classes = useStyles();
    const dispatch = useDispatch();
   
    const Maincatagories = useSelector((state)=>state.catagorySelect);
    const Subcatagories = useSelector((state)=>state.subcatagorySelect);

    useEffect(()=>{
        dispatch(mainCatagory());
    },[]);

   

    const initialState = {
        childcatagoryName:"",
        catagoryId:"",
        subcatagoryId:""

    };

    const[newchildCat,setNewchildCat] = useState(initialState);

    useEffect(()=>{
        dispatch(subcatagory(newchildCat.catagoryId))
    },[newchildCat.catagoryId]);

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(addchildcatagory(newchildCat));
        setNewchildCat({
            childcatagoryName:"",
            catagoryId:"",
            subcatagoryId:""
        })
    }

   

    return(
        <Grid className={classes.root} xs={12} sm={12} md={6}>
			<Typography className={classes.Title} variant="h6">Add Child category</Typography>
            <form className={classes.form} onSubmit={submithandler}>
                <input
                className={classes.inputF} 
                placeholder="Add Child Category"
                Name="childcatagoryName"
                value={newchildCat.childcatagoryName}
                onChange={(e)=>setNewchildCat({...newchildCat,childcatagoryName:e.target.value})}
                />
                <div>
                    <label for="SubCatagory">Select a main category: </label>
                    <select className={classes.select} Name="catagoryId" value={newchildCat.catagoryId} onChange={(e)=>setNewchildCat({...newchildCat,catagoryId:e.target.value})}>
                        <option value="">Select one</option>
                        {Maincatagories.map((mainCat)=>(<option value={mainCat._id}>{mainCat.CatagoryName}</option>))}
                    </select>
                </div>
                <div>
                    <label for="SubCatagory">Select a sub category: </label>
                    <select className={classes.select} Name="subcatagoryId" onChange={(e)=>setNewchildCat({...newchildCat,subcatagoryId:e.target.value})}>
                        <option value="">Select one</option>
                        {Subcatagories.map((subCat)=>(<option value={subCat._id}>{subCat.SubcatagoryName}</option>))}
                    </select>
                </div>
                <Button  
                type="submit" 
                variant="contained" 
                color="primary"
                >Add</Button>
               
            </form>
            <p>{newchildCat.childcatagoryName}</p>
            <p>{newchildCat.catagoryId}</p>
            <p>{newchildCat.subcatagoryId}</p>
		</Grid>
    )
}

export default AddChildCat;