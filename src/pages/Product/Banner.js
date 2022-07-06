import React from 'react';
const Banner = ()=>{
    return(
        <div className="hero-banner  bg-[#F5FAFE]" >
                <div className='container flex flex-wrap  items-center  md:my-5  mx-auto px-14'>
                <main className="- ">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-Lexend text-[#0A2A4A] font-semibold md:leading-3 sm:mx-auto  pb-5 lg:mx-0
                            ">
                       Trade Plus
                            </h1>
                            <p className="text-2xl leading-4 tracking-tight font-Lexend text-[#0A2A4A] sm:text-2xl md:text-2xl font-medium  sm:mx-auto   lg:mx-0
                            ">
                          Back office package for Stock brokers.
                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            TradePlus supports import of all BSE and NSE files including BSE Auction file.
                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4 ">
                            Unique Trade Amendment screens that captures every element of trade execution.
                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Provision to apply absolute brokerage on multiple trades on select and apply basis.                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            All processes required for Institutional Business.
                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Automatic Effect for custodial trades.                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                                Facility to accumulate trades and allocate quantity based on MF/PMS scheme details provided in .xls file.                            
                            </p>
                            <p className="mt-3 text-[1rem] text-gray-500 sm:mt-5 sm:text-[1rem] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[1rem] lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                                Generate files for most front office software for new client creation and limit setting, including additional limit file for BTST.                           
                             </p>
                        </div>

                        <div>
                            <img src='/assets/img/banner-img1.svg' alt="banner-img" className="w-100 mt-20"/> 
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Banner;