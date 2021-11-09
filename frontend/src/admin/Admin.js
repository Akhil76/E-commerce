import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './layout/Sidebar'; 
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Addproduct from './pages/Addproduct';
import Editproduct from './pages/Editproduct';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import PrivateRoute from '../privateRoutes/PrivateRoute';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';
import Deleteproduct from './pages/Deleteproduct';
import Setting from'./pages/Setting';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	  },
	toolbar: theme.mixins.toolbar,
}));

function Admin() {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);

  const handleDrawerOpen = () =>{
    setOpen(true);
  };

  const handleDrawerClose = () =>{
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar 
        sidbarIsOpened={open}
        onClick={handleDrawerOpen}
        />
        <Sidebar
        open={open}
        onClose={handleDrawerClose}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <PrivateRoute exact path="/admin/addproduct" component={Addproduct}/>
            <PrivateRoute exact path="/admin/editproduct" component={Editproduct}/>
            <PrivateRoute exact path="/admin/deleteproduct" component={Deleteproduct}/>
            <PrivateRoute exact path="/admin/setting" component={Setting}/>
            <PrivateRoute exact path="/admin/addcategory" component={AddCategory}/>
            <PrivateRoute exact path="/admin/editcategory" component={EditCategory}/>
            <PrivateRoute exact path="/admin" component={Home}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}



export default Admin;