import React from 'react';
import { Button, Grid, TextField, Typography,Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';



class Signin extends React.Component{
   
    render(){
        return(
            <div className="client_page">
                <Grid direction="row" justifyContent="flex-start" container>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6">Sign in</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <div>
                        <div>
                            <TextField
                            label="Username" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Password" 
                            variant="outlined"
                            />
                        </div>
                        <Button variant="contained" color="primary">Sign in</Button>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Toolbar>
                      <Typography variant="h6">If you are new, sign up here.</Typography>
                        <Link to='/signup'>
                            <Button variant="contained" color="primary">Sign up</Button>
                        </Link>
                    </Toolbar>
                  </Grid>
                </Grid>
            </div>
        )
    }
}




export default Signin ;