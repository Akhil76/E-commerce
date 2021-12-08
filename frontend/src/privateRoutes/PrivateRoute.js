import React,{useEffect} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { login } from '../statemanager/actions/auth';
import {useDispatch,useSelector} from 'react-redux';



function PrivateRoute({ component: Component, ...rest }) {

  // const authenticated = localStorage.getItem("auth_token");
  // console.log("this", authenticated);
   const dispatch = useDispatch();
   const admin = useSelector((state)=>state.auth.admin);
   const authenticated = useSelector((state)=>state.auth.isAuthenticated)
   
   useEffect(()=>{
		dispatch(login());
	 },[]);
   //-------token expiration and logout-----------
   const expired_time = admin.exp;
   const current_time = new Date().getTime()/1000;
   let expTime = "";
   if(current_time<expired_time){
    //localStorage.removeItem('auth_token');
     expTime = true;
   }else{
      expTime = false;
   }
   //---------------------------------------------
    return (
      <Route
        {...rest}
        render={(props) =>
          expTime && authenticated ? 
            <Component {...props} /> : 
            <Redirect 
            to="/login"
            />
        }
      />
    );
  }

export default PrivateRoute;