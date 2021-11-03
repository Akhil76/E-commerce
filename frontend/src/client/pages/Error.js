import React from 'react';
import {Typography,Grid} from '@material-ui/core';




class Error extends React.Component{
    render(){
        return(
            <div className="client_page">
                <Grid direction="row" justifyContent="flex-start" container>
                    <Typography variant="h6">404 Not Found!</Typography>
                </Grid>
            </div>
        )
    }
}






export default Error ;