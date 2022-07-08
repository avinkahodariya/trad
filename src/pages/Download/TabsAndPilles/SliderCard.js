import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import _ from 'lodash'
const Card =(props)=>{
  return (
    <div class="text-gray-600 body-font">
       <h2 className="text-center text-2xl font-medium text-[#000000]">
        {props.title}
      </h2>
 <div className='single-slider px-5 py-0'>
     
      <div className=" flex flex-wrap justify-between items-center  my-6">
      
        <div
          className={`${
            props.index == 1
              ? "flex justify-center p-2  bg-slate-300 md:p-5 md:bg-[#f4faff] items-center drop-shadow-md w-80  rounded-xl"
              : "flex justify-center p-2  bg-slate-300 md:p-5 md:bg-[#FFFFFF] items-center drop-shadow-md w-80  rounded-xl"
          }`}
        >
          <div className="items-center justify-self-center">
            <img
              alt="No Image"
              src={props.img}
              className="h-[4rem] w-[4rem] mb-3 place-content-between block absolute top-[3rem] left-1/2  -translate-x-1/2 -translate-y-1/2"
            />

            <h2 className="text-center text-xl	 mb-2 mt-[4.5rem] font-medium text-[#0A2A4A]">
              {props.subTitle}
            </h2>
            <button className="flex items-center  uppercase text-size font-medium tracking-wide bg-[#3491FF] text-white p-3 rounded-lg focus:outline-none focus:shadow-outline mt-5	">
              CLick To Download
              <svg
                className="mx-2"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1843 13.5135V17.8378C21.1843 19.0172 20.2015 20 19.0221 20H4.16216C2.9828 20 2 19.0172 2 17.8378V13.5135C2 13.199 2.27518 12.9238 2.58968 12.9238C2.90418 12.9238 3.17936 13.199 3.17936 13.5135V17.8378C3.17936 18.3882 3.61179 18.8206 4.16216 18.8206H19.0221C19.5725 18.8206 20.0049 18.3882 20.0049 17.8378V13.5135C20.0049 13.199 20.2801 12.9238 20.5946 12.9238C20.9091 12.9238 21.1843 13.1597 21.1843 13.5135ZM10.4519 15.3612C10.7664 15.6757 11.1988 15.8329 11.5919 15.8329C11.985 15.8329 12.4175 15.6757 12.732 15.3612L15.4838 12.6093C15.7197 12.3735 15.7197 12.0197 15.4838 11.7838C15.2479 11.5479 14.8941 11.5479 14.6583 11.7838L12.1816 14.2604V4.58968C12.1816 4.27518 11.9064 4 11.5919 4C11.2774 4 11.0022 4.27518 11.0022 4.58968V14.2214L8.52557 11.7447C8.2897 11.5088 7.93589 11.5088 7.70002 11.7447C7.46415 11.9806 7.46415 12.3344 7.70002 12.5702L10.4519 15.3612Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </button>
          </div>
        </div>
       
      </div>
    </div>
    </div>
  )
}

const SliderCard = (props) => {
  return (
     <Card  title={props.title} subTitle={props.subTitle} index={props.index} img={props.img} arrow={true}/>
  );
};

export default SliderCard;
