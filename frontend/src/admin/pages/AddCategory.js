import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import AddMainCat from '../components/AddMainCat';
import AddsubCat from '../components/AddsubCat';
import MainCatDisplay from '../components/MainCatDisplay';
import SubCatDisplay from '../components/SubCatDisplay';
import ChildCatDisplay from'../components/ChildCatDisplay';
import AddChildCat from '../components/AddChildCat';


const useStyles = makeStyles((theme)=>({
	pageTitle:{
		background:"#cfd8dc"
	}
}))
  
function AddCategory(){
	const classes = useStyles();
		return(
			<div>
				<Typography className={classes.pageTitle} variant="h6" align="center">Add Category</Typography>
				<Grid direction="row" justifyContent="flex-start" container>
					<AddMainCat/>
					<MainCatDisplay/>
				</Grid>
				<Typography className={classes.pageTitle} variant="h6" align="center">Add Sub Category</Typography>
				<Grid direction="row" justifyContent="flex-start" container>
					<AddsubCat/>
					<SubCatDisplay/>
				</Grid>
				<Typography className={classes.pageTitle} variant="h6" align="center">Add Child Category</Typography>
				<Grid direction="row" justifyContent="flex-start" container>
					<AddChildCat/>
					<ChildCatDisplay/>
				</Grid>
			</div>
		)
}



export default AddCategory;