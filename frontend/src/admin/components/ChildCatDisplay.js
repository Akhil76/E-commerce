import React,{useEffect} from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import {catagorySetting} from '../../statemanager/actions/catagorySetting';


const useStyles = makeStyles((theme)=>({

    root:{
        background:"#e0e0e0"
    },
	Title:{
		background:"#69f0ae",
        paddingLeft:"10px"
	},
    mainCatTitle:{
        background:"#b0bec5",
        paddingLeft:"10px"
    },
    SubCatTitle:{
        paddingLeft:"10px",
        background:"#b0bec5",
        borderBottom:"1px solid white"
    },
    childCatTitle:{
        background:"#69f0ae",
        paddingLeft:"10px",
        borderBottom:"1px solid white"
    },
    content:{
        paddingLeft:"10px"
    }
}))

function ChildCatDisplay(){
  const classes = useStyles();

  const dispatch = useDispatch();
  const catagories = useSelector((state)=>state.catagorySetting.items);

  useEffect(()=>{
      dispatch(catagorySetting());
  },[catagorySetting()]);
 
    return(
        <Grid className={classes.root} xs={12} sm={12} md={6}>
			<Typography className={classes.Title} variant="h6">Child Categories</Typography>
			<div className={classes.content}>
				{
                    catagories.map((mainCat)=>(
                        <div>
                            {/* <Typography className={classes.mainCatTitle} variant="h6">{mainCat.CatagoryName}</Typography> */}
                            {
                                mainCat.Subcatagory.map((SubCat)=>(
                                    <div>
                                        <Typography className={classes.SubCatTitle} variant="h6">{SubCat.SubcatagoryName}</Typography>
                                        {
                                            SubCat.Subcatagory_two.map((childCat)=>(
                                                <div>
                                                    <Typography className={classes.childCatTitle} variant="h6">{childCat.Subcatagory_twoName}</Typography>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }			
			</div>
			
		</Grid>
    )
}

export default ChildCatDisplay;