import React, {useState} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';



const useStyles = makeStyles((theme)=>({
  root:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'backgroud.paper',
    border: '1px solid white',
    boxShadow: 24,
    p: 4,
    background:"white"
  },
  
  btn:{
    textTransform:'none'
  }

}))

export default function Editproducts(props) {
  const classes = useStyles();
  const {open,onClose}=props;
  const dispatch = useDispatch();

  const[editedProduct,SetEditedProduct] = useState({
    ProductName:props.product.ProductName
  });

  const changeHandler =(e)=>{
    SetEditedProduct({
      [e.target.name] : e.target.value
    })
  };

  const submithandler=(e)=>{
        e.preventDefault();
        //dispatch(editChildCat(props.Childcategory._id,editedChildCat));
        SetEditedProduct({
            ProductName:""
        });
        onClose();
        
    }
  
  
  
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={classes.root}>
            <Typography variant="h5">Edit Product</Typography>
          <form onSubmit={submithandler}>
                <div>
                    <label>Product Name : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Product Name"
                    Name="ProductName"
                    id="ProductName"
                    value={editedProduct.ProductName}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Product Name : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Product Name"
                    Name="ProductName"
                    id="ProductName"
                    value={editedProduct.ProductName}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Product Name : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Product Name"
                    Name="ProductName"
                    id="ProductName"
                    value={editedProduct.ProductName}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Product Name : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Product Name"
                    Name="ProductName"
                    id="ProductName"
                    value={editedProduct.ProductName}
                    onChange={changeHandler}
                    />
                </div>
              <Button 
              className={classes.btn} 
              type="submit" 
              variant="contained" 
              color="primary"
              >submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}