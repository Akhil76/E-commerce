import React from 'react';
import {AppBar} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux';
import {fetch_catagory} from '../../statemanager/actions/catagory';
import {NavLink} from 'react-router-dom';



class Navigation extends React.Component{
    componentDidMount(){
        this.props.fetch_catagory()
    }
    
    render(){
        const {catagories} = this.props;
        return(
                <AppBar position="sticky">  
                   <div className="my_nav"> 
                    <ul>
                    {
                     catagories.map((item)=>
                       
                        <li><NavLink to={"/catagory/"+item._id}>{item.CatagoryName}</NavLink>
                            <div className="sub_menu">
                                
                                 {
                                     item.Subcatagory.map((sub_item)=>
                                     
                                    <ul>
                                        <li className="hover_me"><NavLink to={"/subcatagory/"+sub_item._id}>{sub_item.SubcatagoryName}</NavLink>
                                            <div className="sub_menu2">
                                                {
                                                    sub_item.Subcatagory_two.map((sub_item_two)=>
                                                    <ul>
                                                        <li><NavLink to={"/product/"+sub_item_two._id}>{sub_item_two.Subcatagory_twoName}</NavLink></li>
                                                    </ul>  
                                                    )
                                                }
                                                
                                            </div>
                                        </li>
                                       
                                    </ul>
                                )}
                               
                            </div>
                        </li>
                     )
                    }  
                    </ul>
                   </div>    
                </AppBar> 
        )
    }
}


const mapStateToProps = state => ({
    catagories: state.catagory.items
  });

export default connect(mapStateToProps,{fetch_catagory})(Navigation) ;