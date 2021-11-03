import React from 'react';
import { Button, Grid, Typography,TextField } from '@material-ui/core';



class Signup extends React.Component{
   
    render(){
        return(
            <div className="client_page">
                <Grid direction="row" justifyContent="flex-start" container>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6">Register please.</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <div>
                        <div>
                            <TextField
                            label="First Name" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Last Name" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Phone" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Email" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Password" 
                            variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField
                            label="Confirm Password" 
                            variant="outlined"
                            />
                        </div>
                        <Button variant="contained" color="primary">Sign up</Button>
                    </div>
                  </Grid>
                </Grid>
            </div>
        )
    }
}




export default Signup ;