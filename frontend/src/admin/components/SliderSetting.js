import React,{useEffect} from 'react';
import {Typography} from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {displaySlider} from '../../statemanager/actions/SliderSetting';


function SliderSetting(){
  const dispatch = useDispatch();
  const sliders = useSelector((state)=>state.SliderSetting.items);

  useEffect(()=>{
      dispatch(displaySlider());
  },[displaySlider()]);
    return(
        <div>
            <Typography>Slider Settings</Typography>
            <div>
                {
                    sliders.map((item)=>(<div>
                        <p>Title:{item.Title}</p>
                        <p>Link:{item.Link}</p>
                        <img src={"../uploads/"+item.Image}/>
                    </div>))
                }
            </div>
        </div>
    )
}

export default SliderSetting;