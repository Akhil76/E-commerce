import React,{useEffect} from 'react';
import {Grid,Typography,Button,makeStyles,Paper} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {allcustomer} from '../../statemanager/actions/customer';

const useStyles = makeStyles((theme)=>({
  btn:{
    textTransform:"none"
  }
}))



export default function ProductTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customers = useSelector((state)=>state.customer.items);
  
  useEffect(()=>{
    dispatch(allcustomer());
},[]);
  return (
      <div>
          <Grid>
              <Typography>All customers</Typography>
                {
                    customers.map((customer)=>(
                    <Paper>
                        <Typography>{customer.FirstName} {customer.LastName}</Typography>
                        <Typography>{customer.Phone}</Typography>
                    </Paper>
                    ))
                }
          </Grid>
      </div>
  );
}