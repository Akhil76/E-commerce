import React,{useEffect} from 'react';
import { Grid} from '@material-ui/core';
import ProductTable from '../components/ProductTable';
import DashboardCard from '../components/DashboardCard';
import { useDispatch,useSelector } from 'react-redux';
import { editProductDisplay} from '../../statemanager/actions/product';

  
function Home(){

	const dispatch = useDispatch();
  	const products = useSelector((state)=>state.products.items);
  
  	useEffect(()=>{
		dispatch(editProductDisplay());
	},[]);
		
	return(
			<div>
				<Grid style={{paddingBottom:"30px"}} direction="row" justifyContent="flex-start" container>
					<DashboardCard title="All products" number={products.length}/>
					<DashboardCard title="Orders"  number="77"/>
					<DashboardCard title="Pendings"  number="17"/>
					<DashboardCard title="Customers"  number="57"/>
				</Grid>
				<ProductTable/>
			</div>
		)
	}




export default Home;