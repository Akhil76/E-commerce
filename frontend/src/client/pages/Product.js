import React from 'react';
import { Grid,Box} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    products: state.filteredproducts.items,
    loading: state.filteredproducts.loading   
    
  });


export default connect(mapStateToProps,{fetchProductByName}) (Product) ;