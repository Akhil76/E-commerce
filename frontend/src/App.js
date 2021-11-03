import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Client from './client/Client';
import Admin from './admin/Admin';
import Login from './admin/pages/Login';
import PrivateRoute from './privateRoutes/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
           <PrivateRoute path='/admin' component={Admin}/>
           <Route path='/login' component={Login}/>
           <Route path='/' component={Client} />
      </Switch>
    </Router>
    
  );
}

export default App;
