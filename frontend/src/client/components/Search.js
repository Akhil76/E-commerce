import React,{useState} from "react";
import {Button,Toolbar} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    search_area:{
        marginTop:"20px",
    },
    searchbtn:{
        textTransform:"none",
        borderRadius: "0px 5px 5px 0px"  
    },
    form:{
        
    },
    input:{
        //width: "-webkit-fill-available",
        height:"30.5px",
        paddingLeft:"10px",
        minWidth:"300px"
    }
  }));
function Search(){
    const classes = useStyles();
    const history = useHistory();
    const[productName,SetProductName] = useState("");

    const changeHandler =e=>{
        SetProductName(e.target.value)
    };

    const submithandler=e=>{
        e.preventDefault();
        if(productName!==""){
            history.push(`/searchresult/${productName}`);
        }
    }

    return(
        <Toolbar className={classes.search_area}>
            <form className={classes.form} onSubmit={submithandler}>
                <input 
                className={classes.input}
                required
                type="text"
                placeholder="Search"
                Name="productName"
                value={productName}
                onChange={changeHandler} 
                />
                <Button
                className={classes.searchbtn}
                variant="contained"
                color="primary" 
                type="submit"
                >Search</Button>
                {/* <p>{productName}</p> */}
            </form>
        </Toolbar>  
    )
}

export default Search;