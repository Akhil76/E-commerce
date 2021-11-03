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
    border: '1px solid black',
    borderRadius:"5px",
    boxShadow: 24,
    p: 4,
    background:"white"
  },
  
  btn:{
    textTransform:'none'
  },
  img:{
    display: "inline-flex",
    width:"100px",
    height:"100px"
  },
  form:{
    padding:"20px"
  }

}))

export default function Editproducts(props) {
  const classes = useStyles();
  const {open,onClose}=props;
  const dispatch = useDispatch();

  const[editedProduct,SetEditedProduct] = useState({
    ProductName:props.product.ProductName,
    Price:props.product.Price,
    Quantity:props.product.Quantity,
    Description:props.product.Description,
    ProductImg:props.product.ProductImg,
    Catagory:props.product.Catagory,
    Subcatagory:props.product.Subcatagory,
    Subcatagory_two:props.product.Subcatagory_two
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
            <Typography align="center" variant="h5">Edit Product</Typography>
          <form className={classes.form} onSubmit={submithandler}>
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
                    <label>Price: </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Price"
                    Name="Price"
                    id="Price"
                    value={editedProduct.Price}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Quantity : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Quantity"
                    Name="Quantity"
                    id="Quantity"
                    value={editedProduct.Quantity}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Description : </label>
                    <textarea 
                    className=""
                    type="text"
                    placeholder="Description"
                    Name="Description"
                    id="Description"
                    value={editedProduct.Description}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                  <Typography variant="h6">Product Image:</Typography>
                  <img className={classes.img} alt="ProductImg" src={"../uploads/"+editedProduct.ProductImg}/>
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