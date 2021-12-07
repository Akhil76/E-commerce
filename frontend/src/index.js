import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './statemanager/store';
import setAuthHeader from './utils/setAuthHeader';
import jwtDecode from 'jwt-decode';
import { CUSTOMER_LOGIN,LOGIN } from './statemanager/action_type/constants';



const token = localStorage.getItem('auth_token');
const customer_token = localStorage.getItem('customer_auth_token');

// if(token){
//   setAuthHeader();
// }

//----to get auth admin data from localstorage token----
if(token){ 
  setAuthHeader(token); //---for sending token with every request by axios
  const decode = jwtDecode(token);
  store.dispatch({
    type:LOGIN,
    payload:{
      admin: decode
    }
  })
};
//-----To get auth customer data from localstorage token-------
if(customer_token){
  const decode = jwtDecode(customer_token);
  store.dispatch({
    type:CUSTOMER_LOGIN,
    payload:{
      customer: decode
    }
  })
}
//----------------------------------------------------
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
