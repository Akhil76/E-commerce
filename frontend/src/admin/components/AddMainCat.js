import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid, TextField, Typography,Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addcatagory} from '../../statemanager/actions/catagory';


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
    }
}))


function AddMainCat(){
    const classes = useStyles();


    const dispatch = useDispatch();
   
    const[newcatagory,setNewcatagory] = useState({
        CatagoryName:""
    });

    const changeHandler =(e)=>{
        setNewcatagory({
          [e.target.name] : e.target.value
        })
    };

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(addcatagory(newcatagory));
        setNewcatagory({
            CatagoryName:""
        })
    }

    return(
        <Grid className={classes.root} xs={12} sm={12} md={6}>
			<Typography className={classes.Title} variant="h6">Add main category</Typography>
            <form className={classes.form} onSubmit={submithandler}>
                <input
                className={classes.inputF} 
                placeholder="Add Category"
                Name="CatagoryName"
                value={newcatagory.CatagoryName}
                onChange={changeHandler}
                />
                <br/>
                <Button  
                type="submit" 
                variant="contained" 
                color="primary"
                >Add</Button>
            </form>
            
		</Grid>
    )
}

export default AddMainCat;