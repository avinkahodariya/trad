import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import {initaldata} from '../../components/common/ProductCards/SliderData';
import ReadMore from '../../components/common/ReadMore';

const Facility = ()=>{

    const  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
      <>
          <div className="bg-[#F4FAFF]">
          <div className='title-box text-center px-5 py-9'>
                  <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]'>Charge Facility</h2>
                  <p class="text-md leading-relaxed font-normal mx-auto text-[#808D9A]">Various charges that may be levied over and above brokerage and may be specifically shown in contract / Bill.</p>

              </div>
              <div className="container flex flex-wrap justify-between items-center mx-auto mb-10 px-5 py-0 gap-9">
             
                  <Slider {...settings} >
                      {initaldata.map((value, index) => (
                          <div
                          key={index + '_value'}
                          className=" flex justify-center w-40 h-40 bg-slate-300 p-5 md:bg-[#FFFFFF] items-center drop-shadow-md rounded-xl"
                      >
                          <div className="items-center justify-self-center">
                              <img alt="No Image" src={value.image} className="h-20 w-20 mb-3 place-content-between block absolute top-12 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
                              <h2 className="text-center text-xl title-font font-medium  mt-20 font-medium text-[#0A2A4A]">{value.title}</h2>    
                          </div>
                      </div>
                      ))}
                  </Slider>
              </div>
          </div>
      </>
  )
}
export default Facility;