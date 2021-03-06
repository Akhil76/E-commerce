import React from "react";
import { Button, Container, Grid,Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Search from '../Search';
import { useDispatch, useSelector } from 'react-redux';
import {customerlogout } from '../../../statemanager/actions/customer_auth';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100px",
        background: "rgb(0, 30, 60)",
    },
    title_area:{
        marginTop:"20px",
    },
    title:{
        color:"white",
        // padding:"30px",
    } ,
    title_link:{
        textDecoration:"none"
    },
    cart:{
       marginLeft:"auto",
       display:"table"
       
    },
    btnlink:{
        textDecoration:"none",
       
    },
    btn:{
        textTransform:"none",
        color: "white",
        border: "1px solid wheat",   
    },
    
  }));

function Header(){
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const Authenticated = useSelector((state) => state.customer_auth.isAuthenticated);
    

    return(
        <div className={classes.root}>
            <Container>
                <Grid direction="row" justifyContent="flex-start" container>
                    <Grid item xs={12} sm={3} md={3}>
                        <Toolbar className={classes.title_area}>
                            <Link className={classes.title_link} to="/">
                                <Typography className={classes.title} variant="h6">E-commerce Site</Typography>
                            </Link>
                        </Toolbar>     
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Search/>   
                    </Grid> 
                    <Grid item xs={12} sm={3} md={3}>
                        <div className={classes.cart}>
                            <Link className={classes.btnlink} to="/cart">
                                <Button 
                                className={classes.btn} 
                                variant="outlined" 
                                color="secondary" 
                                startIcon={<AddShoppingCartIcon />}>Cart</Button>
                            </Link>
                            {
                            Authenticated?
                            <Button
                            className={classes.btn} 
                            variant="outlined" 
                            color="secondary"
                            onClick={()=>{dispatch(customerlogout(history))}}
                            >Sign out</Button>:
                            <Link className={classes.btnlink} to="/signin">
                                <Button 
                                className={classes.btn} 
                                variant="outlined" 
                                color="secondary">Sign in</Button>
                            </Link>
                            }
                        </div>
                    </Grid>
                    
                </Grid>
            </Container>
        </div>
    )
}

export default Header;