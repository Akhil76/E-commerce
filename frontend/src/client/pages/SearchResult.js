import React,{useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Card from '../components/Card';
import { useDispatch,useSelector} from 'react-redux';
import {search} from '../../statemanager/actions/search';


function SearchResult(props){
    const productName = props.match.params.productName;
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.SearchedProducts.items);
    
    useEffect(()=>{
        dispatch(search(productName));
    });

    return(
        <div className="client_page">
            <p>You have searched {productName}:</p>
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




export default SearchResult ;