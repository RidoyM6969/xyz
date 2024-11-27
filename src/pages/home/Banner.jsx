import React from 'react'
import Slider from "react-slick";
import banner from '../../assets/banner.png'
import bannersecond from '../../assets/bannersecond.jpg'
import bannertherd from '../../assets/bannertherd.jpg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute bottom-[-34px] xl:right-[860px] right-[100px]  z-[100]'
      onClick={onClick}
    ><FaArrowRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute bottom-[-35px] xl:left-[860px] left-[100px] z-[100]'
      onClick={onClick}
    ><FaArrowLeft/></div>
  );
}

const Banner = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (

    <div  className='custom '>
        <Slider  {...settings}>
      <div>
        <img className='w-full h-[200px] md:h-[350px] lg:h-[550px] xl:h-[800px]' src={banner} alt="" />
      </div>
      <div>
        <img className='w-full h-[200px] md:h-[350px] lg:h-[550px] xl:h-[800px]' src={bannersecond} alt="" />
      </div>
      <div>
        <img className='w-full h-[200px] md:h-[350px] lg:h-[550px] xl:h-[800px]' src={bannertherd} alt="" />
      </div>
    </Slider>
    </div>
    )
}

export default Banner
