import React from "react";
import { Button, Container, Grid,Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100px",
        background: "rgb(0, 30, 60)",
    },
    title:{
        color:"white",
        padding:"30px",
       
    } ,
    title_link:{
        textDecoration:"none"
    },
    toolbar:{
        marginLeft:'190px',
    },
    btnlink:{
        textDecoration:"none"
    },
    btn:{
        textTransform:"none",
        color: "white",
        border: "1px solid wheat",
        
    }
  }));

function Header(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container>
                <Grid direction="row" justifyContent="flex-start" container>
                    <Grid item xs={12} sm={8} md={8}>
                        <Toolbar>
                            <Link className={classes.title_link} to="/">
                                <Typography className={classes.title} variant="h6">E-commerce Site</Typography>
                            </Link>
                        </Toolbar>
                                    
                    </Grid> 
                    <Grid item xs={12} sm={4} md={4}>
                        <div className={classes.toolbar}>
                            <Link className={classes.btnlink} to="/cart">
                                <Button 
                                className={classes.btn} 
                                variant="outlined" 
                                color="secondary" 
                                startIcon={<AddShoppingCartIcon />}>Cart</Button>
                            </Link>
                            <Link className={classes.btnlink} to="/signin">
                                <Button 
                                className={classes.btn} 
                                variant="outlined" 
                                color="secondary">Sign in</Button>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Header;