import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root:{
        height:"200px",
        background: "green",
        borderRadius:"8px",
        border:"3px solid #EAEDED",
        
    },
    link:{
        textDecoration:"none",    
        
    },
    title:{
        padding:"10px",
        color:"white"
    },
    number:{
    paddingLeft:"10px"
    }
    
  }));

function DashboardCard(props){
    const classes = useStyles();
    return(
        <Grid  item xs={12} sm={6} md={3}>
            <NavLink className={classes.link} to="#">
                <div className={classes.root}>
                    <Typography className={classes.title} variant="h6">{props.title}</Typography>
                    <div className={classes.number}>
                        <Typography variant="h4" style={{color:"white"}}>{props.number}</Typography>
                    </div> 
                </div>
            </NavLink>
        </Grid>  
    )
}

export default DashboardCard;