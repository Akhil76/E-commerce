import React from 'react';
import { Button,Box,Grid, Typography,TextField } from '@material-ui/core';



class Signup extends React.Component{
   
    render(){
        return(
            <div className="client_page">
                <Grid direction="row" justifyContent="flex-start" container>
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h6">Register please.</Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <Box>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="First Name" 
                            variant="outlined"
                            />
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="Last Name" 
                            variant="outlined"
                            />
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="Phone" 
                            variant="outlined"
                            />
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="Email" 
                            variant="outlined"
                            />
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="Password" 
                            variant="outlined"
                            />
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="Confirm Password" 
                            variant="outlined"
                            />
                        </div>
                        <Button variant="contained" color="primary">Sign up</Button>
                    </Box>
                  </Grid>
                </Grid>
            </div>
        )
    }
}




export default Signup ;