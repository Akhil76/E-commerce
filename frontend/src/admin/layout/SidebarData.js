import React from "react";
import {Dashboard,AddBox} from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'; 


export const SidebarDatas = [
    {
        title: "Dashboard",
        icon :<Dashboard/> ,
        Link : "/admin"
    },
    {
        title: "Add Product",
        icon :<AddBox/> ,
        Link : "/admin/addproduct" 
    },
    {
        title: "Edit Product",
        icon :<AppsIcon/> ,
        Link : "/admin/editproduct"
    },
    {
    title: "Settings",
    icon :<SettingsIcon/>,
    Link:"/admin/setting",
    ExpandMoreIcon:<ExpandMoreIcon/>,
    ExpandLessIcon:<ExpandLessIcon/>,
    subnav:[
        {
            title:"Categories",
            Link:"/admin/categories"
        },
        {
            title:"add category",
            Link:"/admin/addcategory"
        },
    ]

    },
    {
        title: "Add category",
        icon :<AddBox/> ,
        Link : "/admin/addcategory"    
    },
    {
        title: "Edit category",
        icon :<AddBox/> ,
        Link : "/admin/editcategory"    
    },
]