import React, { useEffect, useState } from 'react';
import { makeStyles,Grid,Paper,Toolbar,Typography, Button } from '@material-ui/core';
//import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { customerlogin } from '../../statemanager/actions/customer_auth';
import { cartItem } from '../../statemanager/actions/cart';


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

function Cart() {
    const classes = useStyles();
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
                                    // <Card
                                    // id={CartItems._id}
                                    // ProductName={CartItems.ProductName}
                                    // Price={CartItems.Price}
                                    // Img={CartItems.ProductImg}
                                    // />
                                    <Grid className={classes.product_area} item xs={12} sm={12} md={12}>
                                        <Paper>
                                            <Toolbar>
                                                <div className={classes.img}>
                                                    <img alt="ProductImg" src={"../uploads/"+CartItems.ProductImg}/>
                                                </div>
                                                <Typography style={{width:"200px"}}>{CartItems.ProductName}</Typography>
                                                <Typography style={{width:"200px"}}>BDT:{CartItems.Price}Tk.</Typography>
                                                <Button style={{textTransform: 'none'}} variant="contained" color="primary">Details</Button>
                                                <Button style={{textTransform: 'none'}} variant="contained" color="primary">Buy</Button>
                                                <Typography style={{width:"200px",marginLeft:"20px"}}>Qty:01</Typography>
                                                <Button style={{marginLeft:'auto',textTransform: 'none'}} variant="contained" color="primary">Remove</Button>
                                            </Toolbar>
                                        </Paper>
                                        
                                    </Grid>
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