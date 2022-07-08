import React from 'react'
import SliderCard from './SliderCard'
import Slider from 'react-slick'

const BackArrow = (props) =>{
  return (
    <button type="button" onClick={props.onClick} class="back-forword-btn bg-white -m-8 absolute z-50	 ext-blue-700 border border-blue-700 hover:bg-[#3491FF] hover:text-white  focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 left-[12%]">
    <svg className="stroke-[#3491ff] hover:stroke-[#ffffff]  " width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.168 3.56969L7.46297 9.27469C6.78922 9.94844 6.78922 11.0509 7.46297 11.7247L13.168 17.4297"  stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </button>
  )
}

const ForwardArrow = (props) =>{
  return (
    <button type="button" onClick={props.onClick} class="back-forword-btn  bg-white -ml-5 z-50 text-blue-700 border border-blue-700 hover:bg-[#3491FF]   hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 absolute right-[0%]">
    <svg className="stroke-[#3491ff] hover:stroke-[#ffffff]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83203 3.56969L13.537 9.27469C14.2108 9.94844 14.2108 11.0509 13.537 11.7247L7.83203 17.4297" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    </button>
  )
}


const CrossnetDownload = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ForwardArrow/>,
    prevArrow: <BackArrow />,

    };
  return (
    <div className='bg-[#F4FAFF]'>
        <div className='bg-[#fffff]'>
        <div className='font-medium text-3xl mb-4	text-center pt-12 text-[#0A2A4A]'>Cross & Crossnet</div>
        <div className='mb-6 text-lg text-center text-[#808D9A] font-normal'>Offers a lot more facilities and security than CDAS system. Facilities includes, stationery management, signature verification, current holding, etc. </div>
        </div>
        <div className='flex justify-between px-12 download-sliders'> 
        <Slider  {...settings} className="slider-card pb-12">  
        <SliderCard title='Head office' subTitle='Cross EXE' img={'/assets/img/svg-1.png'} arrow={true} index={props.index}/>
        <SliderCard title='Head office' subTitle='E-Sign' img={'/assets/img/svg-1.png'} arrow={true} index={props.index}/>
        <SliderCard title='Head office' subTitle='DB Support' img={'/assets/img/svg-1.png'} arrow={true} index={props.index}/>
    </Slider >
    <Slider  {...settings} className="slider-card pb-12">  
    <SliderCard title='Branch & Individual Client' subTitle='CrossNet' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    <SliderCard title='Branch & Individual Client' subTitle='Crossweb' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    <SliderCard title='Branch & Individual Client' subTitle='Framework' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    <SliderCard title='Branch & Individual Client' subTitle='Framework' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    </Slider >
    <Slider  {...settings} className="slider-card pb-12">  
    <SliderCard title='Knowledge Base' subTitle='Circulars' img={'/assets/img/svg-6.svg'} arrow={false} index={props.index}/>
    <SliderCard title='Knowledge Base' subTitle='Help' img={'/assets/img/svg-6.svg'} arrow={false} index={props.index}/>
    <SliderCard title='Knowledge Base' subTitle='Modifications' img={'/assets/img/svg-6.svg'} arrow={false} index={props.index}/>
    </Slider >

    </div>
    </div>
  )
}

export default CrossnetDownload