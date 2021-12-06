import React, { useEffect, useState } from 'react';
import { Grid,Paper,Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { customerlogin } from '../../statemanager/actions/customer_auth';
import { cartItem } from '../../statemanager/actions/cart';
import Cartitem from '../components/Cartitem';




function Cart() {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customer_auth.customer);
    const cart = useSelector((state) => state.cart.items);
    const [customerid, setCustomerid] = useState(customer.Id);
    
    useEffect(() => {
        dispatch(customerlogin());
        dispatch(cartItem(customerid));
    }, [cartItem(customerid)]);


    return (
        <div className="client_page">
            <Typography variant="h6">Your cart:</Typography>
            {
                cart.map((item) =>
                    <div>
                        <Paper style={{marginBottom:"5px",padding:"10px"}}>
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

        </div>
    )
}




export default Cart;