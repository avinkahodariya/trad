import React from 'react'
const Img1 = require('./img/Web1.png');
const Img2 = require('./img/Web2.png');

function Website() {
  return (
    <>
    <section className='brancher-sections  branch-timeline bg-[#ffffff] '>
        <div className='   px-20 py-20 '  >
            <div className='container mx-auto' >
            <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0  text-[#0A2A4A] relative text-center pb-10 '>Web Site Connectivity (Optional)</h2>



            <div className='grid grid-cols-1 relative h-[10rem] pl-[8rem] '>
                <div className='img-section absolute'>
                    <img src={Img1} className={'h-[10rem]'} />
                </div>
                <div className='txt-setion flex justify-left items-center' >
                    <p className='text-[#808d9a] text-[1rem]'>A comprehensive web application to allow clients to access information on their account using Internet connection.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 relative h-[10rem] pr-[8rem] mt-10 '>
                <div className='txt-setion flex  items-center justify-right' >
                    <p className='w-full text-end text-[#808D9A] text-[1rem]'>Data on web site may be updated using back office application database with built in facility.</p>
                </div>
                <div className='img-section absolute right-0'>
                    <img src={Img2} className={'h-[10rem]'} />
                </div>
            </div>



            </div>
        </div>


    </section>
    </>
  )
}

export default Website