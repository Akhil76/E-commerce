import React,{useEffect} from 'react';
import {Typography,Toolbar,Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'; 
import { useDispatch,useSelector} from 'react-redux';
import { productdetails } from '../../statemanager/actions/productFilter';


const useStyles = makeStyles((theme) => ({
   root:{
       background:"#EAEDED"
   },
   img:{
    display:"inline-flex",
    height:"500px",
    width:"500px",
   },
   Toolbar:{

   }
  }));

function ProductDetails(props){
    const classes = useStyles();

    const dispatch = useDispatch();
    const product = useSelector((state)=>state.filteredproducts);
    
    useEffect(()=>{
        dispatch(productdetails(props.match.params.id))
    });
    
    return(
        <div>
            <div className={classes.root}>
                <Typography variant="h6">Product Details</Typography>
                   {
                       product.map((productdetails)=>
                       <div>
                           <div className={classes.img}>
                                <img alt="ProductImg" src={"../uploads/"+productdetails.ProductImg}/>
                            </div>
                           <Typography variant="h5" >Product Name:{productdetails.ProductName}</Typography>
                           <Typography variant="h6" >Price:{productdetails.Price}</Typography>
                           <Typography variant="h6">{productdetails.Description}</Typography>
                            <Toolbar className={classes.Toolbar}>
                                <Button variant="contained" color="primary">Buy Now</Button>
                                <Button variant="contained" color="primary">Add to Cart</Button>
                            </Toolbar>
                       </div>
                       )
                   }
            </div>
        </div> 
    )
}

export default ProductDetails;