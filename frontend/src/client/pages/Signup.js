import React from 'react';
import { Button,Box,TextField } from '@material-ui/core';



function Signup(){
   
        return(
            <div className="client_page">
                    <Box
                    style={{
                        display:"block",
                        marginLeft: "auto",
                        marginRight:"auto",
                        width:"60%",
                        marginTop:"20px"
                        }}
                    >
                        <form>
                        <div style={{marginBottom:"20px",marginTop:"20px"}}>
                            <TextField
                            fullWidth
                            style={{marginRight:"20px",marginBottom:"20px"}}
                            label="First Name" 
                            variant="outlined"
                            />
                            <TextField
                            fullWidth
                            label="Last Name" 
                            variant="outlined"
                            />
                        </div>
                       
                        <div style={{marginBottom:"20px"}}>
                            <TextField
                            fullWidth
                            label="UserName" 
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
                            label="Address" 
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
                        </form>
                    </Box>
                 
            </div>
        )
}




export default Signup ;