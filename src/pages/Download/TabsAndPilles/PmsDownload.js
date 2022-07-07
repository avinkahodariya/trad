import React from 'react'
import SliderCard from './SliderCard'

const PmsDownload = (props) => {
  return (
    <div className='bg-[#fffff]'>
        <div>
        <div className='font-medium text-3xl mb-4	text-center pt-12 text-[#0A2A4A]'>PMS</div>
        <div className='mb-6 text-md text-center text-[#808D9A] font-normal'> Manages portfolios with high degree of automation, internal controls and compliance.</div>
        </div>
        <div className='flex justify-between px-12	py-6'> 
       
    <SliderCard title='Head office' subTitle='PMS' img={'/assets/img/svg-1.png'} arrow={false} index={props.index}/>
    <SliderCard title='Knowledge Base' subTitle='Circular' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    <div class="text-gray-600 body-font">
          <div className="single-slider px-5 py-0">
            <div>
              <div className="flex justify-center p-2  bg-slate-300 md:p-5 md:bg-[#FFFFFF] items-center w-80  rounded-xl">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
    </div>
  )
}

export default PmsDownload