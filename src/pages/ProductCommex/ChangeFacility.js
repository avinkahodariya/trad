import React from "react";
import './changefacility.css';
// import {initaldata} from '../../components/common/ProductCards/SliderData';
export const initaldata = [
  {id: 1, active: true, image: '/assets/img/Facility-7.svg', title: 'Turnover Charges', use: 'For BSE & NSE Stock Brokers',},
  {id: 2, active: true, image: '/assets/img/Facility-8.svg', title: ' Contract Charges', use: 'For CDSL DPs',},
  {id: 3, active: true, image: '/assets/img/Facility-9.svg', title: 'Stamp Duty', use: 'For NDSL DPs',},

 ];

 

const ChangeFacility = ()=>{

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
          <div className='title-box text-center px-5 py-12'>
                  <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]'>Charges</h2>
                  <p class="text-md leading-relaxed font-normal mx-auto text-[#808D9A] text-center">Various charges that may be levied over and above brokerage and may be specifically shown in contract / Bill.
Turnover Charges, Contract Charges, Stamp Duty</p>

              </div>
              <div className="container flex flex-wrap justify-between items-center mx-auto mb-10 px-10 py-12">
             
                  < >
                      {initaldata.map((value, index) => (
                          <div
                          key={index + '_value'}
                          className=" flex justify-center w-[20rem] h-40 bg-slate-300 p-5 md:bg-[#FFFFFF] items-center drop-shadow-md rounded-xl"
                      >
                          <div className="items-center justify-self-center">
                              <img alt="No Image" src={value.image} className="h-20 w-20 mb-3 place-content-between block absolute top-12 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
                              <h2 className="text-center text-xl title-font font-medium  mt-20 font-medium text-[#0A2A4A]">{value.title}</h2>    
                          </div>
                      </div>
                      ))}
                  </>
              </div>
          </div>
      </>
  )
}
export default ChangeFacility;