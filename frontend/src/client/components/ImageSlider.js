import React,{useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {useDispatch,useSelector} from 'react-redux';
import {displaySliderClient} from '../../statemanager/actions/SliderSetting';




function ImageSlider(){
    const dispatch = useDispatch();
    const sliders = useSelector((state)=>state.SliderSetting.items);
  
    useEffect(()=>{
        dispatch(displaySliderClient());
    },[displaySliderClient()]);
    return(
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {
            sliders.map((item)=>(
            <div>
                <img src={"../uploads/"+item.Image} />
                <a href="/cart"> <p className="legend">{item.Title}</p></a>
            </div>
                ))
            }
        </Carousel>
    )
}

export default ImageSlider;