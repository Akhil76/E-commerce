import React,{useEffect} from "react";
import { Container,Divider,Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { fetch_catagory } from '../../../statemanager/actions/catagory';
import { useDispatch,useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footer_area:{
        minHeight:"80px",
        background: "rgb(0, 30, 60)",

    },
    title:{
        color:"white"
    },
    footerNav:{
       
    },
    link:{
        textDecoration:"none",
        color:'white'
    },
    customli:{
        listStyle:'none'
    },
    footeTitle:{
        color:'white'
    }
    
  }));

function Footer(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const maincategory = useSelector((state)=>state.catagory.items);

    useEffect(()=>{
		dispatch(fetch_catagory());
	},[]);
    return(

        <div className={classes.footer_area}>
            <Container>
                <Grid direction="row" justifyContent="flex-start" container>
                    <Grid>
                        <div className={classes.footerNav}>
                            {
                            maincategory.map((category)=>
                            <ul className={classes.customli}>
                                <li><Link className={classes.link} to={"/catagory/"+category._id}>{category.CatagoryName}</Link></li>
                            </ul>
                            )
                            }
                        </div>    
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Divider/>
                        <Typography className={classes.footeTitle} align='center' paragraph >E-commerce site</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer;