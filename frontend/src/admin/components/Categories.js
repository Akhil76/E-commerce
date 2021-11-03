import React,{useEffect,useState} from 'react';
import {Button,List,ListItem,ListItemText,Divider,Collapse,Typography} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useDispatch,useSelector } from 'react-redux';
import {catagorySetting} from '../../statemanager/actions/catagorySetting';
  
function Categories(){
    const [open, setOpen] = useState(true);

	const dispatch = useDispatch();
	const catagories = useSelector((state)=>state.catagorySetting.items);

	useEffect(()=>{
		dispatch(catagorySetting());
	},[]);
	
	return(
		<div>
			<Typography align="center" variant="h5">Settings</Typography>
			<Divider/>
			<Typography style={{background:"wheat"}} variant="h6">All Catagories</Typography>
			{
				catagories.map((mainCat)=>(
					<List style={{background:"grey"}}>
						<ListItem button key={mainCat._id}
						aria-label="expand row"
						size="small"
						onClick={()=>setOpen(!open)}
						>
							<ListItemText>{mainCat.CatagoryName}</ListItemText>
                            {open ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List key={mainCat.CatagoryName}>
                                {
                                mainCat.Subcatagory.map((subCat)=>(
                                    <ListItem button>
                                        <ListItemText color="white">{subCat.SubcatagoryName}</ListItemText>
                                    </ListItem>
                                ))
                                }
                            </List>
                       </Collapse> 
					</List>
				))
			}
			
			{
				catagories.map((mainCat)=><div>
					<Button variant="contained" color="primary">{mainCat.CatagoryName}</Button>
					<div>
						{
							mainCat.Subcatagory.map((sub_cat)=><div><Button variant="outlined" color="error">{sub_cat.SubcatagoryName}</Button>
								{
									sub_cat.Subcatagory_two.map((sub_cat_two)=><div><Button variant="contained" color="secodary">{sub_cat_two.Subcatagory_twoName}</Button></div>)
								}
							</div>
							
							)
						}
					</div>
				</div>)
			}
			
		</div>
	)
}



export default Categories;