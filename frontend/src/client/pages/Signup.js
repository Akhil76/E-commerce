import React, { useState } from 'react';
import { Paper, Button, TextField,Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {customerRegistration} from '../../statemanager/actions/customer_auth';


function Signup() {
    const dispatch = useDispatch();
    const [customerInfo, setCustomerInfo] = useState({
        FirstName: "",
        LastName: "",
        UserName: "",
        Phone: "",
        Email: "",
        Address: "",
        Password: "",
        ComfirmPassword:"",
        error:{}
    });

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(customerRegistration(customerInfo));
        setCustomerInfo({
            FirstName: "",
            LastName: "",
            UserName: "",
            Phone: "",
            Email: "",
            Address: "",
            Password: "",
            ComfirmPassword: ""
        });
    }

    return (
        <div className="client_page">
            <Paper
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                    marginTop: "20px",
                    padding: "20px"
                }}
            >
                <div>
                <Typography>{customerInfo.FirstName}</Typography>
                <Typography>{customerInfo.LastName}</Typography>
                <Typography>{customerInfo.ConfirmPassword}</Typography>
                </div>
                <Typography variant="h6" color="primary">Sign up here</Typography>
                <form onSubmit={submithandler}>
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", margin: "20px 0 20px 0" }}
                        label="First Name"
                        variant="outlined"
                        value={customerInfo.FirstName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, FirstName: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="Last Name"
                        variant="outlined"
                        value={customerInfo.LastName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, LastName: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="User Name"
                        variant="outlined"
                        value={customerInfo.UserName}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, UserName: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="Phone"
                        variant="outlined"
                        value={customerInfo.Phone}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, Phone: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="Email"
                        variant="outlined"
                        value={customerInfo.Email}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, Email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="Address"
                        variant="outlined"
                        value={customerInfo.Address}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, Address: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        label="Password"
                        variant="outlined"
                        value={customerInfo.Password}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, Password: e.target.value })}
                    />
                    <TextField
                        style={{ marginRight: "20px", marginBottom: "20px" }}
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        value={customerInfo.ConfirmPassword}
                        onChange={(e) => setCustomerInfo({ ...customerInfo, ConfirmPassword: e.target.value })}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ textTransform: "none" }}
                    >Sign up</Button>
                </form>
            </Paper>
        </div>
    )
}




export default Signup;