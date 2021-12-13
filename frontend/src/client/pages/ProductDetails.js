import React, { useEffect } from 'react';
import {Box} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import DetailComponent from '../components/DetailComponent';
import { useDispatch, useSelector } from 'react-redux';
import { productdetails } from '../../statemanager/actions/productFilter';


function ProductDetails(props) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.filteredproducts.items);
    const loading = useSelector((state) => state.filteredproducts.loading);


    useEffect(() => {
        dispatch(productdetails(props.match.params.id))
    });

    return (
        <div className="client_page">
            {
                loading ?
                    <Box style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "5%",
                        marginTop: "300px"
                    }}>
                        <CircularProgress />
                    </Box>
                    : null
            }

            {
                product.map((productdetails) =>

                    <DetailComponent
                        id={productdetails._id}
                        ProductImg={productdetails.ProductImg}
                        ProductName={productdetails.ProductName}
                        Price={productdetails.Price}
                        Description={productdetails.Description}
                    />

                )
            }
        </div>
    )
}

export default ProductDetails;