import React from 'react';
import {Box, TextField, Toolbar,Typography,Button,Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import {login} from '../../statemanager/actions/auth';


const customStyles = {
    title:{
        background:"#c5cae9",
        marginBottom:"20px"
    }
}


class Login extends React.Component{

    state={
        Username:"",
        Password:"", 
    }

    changeHandler =event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    

    submitHandler =event=>{
        event.preventDefault()
        this.props.login({
            Username:this.state.Username,
            Password:this.state.Password
        },this.props.history);
       
    }
   

    render(){
        const {Username,Password} = this.state;
        
        return(
        
            <div className="client_page">
                <Grid container>
                   <Box style={{
                    display:"block",
                    marginLeft: "auto",
                    marginRight:"auto",
                    width:"26%",
                    marginTop:"200px",
                    marginBottom:"200px"
                    }}>
                      <Typography 
                      style={customStyles.title} 
                      variant="h6" 
                      align="center"
                      >Admin Login</Typography>
                      <form onSubmit={this.submitHandler}>
                          <div style={{marginBottom:"20px"}}>
                              <TextField
                              fullWidth
                              label="Username" 
                              variant="outlined"
                              name="Username"
                              value={Username}
                              onChange={this.changeHandler}
                              />
                          </div>
                          <div style={{marginBottom:"20px"}}>
                              <TextField
                              fullWidth
                              type="password"
                              label="Password" 
                              variant="outlined"
                              name="Password"
                              value={Password}
                              onChange={this.changeHandler}
                              />
                          </div>
                          <Button
                          style={{textTransform:"none"}}
                          fullWidth
                          type="submit"
                          variant="contained"
                          color="primary"
                          >Sign in</Button>
                      </form>
                   </Box>
                </Grid>
            </div>
        )
    }
}



export default connect(null,{login}) (Login);