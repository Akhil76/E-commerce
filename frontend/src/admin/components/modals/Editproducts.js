import React, {useState} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {editproduct} from '../../../statemanager/actions/product';
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

  const [editedProduct,setEditedProduct] = useState({
    ProductName:props.product.ProductName,
    Price:props.product.Price,
    Quantity:props.product.Quantity,
    Description:props.product.Description,
    OldImg:props.product.ProductImg,
    Catagory:props.product.Catagory,
    Subcatagory:props.product.Subcatagory,
    Subcatagory_two:props.product.Subcatagory_two,
    ProductImg:null
    
  });
  


//   const onChangeFile = (e) =>{
//     // console.log(event.target.files[0]);
     
//     setEditedProduct({ProductImg:e.target.files[0]});

//      // for image preview------------------
//      const file = e.target.files[0];
     
//      const reader = new FileReader();
//      reader.onloadend = ()=>{
//       setEditedProduct({
//              file:file,
//              imgpreview:reader.result
//          });
//      };
//      if(file){
//          reader.readAsDataURL(file);
//      }
     
//      //--------------------------------------
//  }

  const submithandler=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("ProductName",editedProduct.ProductName);
        formdata.append("Price",editedProduct.Price);
        formdata.append("Quantity",editedProduct.Quantity);
        formdata.append("Description",editedProduct.Description);
        formdata.append("ProductImg",editedProduct.ProductImg);
        formdata.append("Catagory",editedProduct.Catagory);
        formdata.append("Subcatagory",editedProduct.Subcatagory);
        formdata.append("Subcatagory_two",editedProduct.Subcatagory_two);

        dispatch(editproduct(props.product._id,formdata));

        // setEditedProduct({
        //     ProductName:"",
        //     Price:"",
        //     Quantity:"",
        //     Description:"",
        //     ProductImg:"",
        //     Catagory:"",
        //     Subcatagory:"",
        //     Subcatagory_two:""
        // });

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
                    onChange={(e)=>setEditedProduct({...editedProduct,ProductName:e.target.value})}
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
                    onChange={(e)=>setEditedProduct({...editedProduct,Price:e.target.value})}
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
                    onChange={(e)=>setEditedProduct({...editedProduct,Quantity:e.target.value})}
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
                    onChange={(e)=>setEditedProduct({...editedProduct,Description:e.target.value})}
                    />
                </div>
                <div>
                    <label>Upload a product image : </label>
                    <input 
                    className=""
                    type="file"
                    name="ProductImg"
                    onChange={(e)=>setEditedProduct({...editedProduct,ProductImg:e.target.files[0]})}
                    />
                </div>
                <div>
                  <Typography paragraph>Product Image:</Typography>
                  <img className={classes.img} src={"../uploads/"+editedProduct.OldImg}/>
                  
                </div>
                <div>
                  <img className={classes.img} src={editedProduct.imgpreview}/>
                </div>
                <div>
                  <Button 
                  className={classes.btn} 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  >Submit</Button>
                  <Button
                  className={classes.btn} 
                  type="button" 
                  variant="contained" 
                  color="primary"
                  onClick={onClose}
                  >Close</Button>
                </div>
          </form>
          <p>Output</p>
          <p>{editedProduct.ProductName}</p>
          <p>{editedProduct.Price}</p>
          <p>{editedProduct.Quantity}</p>
          <p>{editedProduct.Description}</p>
          <p>{editedProduct.Catagory}</p>
        </Box>
      </Modal>
    </div>
  );
}