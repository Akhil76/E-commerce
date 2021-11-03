import React from 'react';
import {Route,Redirect} from 'react-router-dom';
// import { login } from '../statemanager/actions/auth';
// import {useDispatch,useSelector} from 'react-redux';



function PrivateRoute({ component: Component, ...rest }) {

    const authenticated = localStorage.getItem("auth_token");
    console.log("this", authenticated);
  //  const dispatch = useDispatch();
  //  const authenticated = useSelector((state)=>state.auth)

  //  useEffect(()=>{
	// 	dispatch(login());
	//  },[]);

    return (
      <Route
        {...rest}
        render={(props) =>
          authenticated ? 
            <Component {...props} /> : 
            <Redirect 
            to="/login"
            />
        }
      />
    );
  }

export default PrivateRoute;