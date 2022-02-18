import React from 'react';
import {AppBar,Toolbar} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { IconButton } from '@material-ui/core';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import {connect} from 'react-redux';
import {fetch_catagory} from '../../../statemanager/actions/catagory';
import {NavLink} from 'react-router-dom';


const customStyles = {
    my_nav:{

    },

}

class Navigation extends React.Component{
    componentDidMount(){
        this.props.fetch_catagory()
    }
    
    render(){
        const {catagories} = this.props;
        return(
            <AppBar className="navbar" position="sticky">
                
                
               
            <div className="nav" id="nav">
                <input style={{display:"none"}} type="checkbox" className="check_box" id="check_box"/>
                <label style={{color:"white",marginTop:"10px"}} className="menuBtn"for="check_box">
                    <i><MenuTwoToneIcon/></i>
                </label>
                <ul>
                {catagories.map((item)=>
                    <li>
                        <NavLink to={"/catagory/"+item._id}>{item.CatagoryName}</NavLink>{item.Subcatagory.length!==0 && <span><ArrowDropDownIcon/></span>}
                        <div className="dropdown-1">
					        <ul>
                                {
                                item.Subcatagory.map((sub_item)=>
                                <li>
                                    <NavLink to={"/subcatagory/"+sub_item._id}>{sub_item.SubcatagoryName}</NavLink>{sub_item.Subcatagory_two.length!==0 && <span><ArrowRightIcon/></span>}
                                    <div className="dropdown-2">
                                        <ul>
                                            {
                                            sub_item.Subcatagory_two.map((sub_item_two)=>
                                            <ul>
                                                <li><NavLink to={"/product/"+sub_item_two._id}>{sub_item_two.Subcatagory_twoName}</NavLink></li>
                                            </ul>  
                                            )}
                                        </ul>
                                    </div>
                                </li>)
                                }
                            </ul>
                        </div>    
                    </li>
                )}
                </ul>
            </div>
          </AppBar>
        )
    }
}


const mapStateToProps = state => ({
    catagories: state.catagory.items
  });

export default connect(mapStateToProps,{fetch_catagory})(Navigation);