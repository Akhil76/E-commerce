import React from "react";
import {Button, Divider, Grid,Toolbar,Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        height:"350px",
        background: "white",
        borderRadius:"5px",
        border:"3px solid #EAEDED"
    },
    img:{
        display:"inline-flex",
        height:"170px",
        width:"170px",

    },
    title:{
        color:"black"
    },
    cardDescription:{
        paddingLeft:"10px",
        height:"100px"
    },
    Toolbar:{
       paddingLeft: "10px",
      
    },
    btnlink:{
        
        textDecoration:"none"
    }
    
  }));

function Card(props){
    const classes = useStyles();
    
    return(
       <Grid className={classes.root} item xs={12} sm={6} md={3}>
          <NavLink to={"/productdetails/"+props.id}>
            <div className={classes.img}>
                <img alt="ProductImg" src={"../uploads/"+props.Img}/> 
            </div>
          </NavLink>
          <div className={classes.cardDescription}>
            <Divider/>
            <Typography variant="h6">{props.ProductName}</Typography>
            <Divider/>
            <Typography variant="h6" color="error">Price:{props.Price}</Typography>
            <Divider/>
          </div>
          <Toolbar className={classes.Toolbar}>
              <NavLink className={classes.btnlink} to={"/productdetails/"+props.id}><Button variant="contained" color="primary">Details</Button></NavLink>
              <Button variant="contained">Add to Cart</Button>
          </Toolbar>
       </Grid>
    )
}

export default Card;