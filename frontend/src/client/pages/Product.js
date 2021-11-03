import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../components/Card';
import {connect} from 'react-redux';
import {fetchProductByName} from '../../statemanager/actions/productFilter';


class Product extends React.Component{
    
    componentDidMount(){
        this.props.fetchProductByName(this.props.match.params.productId)
        
    }

    componentDidUpdate(){
        if(this.props.match.params.productId!==""){
            this.props.fetchProductByName(this.props.match.params.productId)
        }
    }
   
    render(){
        
      
      const {products} = this.props; 

        return(
            <div className="client_page">
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


export default connect(mapStateToProps,{fetchProductByName}) (Product) ;