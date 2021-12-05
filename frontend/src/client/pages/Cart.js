import React,{useEffect, useState} from 'react';
import { Grid, Typography,Button } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {customerlogin} from '../../statemanager/actions/auth';
import {cartItem} from '../../statemanager/actions/cart';


function Cart(){
    const dispatch = useDispatch();
    const customer = useSelector((state)=>state.auth.customer);
    const cart = useSelector((state)=>state.cart.items);
    const[customerid,setCustomerid] = useState(customer.Id);

    useEffect(()=>{
      dispatch(customerlogin());
      dispatch(cartItem(customerid));
    },[]);

     return(
         <div className="client_page">
            <Grid direction="row" justifyContent="flex-start" container>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6">Your cart</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography>{customer.FirstName} {customer.LastName}</Typography>
                    <Typography>{customer.Email}</Typography>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                {
                    cart.map((item)=>
                        <div>
                            <p>{item._id}</p>
                            <p>{item.UserName} {item.LastName}</p>
                            <p>Products in your cart : {item.CartItems.length}</p>
                            <div>{item.CartItems.map((CartItems)=>
                            <div style={{border: "1px solid"}}>
                                <p>Product Name :{CartItems.ProductName}</p>
                                <p>Price : {CartItems.Price}</p>
                            </div>
                            )}</div>
                        </div>
                    )
                }
                </Grid>
            </Grid>    
        </div>
        )
}




export default Cart ;