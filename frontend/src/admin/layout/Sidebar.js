import React from "react";
import {Drawer,
  Hidden,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText, 
  Typography,
  Avatar, 
  Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { SidebarDatas } from "./SidebarData";



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
   
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      color: "white",
      backgroundColor: "#8d9794",
      
    },
    link: {
      color: "White",
      textDecoration: "none",
      fontSize: "16px"
    },
    icon:{
      color:"white",
      marginRight:"-20px"
    },
    text:{
      paddingLeft:"0px"
    },
    toolbar: theme.mixins.toolbar,
  }));
  


function Sidebar(props){

    const classes = useStyles();
    const theme = useTheme();
    const {onClose,open}=props;

    const drawer = (
        <div>
          <div className={classes.toolbar} />
            <Toolbar>
              <Avatar alt="Remy Sharp" src="#" />
              <Typography variant="h6"><Link style={{color: "White"}} className="admin_t" to="/admin">Admin</Link></Typography>
            </Toolbar>
            <Divider />
            <List>
              {SidebarDatas.map((val) =>(
                <Link to={val.Link} className={classes.link}>
                  <ListItem button >
                    <ListItemIcon className={classes.icon}>{val.icon}</ListItemIcon>
                    <ListItemText className={classes.text} primary={val.title} />
                    <ListItemIcon className={classes.icon}>{val.ExpandMoreIcon}</ListItemIcon>
                  </ListItem>
                  
                </Link>
              ))}
            </List>
            <Divider/>

          {/* Static Sidebar Nav */}
          {/* <List>
              <ListItem button>
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <Link className={classes.link} to="/admin">Dashboard</Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><AddBoxIcon/></ListItemIcon>
                <Link className={classes.link} to="/admin/addproduct">Add Product</Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon><AppsIcon/></ListItemIcon>
                <Link className={classes.link} to="/admin/Products">Products</Link>
              </ListItem> 
              <ListItem button>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <Link className={classes.link} to="/admin/setting">Settings</Link>
              </ListItem>  
          </List>
          <Divider /> */}

        </div>
      );
   
    return(
        <nav className={classes.drawer} aria-label="mailbox folders">
          
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
          
            <Drawer
              
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={open}
              onClose={onClose}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              
              {drawer}
              
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
    )
}


export default Sidebar;