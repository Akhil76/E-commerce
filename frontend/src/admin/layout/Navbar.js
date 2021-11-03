import React from 'react';
import {AppBar,Typography,Toolbar, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {logout} from '../../statemanager/actions/auth';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
 
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
   
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    
   logoutbutton:{
    marginLeft:'auto',
   },
   logoutbuttonView:{
     textTransform: 'none'
   }
    
  }));

function Navbar(props){
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler=()=>{
    dispatch(logout(history))
  }
 
    return(
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.onClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <div className={classes.logoutbutton}>
            <Button 
            className={classes.logoutbuttonView} 
            color="inherit"
            onClick={clickHandler}
            >Logout</Button>
          </div>
        </Toolbar>
        
      </AppBar>
    )
}

export default Navbar;