import React from 'react';
import { Grid,Box,Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    products: state.filteredproducts.items,
    loading: state.filteredproducts.loading   
    
  });


export default connect(mapStateToProps,{fetchProductbySubcat}) (Subcatagory) ;