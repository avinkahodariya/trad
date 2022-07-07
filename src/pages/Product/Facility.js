import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
// import {initaldata} from '../../components/common/ProductCards/SliderData';
export const initaldata = [
  {id: 1, active: true, image: '/assets/img/Facility-11.svg', title: 'Delivery charge', use: 'For BSE & NSE Stock Brokers',},
  {id: 2, active: true, image: '/assets/img/Facility-2.svg', title: 'GST', use: 'For CDSL DPs',},
  {id: 3, active: true, image: '/assets/img/Facility-3.svg', title: 'STT', use: 'For NDSL DPs',},
  {id: 4, active: true, image: '/assets/img/Facility-4.svg', title: 'Turnover Charges', use: 'For MCX & NCDEX commodities',},
  {id: 5, active: false, image: '/assets/img/Facility-5.svg', title: 'Stamp Duty', use: 'Back Office Data Access Utility',},
  {id: 6, active: false, image: '/assets/img/Facility-12.svg', title: 'Demat Delivery charge', use: 'For MCX & NCDEX commodities',},
 ];

 

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
          <div className='title-box text-center px-5 py-6'>
                  <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]'>Charges</h2>
                  <p class="text-sm leading-relaxed font-medium mx-auto text-[#808D9A]">Various charges that may be levied over and above brokerage and may be specifically shown in contract / Bill.</p>

              </div>
              <div className="container flex flex-wrap justify-between items-center mx-auto mb-0 px-5 py-6">
             
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