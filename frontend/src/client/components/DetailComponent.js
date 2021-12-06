import React,{useEffect,useState} from 'react';
import { Typography, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {addtoCart} from '../../statemanager/actions/cart';
import {customerlogin} from '../../statemanager/actions/customer_auth';
import { useDispatch,useSelector } from "react-redux";



const useStyles = makeStyles((theme) => ({
    root: {
        background: "#EAEDED"
    },
    img: {
        display: "inline-flex",
        height: "500px",
        width: "500px",
    },
    Toolbar: {

    }
}));

function DetailComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const customer = useSelector((state)=>state.customer_auth.customer);
    
    useEffect(()=>{
        dispatch(customerlogin());
      },[]);

    const [product,setProduct] = useState({
        ProductId:props.id,
        ProductName:props.ProductName,
        ProductImg:props.ProductImg,
        Price:props.Price
      });
    return (
        <div className={classes.root}>
            <Typography variant="h6">Product Details</Typography>
            <div>
                <div className={classes.img}>
                    <img alt="ProductImg" src={"../uploads/" + props.ProductImg} />
                </div>
                <Typography variant="h5" >Product Name:{props.ProductName}</Typography>
                <Typography variant="h6" >Price:{props.Price}</Typography>
                <Typography variant="h6">Description: {props.Description}</Typography>
                <Toolbar className={classes.Toolbar}>
                    <Button variant="contained" color="primary">Buy Now</Button>
                    <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>{dispatch(addtoCart(customer.Id,product))}}
                    >Add to Cart</Button>
                </Toolbar>
            </div>
        </div>
    )
}

export default DetailComponent;