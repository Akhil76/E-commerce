import React, { useEffect, useState } from 'react';
import { makeStyles,Grid,Paper,Toolbar,Typography, Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { delCartItem } from '../../statemanager/actions/cart';

const useStyles = makeStyles((theme) => ({
    product_area:{
        marginBottom:"10px"
    },
    img:{
        display:"inline-flex",
        height:"100px",
        width:"150px",
        overflow:"auto",
        margin:"5px"
        
    },
    
    
  }));


function Cartitem(props){
    const classes = useStyles();
    const dispatch =useDispatch();
    const customer = useSelector((state) => state.customer_auth.customer);


    const [id,setId] = useState(customer.Id);
    const [product,setProduct] = useState({
        itemid:props.itemid,
        ProductId:props.ProductId
    });
    
    return (
        <Grid className={classes.product_area} item xs={12} sm={12} md={12}>
            <Paper>
                <Toolbar>
                    <div className={classes.img}>
                        <img alt="ProductImg" src={"../uploads/" + props.ProductImg} />
                    </div>
                    
                    <Typography style={{ width: "200px" }}>{props.ProductName}</Typography>
                    <Typography style={{ width: "200px" }}>BDT:{props.Price}Tk.</Typography>
                    <NavLink className={classes.btnlink} to={"/productdetails/" + props.ProductId}>
                        <Button
                            style={{ textTransform: 'none' }}
                            variant="contained"
                            color="primary"
                        >Details</Button>
                    </NavLink>
                    <Button style={{ textTransform: 'none' }} variant="contained" color="primary">Buy</Button>
                    <Typography style={{ width: "200px", marginLeft: "20px" }}>Qty:01</Typography>
                    <Button
                    style={{ marginLeft: 'auto', textTransform: 'none' }}
                    variant="contained"
                    color="primary"
                    onClick={()=>dispatch(delCartItem(id,product))}   
                    >Remove</Button>
                </Toolbar>
            </Paper>
        </Grid>
    )
}

export default Cartitem;