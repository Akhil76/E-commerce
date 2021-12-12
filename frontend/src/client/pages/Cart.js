import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customerlogin } from '../../statemanager/actions/customer_auth';
import { cartItem } from '../../statemanager/actions/cart';
import Cartitem from '../components/Cartitem';




function Cart() {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customer_auth.customer);
    const signed_in = useSelector((state) => state.customer_auth.isAuthenticated);
    const cart = useSelector((state) => state.cart.items);
    const [customerid, setCustomerid] = useState(customer.Id);

    useEffect(() =>{
        dispatch(customerlogin());
        dispatch(cartItem(customerid));
    }, []);
    

    return (
        <div className="client_page">
            {
                signed_in ?
                    <div>
                        <Typography variant="h6">Your cart:</Typography>
                        
                        {
                            cart.map((item) =>
                                <div>
                                    <Paper style={{ marginBottom: "5px", padding: "10px" }}>
                                        <Typography>Name: {item.UserName} {item.LastName}</Typography>
                                        <Typography>Email: {item.Email}</Typography>
                                        <Typography>Your id: {item._id}</Typography>
                                        <Typography>Products in your cart : ({item.CartItems.length})</Typography>
                                    </Paper>
                                    <Grid direction="row" justifyContent="flex-start" container>
                                        {
                                            item.CartItems.map((CartItems) =>
                                                <Cartitem
                                                    itemid={CartItems._id}
                                                    ProductId={CartItems.ProductId}
                                                    ProductName={CartItems.ProductName}
                                                    ProductImg={CartItems.ProductImg}
                                                    Price={CartItems.Price}
                                                />
                                            )
                                        }
                                    </Grid>
                                </div>
                            )
                        }
                    </div> :
                    <div>
                        <Typography variant="h6">Your Cart:</Typography>
                        <Paper style={{padding:"20px"}}> 
                            <Typography variant="h2">Your cart is empty</Typography>
                            <Typography>Sign in to see the items you added previously</Typography>
                            <NavLink 
                            to='/signin'
                            style={{textDecoration:"none" }}
                            >
                                <Button 
                                style={{ textTransform: "none",textDecoration:"none"}}
                                variant="contained"
                                color="secondary"
                                >Sign in to your account</Button>
                            </NavLink>
                            <Typography 
                            style={{paddingTop:"20px" }}
                            >Don't have an account ?
                                <NavLink 
                                style={{textDecoration:"none" }}
                                to='/signup'
                                >
                                    <Button 
                                    style={{ textTransform: "none"}}
                                    variant="contained"
                                    color="primary"
                                    >Sign up</Button>
                                </NavLink>
                            </Typography>
                        </Paper>
                    </div>
            }
        </div>
    )
}



export default Cart;