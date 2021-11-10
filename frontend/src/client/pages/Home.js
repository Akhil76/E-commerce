import React from 'react';
import { Grid } from '@material-ui/core';
import Slider from '../components/Slider';
import Card from '../components/Card';
import {connect} from 'react-redux';
import {fetch_all_product} from '../../statemanager/actions/product';





class Home extends React.Component{

    componentDidMount(){
        this.props.fetch_all_product()
    }

    render(){

        const {products} = this.props;

        return(
            <div className="client_page">
                 <Slider/>
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
    products: state.products.items
  });




export default connect(mapStateToProps,{fetch_all_product}) (Home) ;