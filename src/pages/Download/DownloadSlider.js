import React from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { downloadState } from "../../components/common/ProductCards/SliderData";

const DownloadSlider = () => {
const navigate =  useNavigate()
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F4FAFF]">
        <div className="title-box text-center">
          <h2 className="title text-lg lg:text-3xl font-semibold sm:text-3xl md:text-3xl pt-8 text-[#00000]">
            Download
          </h2>
        </div>
        <div className="container flex flex-wrap justify-between items-center mx-auto  py-6">
          <Slider {...settings}>
            {downloadState.map((value, index) => (
              // <Link to={value.link}>
              <div key={index + "_value"} className="h-[20rem]">
                <div className="reative h-[5rem] w-[5rem] bg-trasparent justify-center items-center flex   mx-auto ">
                  {/* <Link to={value.link}> */}
                    <img
                      alt="No Image"
                      src={value.image}
                      className=" absolute h-[6rem] z-50 w-[6rem] top-[10%] shadow-sm border-[#F4FAFF] border-[10px] rounded-full  "
                      onClick={()=>{navigate(`${value.link}`)}}
                    />{" "}
                  {/* </Link> */}
                </div>

                <Link to={value.link}>
                  <div className="flex justify-center p-10 w-full h-[11rem] bg-slate-300 md:p-10  md:bg-[#FFFFFF] items-center drop-shadow-none	     rounded-xl">
                    <div className="items-center justify-self-center">
                      <div>
                        <Link to={value.link}>
                          <h2 className="text-center text-lg underline mb-2 mt-[4rem] font-medium text-[#3491FF]">
                            {value.title}
                          </h2>
                        </Link>
                      </div>
                      <p className="text-center text-sm mb-2 font-medium text-[#0A2A4A]">
                        {value.use}
                      </p>
                      {/* <div className=" text-center text-xs mt-4 font-small text-[#808D9A]">
                            {value.description}
                          </div> */}
                    </div>
                  </div>
                </Link>
              </div>
              // </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default DownloadSlider;
