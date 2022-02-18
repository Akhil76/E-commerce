import React, { useEffect } from 'react';
import { Grid, Typography, Button, makeStyles, Paper, TableContainer, Table, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { allcustomer } from '../../statemanager/actions/customer';

const useStyles = makeStyles((theme) => ({
  btn: {
    textTransform: "none"
  }
}))



export default function Customer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.items);

  useEffect(() => {
    dispatch(allcustomer());
  }, []);
  return (

    <TableContainer component={Paper}>
      <Typography style={{ background: "wheat", padding: "5px" }} variant="h5">All customers</Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
        {
          customers.map((customer) =>
            <TableBody>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>


                <TableCell component="th" scope="row">
                  {customer.FirstName} {customer.LastName}
                </TableCell>
                <TableCell align="left">{customer.Phone}</TableCell>
                <TableCell align="left">{customer.Email}</TableCell>
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