import React from 'react';
import { Button, Grid, TextField, Typography,Toolbar,Box } from '@material-ui/core';
import { Link } from 'react-router-dom';



class Signin extends React.Component{
   
    render(){
        return(
            <div className="client_page">
                <Grid container>
                   <Box
                   sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                   >
                      <Typography variant="h6" align="center">Sign in</Typography>
                      <div>
                          <div style={{marginBottom:"20px"}}>
                              <TextField
                              fullWidth
                              label="Username" 
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
                          <Button
                          style={{textTransform:"none"}}
                          fullWidth
                          variant="contained"
                          color="primary"
                          >Sign in</Button>
                      </div>
                      <div>
                        <Typography variant="h6">Don't have an account? 
                          <Link to='/signup'>
                              <Button style={{textTransform:"none"}}>Sign up</Button>
                          </Link>
                        </Typography>  
                      </div>
                   </Box>
                </Grid>
            </div>
        )
    }
}




export default Signin ;