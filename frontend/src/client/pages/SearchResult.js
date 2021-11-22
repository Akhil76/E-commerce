import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '../components/Card';




function SearchResult(){
    
     return(
        <div className="client_page">
            <Grid direction="row" justifyContent="flex-start" container>
                {/* {
                 products.map(product=>
                    <Card 
                    id={product._id}
                    ProductName={product.ProductName} 
                    Price={product.Price} 
                    Img={product.ProductImg}       
                    />
                    )
                } */}
            </Grid>      
        </div>
        )
}




export default SearchResult ;