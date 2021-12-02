import React, {useState} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {addslider} from '../../../statemanager/actions/SliderSetting';
import { useDispatch } from 'react-redux';



const useStyles = makeStyles((theme)=>({
  root:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
  },
  form:{
    padding:"20px"
  }

}))

export default function EditSlider(props) {
  const classes = useStyles();
  const {show,onClose}=props;
  const dispatch = useDispatch();

  const [state,setState] = useState({
    Title:"",
    Link:"",
    Image:null
    
  });
  
  const submithandler=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("Title",state.Title);
        formdata.append("Link",state.Link);
        formdata.append("Image",state.Image);

        dispatch(addslider(formdata));

       setState({
            Title:"",
            Link:"",
            Image:null
        });
        onClose(); 
    }
  
  return (
    <div>
      <Modal
        keepMounted
        open={show}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={classes.root}>
          <Typography align="center" variant="h5">Add Slider</Typography>
          <form className={classes.form} onSubmit={submithandler}>
                <div>
                    <label>Title : </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Write a slider title"
                    Name="Title"
                    id="Title"
                    value={state.Title}
                    onChange={(e)=>setState({...state,Title:e.target.value})}
                    />
                </div>
                <div>
                    <label>Link: </label>
                    <input 
                    className=""
                    type="text"
                    placeholder="Write a slider link"
                    Name="Link"
                    id="Link"
                    value={state.Link}
                    onChange={(e)=>setState({...state,Link:e.target.value})}
                    />
                </div>
                
                <div>
                    <label>Upload a slider image : </label>
                    <input 
                    className=""
                    type="file"
                    name="Image"
                    onChange={(e)=>setState({...state,Image:e.target.files[0]})}
                    />
                </div>

                {/* <div>
                  <img className={classes.img} src={editedSlider.imgpreview}/>
                </div> */}
                <div>
                  <Button 
                  className={classes.btn} 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  >Submit</Button>
                  <Button
                  className={classes.btn} 
                  variant="contained" 
                  color="primary"
                  onClick={onClose}
                  >Close</Button>
                </div>
          </form>
          {/* <p>Output</p>
          <p>{editedProduct.ProductName}</p>
          <p>{editedProduct.Price}</p>
          <p>{editedProduct.Quantity}</p>
          <p>{editedProduct.Description}</p>
          <p>{editedProduct.Catagory}</p> */}
        </Box>
      </Modal>
    </div>
  );
}