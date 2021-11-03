import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Card from '../components/Card';
import {connect} from 'react-redux';
import {fetchProductbySubcat} from '../../statemanager/actions/productFilter';




class Subcatagory extends React.Component{

    componentDidMount(){
        this.props.fetchProductbySubcat(this.props.match.params.subcatId)
        
    }

    componentDidUpdate(){
        if(this.props.match.params.subcatId!==""){
            this.props.fetchProductbySubcat(this.props.match.params.subcatId)
        }
    }
    render(){
        const {products} = this.props; 
        
        return(
            <div className="client_page">
                <Typography variant="h6">Electronic / Desktop</Typography>
                <Grid direction="row" justifyContent="flex-start" container>
                    {
                        products.map(product=>
                        <Card 
                        id={product._id}
                        ProductName={product.ProductName} 
                        Price={product.Price} 
                        Img={product.ProductImg}
                            
                        />
                        )
                    }
                </Grid>
                
            </div>
        )
    }
}


const mapStateToProps = state => ({
    products: state.filteredproducts   
    
  });


export default connect(mapStateToProps,{fetchProductbySubcat}) (Subcatagory) ;