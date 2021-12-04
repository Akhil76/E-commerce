import React from 'react';
import {Container, TextField, Toolbar,Typography,Button,Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import {login} from '../../statemanager/actions/auth';


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
        //const {ErrorMsg} = this.props;
        return(
        
            <Container>
                <div
                style={{
                display:"block",
                marginLeft: "auto",
                marginRight:"auto",
                width:"25%",
                marginTop:"200px"
                }}
                >
                    <Toolbar>
                        <Typography variant="h5">Admin Login</Typography>
                        <p></p>
                    </Toolbar> 
                    {/* <div>
                        <div>
                            <TextField
                            type="text" 
                            label="Username"
                            //placeholder="Username" 
                            variant="outlined"
                            Name="Username"
                            id="Username"
                            value={Username}
                            onChange={this.changeHandler}
                            />
                        </div>
                        <div>
                            <TextField  
                            type="text" 
                            //placeholder="Password"
                            label="Password" 
                            variant="outlined"
                            Name="Password"
                            id="Password"
                            value={Password}
                            onChange={this.changeHandler}
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </div>    */}
                    <form onSubmit={this.submitHandler}> 
                    
                        <div>
                            <label>Username: </label>
                            <input 
                            className=""
                            type="text"
                            placeholder="Username"
                            Name="Username"
                            id="Username"
                            value={Username}
                            onChange={this.changeHandler}

                            />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input 
                            className=""
                            type="Password"
                            placeholder="Password"
                            Name="Password"
                            id="Password"
                            value={Password}
                            onChange={this.changeHandler}

                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </form>
                </div>   
            </Container>
        )
    }
}



export default connect(null,{login}) (Login);