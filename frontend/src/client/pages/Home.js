import React from 'react';
import { Grid,Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ImageSlider from '../components/ImageSlider';
import Card from '../components/Card';
import {connect} from 'react-redux';
import {fetch_all_product} from '../../statemanager/actions/product';





class Home extends React.Component{

    componentDidMount(){
        this.props.fetch_all_product()
    }

    render(){

        const {products,loading} = this.props;
        
        return(
            <div className="client_page">
                 {
                     loading?
                    <Box style={{
                        display:"block",
                        marginLeft: "auto",
                        marginRight:"auto",
                        width:"5%",
                        marginTop:"300px"
                        }}>
                        <CircularProgress />
                    </Box>
                     :null
                 }
                 <ImageSlider/>
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
    products: state.products.items,
    loading:state.products.loading
    
  });




export default connect(mapStateToProps,{fetch_all_product}) (Home) ;