import React,{useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {NavLink} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {displaySliderClient} from '../../statemanager/actions/SliderSetting';




function ImageSlider(){
    const dispatch = useDispatch();
    const sliders = useSelector((state)=>state.SliderSetting.items);
  
    useEffect(()=>{
        dispatch(displaySliderClient());
    },[]);
    return(
        <>
        {sliders.length>0? // I have used "length > 0?" because autoplay wasn't working.
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={2000}>
            {
            sliders.map((item)=>(
            <div>
                <img src={"../uploads/"+item.Image} style={{height:"250px"}}/>
                <NavLink to={item.Link}><p className="legend" style={{background:"center"}}>{item.Title}</p></NavLink>
            </div>
                ))
            }
        </Carousel>:null
        }
        </>
    )
}

export default ImageSlider;