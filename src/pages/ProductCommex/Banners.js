import React from 'react';
const Banners = ()=>{
    return(
        <div className="hero-banner  bg-[#F5FAFE]" >
                <div className='container flex flex-wrap  items-center  md:my-5  mx-auto'>
                <main className="px-10 py-8 md:py-10 md:px- ">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-Lexend text-[#0A2A4A] font-semibold md:leading-3 sm:mx-auto  pb-5 lg:mx-0
                            ">
                       Commex
                            </h1>
                            <p className="text-2xl leading-4 tracking-tight font-Lexend text-[#0A2A4A] sm:text-2xl md:text-2xl font-medium  sm:mx-auto   lg:mx-0
                            ">
                          Back office software for Commodities Derivatives.
                            </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Supports all files of Indian exchanges
                            </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4 ">
                            List of terminal along with sub-broker / client identification.
                            </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Unique trade edit screen that displays Order ID, trade ID, terminal No, time, brokerage, brokerage %, brokerage type, net rate, standard rate for each trade and with shortcuts to recalculate brokerages, search, split etc                            </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Provision to apply absolute brokerage on multiple trades on select & apply basis.
                            </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Automatic effect for Custodial trades.                           </p>
                            <p className="mt-3 text-base text-[#808D9A] font-light sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 border-l-2 sm:border-[#3491FF] pl-4">
                            Generate trade files from back office for clients / sub-brokers for use in his office.                           
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
export default Banners;