import React,{useState,useEffect} from "react";
import {Button, Divider, Grid,Toolbar,Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import {addtoCart} from '../../statemanager/actions/cart';
import {customerlogin} from '../../statemanager/actions/customer_auth';
import { useDispatch,useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root:{
        height:"350px",
        background: "white",
        borderRadius:"5px",
        border:"3px solid #EAEDED",
        overflow: "hidden"
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
    const dispatch = useDispatch();
    const customer = useSelector((state)=>state.customer_auth.customer);
    
    useEffect(()=>{
        dispatch(customerlogin());
      },[]);

    const [product,setProduct] = useState({
        ProductId:props.id,
        ProductName:props.ProductName,
        ProductImg:props.Img,
        Price:props.Price
      });

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
              <Button 
              variant="contained"
              onClick={()=>{dispatch(addtoCart(customer.Id,product))}}
              >Add to Cart</Button>
          </Toolbar>
       </Grid>
    )
}

export default Card;