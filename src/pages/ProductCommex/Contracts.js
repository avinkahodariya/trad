import React from 'react';
// import leftTop from './img/leftTop.png';
const leftTop = require('./img/leftTop.png');
const leftBottom = require('./img/left-bottom.png');

const rightTop = require('./img/right-top.png');
const rightBottom = require('./img/right-bottom.png');

const Contracts = () => {
    return (
        <>
        <section id="contract-section">
                <div className="container flex flex-wrap  px-20 py-10 mx-auto">
                    <div className='grid grid-cols-3 '>
                        <div className='left-box z-10' >
                            <div className='top flex rounded-xl w-100 h-30 mx-auto  mt-10 bg-gradient-to-r p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA] ' >
                                <div className='flex justify-between  items-center h-full bg-white text-white rounded-lg p-4 w-full text-center' >
                                    <p className='text-gray-500 text-[1rem] text-center'>Printing on Existing stationery in fast DOS Mode / GUI Mode.</p>
                                </div>
                            </div>
                            <div className='bottom flex   rounded-xl w-100 h-30 mx-auto  mt-20 bg-gradient-to-r p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA] ' >
                                <div className='flex justify-between items-center h-full bg-white text-white rounded-lg p-4 w-full text-center' >
                                    <p className='text-gray-500 text-[1rem] ml-[5rem] p-2'>Bill Printing for multiple days</p>
                                </div>
                            </div>

                        </div>

                        <div className='center-box relative flex justify-center items-center  mb-20 rounded-full w-200 h-200 mx-auto  mt-20 bg-gradient-to-r p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA]' >

                            <div className='left-side-arrow absolute ' >
                                <img src={leftTop} className="left-top" />
                                <img src={leftBottom} className="left-bottom" />
                            </div>

                            <div className=' flex justify-between items-center text-center  bg-white text-white rounded-full p-4 w-full h-full z-10' >
                                <h2 className=' text-center main-title 
                            title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]
                            '>Contracts & Bills</h2>
                            </div>

                            <div className='right-side-arrow absolute '   >

                                <img src={rightTop} className="right-top" />

                                <img src={rightBottom} className="right-bottom" />

                            </div>
                        </div>

                        <div className='right-box z-10 mt-[.5rem]' >
                            <div className='top flex  mb-20 rounded-xl w-100 h-30 mx-auto  mt-10 bg-gradient-to-r p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA]' >
                                <div className='flex justify-between items-center h-full bg-white text-white rounded-lg p-4 w-full text-center' >
                                    <p className='text-gray-500 text-center text-[1rem] justify-center ml-[3rem] p-2'> Bills may be rounded off to nearest Rupee, etc.</p>
                                </div>
                            </div>
                            <div className='bottom flex   rounded-xl w-100 h-30 mx-auto mt-20 bg-gradient-to-r p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA] ' >
                                <div className='flex justify-between items-center h-full  bg-white text-white rounded-lg p-4 w-full text-center' >

                                    <p className='text-gray-500 text-[1rem] text-center p-2 ml-[1.5rem]'>Confirmations may be forwarded to client via e-mail.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contracts;