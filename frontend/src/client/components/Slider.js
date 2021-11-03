import React from 'react';
import {Container} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
   
    slider_img:{
        display:"inline-flex",
        height:"200px",
    }
    
  }));

function Slider(){
    const classes = useStyles();
    return(
        <div>
            <Container>
                <div className={classes.slider_img}>
                    <img alt="ProductImg" src=""/>
                </div>
            </Container>
        </div> 
    )
}

export default Slider;