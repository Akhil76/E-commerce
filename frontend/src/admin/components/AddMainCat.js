import React,{ useState} from 'react';
import { makeStyles } from '@material-ui/core';
import {Grid, TextField, Typography,Button} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {addcatagory} from '../../statemanager/actions/catagory';


const useStyles = makeStyles((theme)=>({
    root:{
        background:"#e0e0e0"
    },
	Title:{
		background:"#69f0ae"
	},
    form:{
        margin:"10px",  
    },
    inputF:{
        marginBottom:"10px",
    }
}))


function AddMainCat(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const error = useSelector((state)=>state.catagory.error);
    const message = useSelector((state)=>state.catagory.message);
   
    const[newcatagory,setNewcatagory] = useState({
        CatagoryName:""
    });
    
    // const changeHandler =(e)=>{
    //     setNewcatagory({
    //       [e.target.name] : e.target.value
    //     })
    // };

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(addcatagory(newcatagory));
        setNewcatagory({
            CatagoryName:""
        });
    }

    return(
        <Grid className={classes.root} xs={12} sm={12} md={6}>
			<Typography className={classes.Title} variant="h6">Add main category</Typography>
            <Typography>{message.message}</Typography>
            <form className={classes.form} onSubmit={submithandler}>
                {/* <input
                className={classes.inputF} 
                placeholder="Add Category"
                Name="CatagoryName"
                value={newcatagory.CatagoryName}
                onChange={changeHandler}
                /> */}
                <TextField
                fullWidth
                className={classes.inputF} 
                error={error.error}
                helperText={error.error}
                size="small"
                variant="outlined"
                placeholder="Enter a main category name"
                Name="CatagoryName"
                value={newcatagory.CatagoryName}
                onChange={(e)=>setNewcatagory({...newcatagory,CatagoryName:e.target.value})}
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