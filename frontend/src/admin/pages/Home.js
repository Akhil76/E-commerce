import React,{useEffect} from 'react';
import { Grid} from '@material-ui/core';
import ProductTable from '../components/ProductTable';
import DashboardCard from '../components/DashboardCard';
import Customer from '../components/Customer';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { editProductDisplay} from '../../statemanager/actions/product';
import {allcustomer} from '../../statemanager/actions/customer';

  
function Home(){
	const dispatch = useDispatch();
  	const products = useSelector((state)=>state.products.items);
	const customers = useSelector((state)=>state.customer.items);
  
  	useEffect(()=>{
		dispatch(editProductDisplay());
		dispatch(allcustomer())
	},[]);
		
	return(
		<Router>
			<div>
				<Grid style={{paddingBottom:"30px"}} direction="row" justifyContent="flex-start" container>
					<DashboardCard title="All products" number={products.length} link="/admin"/>
					<DashboardCard title="Customers"  number={customers.length} link="/admin/customer"/>
					<DashboardCard title="Orders"  number="77"/>
					<DashboardCard title="Pendings"  number="17"/>
				</Grid>
				<Grid style={{paddingBottom:"30px"}} direction="row" justifyContent="flex-start" container>
					<Switch>
						<Route path="/admin/customer" component={Customer}/>
						<Route path="/admin" component={ProductTable}/>
					</Switch>
				</Grid>
			</div>
		</Router>
		)
	}




export default Home;