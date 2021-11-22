import React,{useState} from "react";
import {Button,Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    search_area:{
        marginTop:"20px",
    },
    searchbtn:{
        textTransform:"none",
        borderRadius: "0px 5px 5px 0px"  
    },
    input:{
        width: "-webkit-fill-available",
        height:"30.5px",
        paddingLeft:"10px"
        
    }
  }));
function Search(){
    const classes = useStyles();
    
    // const[productName,SetProductName] = useState("");

    // const changeHandler =e=>{
    //     SetProductName(e.target.value)
    // };

    // const submithandler=e=>{
    //     e.preventDefault();
       
    // }

    return(
        <Toolbar className={classes.search_area}>
            
                <input 
                className={classes.input}
                type="text"
                placeholder="Search"
                Name="productName"
                // value={productName}
                // onChange={changeHandler} 
                />
                <Button
                className={classes.searchbtn}
                variant="contained"
                color="primary" 
                >Search</Button>
            
        </Toolbar>  
    )
}

export default Search;