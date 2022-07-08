import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import { initaltext } from '../../components/common/ProductCards/SliderData';
const line  = require('./img/Line.png');


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='arrow-section' >
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <span className='line-icon' ></span>
            </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='arrow-section' >
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            >
                <span className='line-icon' ></span>
            </div>
        </div>
    );
  }


const Deliveries = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            <div className='bg-[#F4FAFF] py-20 relative ' >
                <div className="bg-[#F4FAFF] container px-14 mx-auto" id="deliveries-section" > 
                    <div className='title-box text-center px-5 '>
                        <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-4 text-[#0A2A4A]'>Deliveries</h2>
                    </div>
                    <div className=" flex flex-wrap justify-center items-center mx-auto w-full  ">
                        
                        <Slider {...settings} >
                            {initaltext.map((value, index) => (
                                <div
                                    key={index + '_value'}
                                    className="rounded-xl w-52 h-[18.3rem] mx-auto   bg-gradient-to-r p-[2px] to-[#6EE7B7] via-[#05C876] from-[#0080F6]"
                                >
                                    <div className="items-center justify-self-center w-full h-[18rem]">
                                        <div className="flex flex-col justify-between h-full bg-[#F4FAFF]  text-white rounded-lg p-4 relative 
                                            after:content-['']  after:absolute after:bg-white 
                                            after:w-[90%] after:h-[90%] after:left-[1.5rem] after:top-[1rem] after:rounded-lg 
                                            after:z-0
                                        ">
                                            <span className=" w-20 h-20 mx-auto  mt-10 bg-gradient-to-r p-[2px] to-[#6EE7B7] via-[#05C876] from-[#0080F6] rotate-45  absolute inset-px -top-20  z-10 ">
                                                <div className="flex flex-col justify-between h-full  text-white rounded-md p-4 bg-[#F4FAFF] ">
                                                    <span className='text-center text-4xl title-font font-semibold text-[#2F97F8] -rotate-45 '>
                                                        {value.sno}
                                                    </span>
                                                </div>
                                            </span>
                                <h2 className="text-center text-[1rem] title-font font-medium mt-[4rem] text-[#808D9A] z-10 p-6">{value.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                       
                    </div>
                </div>
                <div className='flex w-full' >
                            <div className='bottom-arrow-section relative h-16 w-full
                                after:content-[""] after:border-top-[2px]  after:h-[2px] after:top-[3.5rem]
                                after:bg-[#0080F6] after:absolute
                                before:content-[""] before:border-top-[2px]  before:h-[2px] before:top-[3.5rem]
                                before:bg-[#0080F6] before:absolute before:right-[0rem] 
                            '>
                                
                            </div>
                        </div>
                        
            </div>
        </>
    )
}
export default Deliveries;