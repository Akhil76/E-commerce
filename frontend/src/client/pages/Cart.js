import React,{useEffect, useState} from 'react';
import { Grid, Typography,Button } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {cartItem} from '../../statemanager/actions/cart';



function Cart(){
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);

    const[customerid,setCustomerid] = useState("");

    const changeHandler =e=>{
        setCustomerid(e.target.value)
    };

    const submithandler=e=>{
        e.preventDefault();
        dispatch(cartItem(customerid));
    }

    useEffect(()=>{
      dispatch(cartItem());
    },[]);

     return(
         <div className="client_page">
            <Grid direction="row" justifyContent="flex-start" container>
                <Typography variant="h6">Your cart</Typography>
                <form onSubmit={submithandler}>
                    <input
                    Name="customerid"
                    type="text"
                    placeholder="customerid"
                    value={customerid}
                    onChange={changeHandler}
                    // onChange={(e)=> setCustomerid(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary">Search</Button>
                </form>
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
        </div>
        )
}




export default Cart ;