import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { editChildCat } from '../../../statemanager/actions/catagory';


const useStyles = makeStyles((theme)=>({
  root:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'backgroud.paper',
    // border: '1px solid white',
    boxShadow: 24,
    p: 4,
  },
  input:{
    height: "38px",
    padding: "14px",
    borderRadius: "5px white",
    margin: "0px 0px 33px 61px"
  },
  btn:{
    textTransform:'none'
  }

}))

export default function EditChildCat(props) {
  const classes = useStyles();
  const {open,onClose}=props;
  const dispatch = useDispatch();

  const[editedChildCat,SetEditedChildCat] = useState({
    Subcatagory_twoName:props.Childcategory.Subcatagory_twoName
  });

  const changeHandler =(e)=>{
    SetEditedChildCat({
      [e.target.name] : e.target.value
    })
  };

  const submithandler=(e)=>{
        e.preventDefault();
        dispatch(editChildCat(props.Childcategory._id,editedChildCat));
        SetEditedChildCat({
            Subcatagory_twoName:""
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
          
          <form onSubmit={submithandler}>
              <input
              className={classes.input}
              placeholder="Subcatagory_twoName"
              Name="Subcatagory_twoName"
              value={editedChildCat.Subcatagory_twoName}
              onChange={changeHandler}
              />
             
              <Button 
              className={classes.btn} 
              type="submit" 
              variant="contained" 
              color="primary"
              >Apply</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}