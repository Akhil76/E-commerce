import React,{useEffect,useState} from 'react';
import {makeStyles,Typography,Grid, Toolbar, Button} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {displaySlider,delslider} from '../../statemanager/actions/SliderSetting';
import EditSlider from '../components/modals/EditSlider';
import AddSlider from '../components/modals/AddSlider';

const useStyles = makeStyles((theme)=>({
    addSlider_btn:{
        textTransform:'none',
        marginLeft:'auto',
    },
    Img:{
        display: "inline-flex",
        width:"-webkit-fill-available",
        overflow:"hidden",
        margin:"10px"
    }
}));


function SliderSetting(){
    const classes = useStyles();
    const [open, setOpen] = useState(false);
	const [id,setId] = useState("");
	const handleOpen = (id) => {
		setId(id);
		setOpen(true);
	};
	const handleClose = () => setOpen(false);
    //---------For addslider Modal----------
    const [show,setShow] = useState(false);
    const Closehandler = () => setShow(false);
    //------------------------------------------

    const dispatch = useDispatch();
    const sliders = useSelector((state)=>state.SliderSetting.items);

    useEffect(()=>{
        dispatch(displaySlider());
    },[displaySlider()]);

    return(
        <div style={{background:"#eeeeee"}}>
            <Toolbar>
                <Typography variant="h6">Slider Settings</Typography>
                <Button
                 className={classes.addSlider_btn}
                 variant="contained" 
                 color="primary"
                 onClick={()=>{setShow(true)}}
                 >Add Slider</Button>
            </Toolbar>
            <AddSlider
            show={show}
            setShow={setShow}
            onClose={Closehandler}
            />
            <Grid direction="row" justifyContent="flex-start"container>
                {
                    sliders.map((item)=>(
                    <Grid style={{border:"3px solid white"}} item xs={12} sm={12} md={6}>
                        <p>Title:{item.Title}</p>
                        <p>Link:{item.Link}</p>
                        <div className={classes.Img}>
                            <img src={"../uploads/"+item.Image}/>
                        </div>    
                        <Toolbar>
                            <Button
                            style={{textTransform:'none'}}
                            color="primary" 
                            variant="contained"
                            onClick={()=>{handleOpen(item._id)}}
                            >Edit</Button>
                            <Button 
                            style={{textTransform:'none'}}
                            color="primary" 
                            variant="contained"
                            onClick={()=>{dispatch(delslider(item._id))}}
                            >Delete</Button>
                        </Toolbar>
                        {id===item._id?
                        <EditSlider
                        open={open}
                        setOpen={setOpen}
                        onClose={handleClose}
                        slider={item}
                        />:null
                        }
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default SliderSetting;