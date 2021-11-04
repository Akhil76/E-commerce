import React,{useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Typography,Button,makeStyles} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useDispatch,useSelector } from 'react-redux';
import {editProductDisplay} from '../../statemanager/actions/product';

const useStyles = makeStyles((theme)=>({
  btn:{
    textTransform:"none"
  }
}))



export default function ProductTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products);
  
  useEffect(()=>{
		dispatch(editProductDisplay());
	},[]);
  
  return (
    <TableContainer component={Paper}>
      <Typography style={{background:"wheat",padding:"5px"}} variant="h5">All Products</Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
       {
         products.map(product=>
          <TableBody>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              

              <TableCell component="th" scope="row">
                {product.ProductName}
              </TableCell>
              <TableCell align="left">{product.ProductImg}</TableCell>
              <TableCell align="left">{product.Price}</TableCell>
              <TableCell align="center">{product.Quantity}</TableCell>
              <TableCell 
              align="center"
              >
                <Button 
                className={classes.btn}
                variant="contained" 
                color="primary"
                >
                  Details
                </Button>
              </TableCell>
          </TableRow>
        </TableBody>
        )
       }
      </Table>
    </TableContainer>
  );
}