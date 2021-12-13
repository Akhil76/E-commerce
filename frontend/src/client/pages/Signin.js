import React from 'react';
import { Button, Grid,TextField,Typography,Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {customerlogin} from '../../statemanager/actions/customer_auth';



const customStyles = {
    title:{
        background:"#c5cae9",
        marginBottom:"20px"
    }
}


class Signin extends React.Component{
    
    state={
        UserName:"",
        Password:"", 
    }

    changeHandler =event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };
    

    submitHandler =event=>{
        event.preventDefault();
        this.props.customerlogin({
            UserName:this.state.UserName,
            Password:this.state.Password
        },this.props.history);
    }
    componentDidMount(){
        customerlogin()
    }
    render(){
        const {UserName,Password} = this.state;
        const {error} = this.props;
        return(
            <div className="client_page">
                <Grid container>
                   <Box style={{
                    display:"block",
                    marginLeft: "auto",
                    marginRight:"auto",
                    width:"26%",
                    marginTop:"100px"
                    }}>
                      <Typography color="error">{error.error}</Typography>
                      <Typography style={customStyles.title} variant="h6" align="center">Sign in</Typography>
                      <form onSubmit={this.submitHandler}>
                          <div style={{marginBottom:"20px"}}>
                              <TextField
                              fullWidth
                              label="Username" 
                              variant="outlined"
                              name="UserName"
                              value={UserName}
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

const mapStateToProps = state => ({
    error: state.customer_auth.error,
  });


export default connect(mapStateToProps,{customerlogin})(Signin);