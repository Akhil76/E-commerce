import React, { useEffect } from 'react';
import DetailComponent from '../components/DetailComponent';
import { useDispatch, useSelector } from 'react-redux';
import { productdetails } from '../../statemanager/actions/productFilter';


function ProductDetails(props) {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.filteredproducts);

    useEffect(() => {
        dispatch(productdetails(props.match.params.id))
    });

    return (
        <div className="client_page">
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