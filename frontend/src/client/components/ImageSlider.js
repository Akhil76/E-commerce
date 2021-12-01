import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


function ImageSlider(){
    return(
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div>
                <img src="../uploads/1.jpeg" />
                <a href="/cart"> <p className="legend">Legend 1</p></a>
            </div>
            <div>
                <img src="../uploads/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="../uploads/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}

export default ImageSlider;