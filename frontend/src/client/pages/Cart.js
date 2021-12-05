import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { customerlogin } from '../../statemanager/actions/customer_auth';
import { cartItem } from '../../statemanager/actions/cart';


function Cart() {
    const dispatch = useDispatch();
    const customer = useSelector((state) => state.customer_auth.customer);
    const cart = useSelector((state) => state.cart.items);
    const [customerid, setCustomerid] = useState(customer.Id);

    useEffect(() => {
        dispatch(customerlogin());
        dispatch(cartItem(customerid));
    }, []);

    return (
        <div className="client_page">
            <Typography>Your cart:</Typography>
            {
                cart.map((item) =>
                    <div>
                        <Typography>{item.UserName} {item.LastName}</Typography>
                        <Typography>Your id: {item._id}</Typography>
                        <Typography>Products in your cart : {item.CartItems.length}</Typography>
                        <Grid direction="row" justifyContent="flex-start" container>
                            {
                                item.CartItems.map((CartItems) =>
                                    <Card
                                    id={CartItems._id}
                                    ProductName={CartItems.ProductName}
                                    Price={CartItems.Price}
                                    Img={CartItems.ProductImg}
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