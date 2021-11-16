import React,{useEffect,useState} from 'react';
import {Grid,Typography,Button,Toolbar} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux';
import {catagorySetting} from '../../statemanager/actions/catagorySetting';
import {deleteMainCat,deleteSubCat,deleteChildCat} from '../../statemanager/actions/catagory';
import EditMainCat from '../components/modals/EditMainCat';
import EditSubCat from '../components/modals/EditSubCat';
import EditChildCat from '../components/modals/EditChildCat';

const useStyles = makeStyles((theme)=>({
	
	pageTitle:{
		background:"#cfd8dc"
	},
	Title:{
		background:"#69f0ae",
		minHeight: "45px",
		paddingRight:"90px"
	},
	
	mainCat_area:{
		background:"#b2dfdb",
	},
	mainCat:{
		borderBottom:"1px solid white",
		minHeight: "42px"
	},
	subCat_area:{
		background:"#bdbdbd",
		marginLeft:"20px"
	},
	subCat:{
		minHeight: "42px",
		borderBottom:"1px solid white",
	},
	childCat_area:{
		background:"#81c784",
		marginLeft:"20px"
	},
	childCat:{
		minHeight: "42px",
		borderBottom:"1px solid white",
	}

}))
  
function ManageCat(){
	const classes = useStyles();
	const dispatch = useDispatch();
	const catagories = useSelector((state)=>state.catagorySetting.items);

	useEffect(()=>{
		dispatch(catagorySetting());
	},[catagorySetting()]);


	const [id,setId] = useState("");


	const [open, setOpen] = useState(false);
	
  	const handleOpen = (id) => {
		setId(id);
		setOpen(true);
	};
	const handleOpen2 = (id) => {
		setId(id);
		setOpen(true);
	};
	const handleOpen3 = (id) => {
		setId(id);
		setOpen(true);
	};
	  
  	const handleClose = () => setOpen(false);

		return(
			<div>
				<Typography className={classes.pageTitle} variant="h6" align="center">Edit Category</Typography>
				<Grid direction="row" justifyContent="flex-start" container>
					<Grid xs={12} sm={12} md={12}>
						<Toolbar className={classes.Title}>
							<Typography  variant="h6" >All Categories</Typography>
							<Typography style={{marginLeft:"auto"}} variant="h6" >Actions</Typography>
						</Toolbar>
							{
							catagories.map((mainCat)=>(
								<div className={classes.mainCat_area}>
									<Toolbar className={classes.mainCat}>
										<Typography variant="h6">{mainCat.CatagoryName}</Typography>
										<div style={{marginLeft:"auto"}}>
											<Button 
											style={{textTransform:'none',marginRight:"5px"}}
											variant="contained" 
											color="primary" 
											startIcon={<EditIcon />}
											onClick={()=>{handleOpen(mainCat._id)}}
											>Edit
											</Button>
											<Button 
											style={{textTransform:'none'}} 
											variant="outlined"  
											color="primary" 
											startIcon={<DeleteIcon />}
											onClick={()=>dispatch(deleteMainCat(mainCat._id))}
											>
												Delete
											</Button>
											{id === mainCat._id?
											<EditMainCat
											open={open}
											setOpen={setOpen}
											onClose={handleClose}
											maincategory={mainCat}
											/>:null
											}
										</div>
									</Toolbar>
										{
										mainCat.Subcatagory.map((SubCat)=>(
											<div className={classes.subCat_area}>
												<Toolbar className={classes.subCat}>
													<Typography variant="h6">{SubCat.SubcatagoryName}</Typography>
													<div style={{marginLeft:"auto"}}>
														<Button 
														style={{textTransform:'none',marginRight:"5px"}} 
														variant="contained" color="primary" 
														startIcon={<EditIcon />}
														onClick={()=>{handleOpen2(SubCat._id)}}
														>
															Edit
														</Button>
														<Button 
														style={{textTransform:'none'}} 
														variant="outlined"  
														color="primary" 
														startIcon={<DeleteIcon />}
														onClick={()=>dispatch(deleteSubCat(SubCat._id))}
														>
															Delete
														</Button>
														{id===SubCat._id?
														<EditSubCat
														open={open}
														setOpen={setOpen}
														onClose={handleClose}
														subcategory={SubCat}
														/>:null
														}
														</div>
												</Toolbar>
													{
														SubCat.Subcatagory_two.map((childCat)=>(
															<div className={classes.childCat_area}>
																<Toolbar className={classes.childCat}>
																	<Typography variant="h6">{childCat.Subcatagory_twoName}</Typography>
																	<div style={{marginLeft:"auto"}}>
																		<Button 
																		style={{textTransform:'none',marginRight:"5px"}} 
																		variant="contained" color="primary" 
																		startIcon={<EditIcon />}
																		onClick={()=>{handleOpen3(childCat._id)}}
																		>
																			Edit
																		</Button>
																		<Button 
																		style={{textTransform:'none'}} 
																		variant="outlined"  
																		color="primary" 
																		startIcon={<DeleteIcon />}
																		onClick={()=>dispatch(deleteChildCat(childCat._id))}
																		>
																			Delete
																		</Button>
																		{id===childCat._id?
																		<EditChildCat
																		open={open}
																		setOpen={setOpen}
																		onClose={handleClose}
																		Childcategory={childCat}
																		/>:null	
																		}
																	</div>
																</Toolbar>
															</div>
														))
													}
											</div>

											))
										}
								</div>
								))
							}			
					</Grid>
				</Grid>
			</div>
		)
}



export default ManageCat;