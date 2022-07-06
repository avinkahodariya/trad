import React from 'react';
const Banners = ()=>{
    return(
        <div className="hero-banner  bg-[#F5FAFE]" >
                <div className='container flex flex-wrap  items-center mx-auto'>
                <main className="px-10 py-8 md:py-10 md:px- ">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-10 pl-10">
                        <div className="sm:text-center lg:text-left ">
                        <h1 className="text-3xl tracking-tight font-Lexend text-[#0A2A4A] font-semibold md:leading-3 sm:mx-auto   lg:mx-0
                            ">
                        ESTRO
                            </h1>
                            <p className="text-2xl leading-4 tracking-tight font-Lexend text-[#0A2A4A] sm:text-2xl md:text-2xl font-medium md:leading-12 sm:mt-5  sm:max-w-xl sm:mx-auto   lg:mx-0
                            ">
                           Electronic  Security Treasury Records Organiser 
                            </p>
                            <p className="mt-3 text-base font-normal text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                            A complete software for managing all activities in Depository participant’s office. It starts with recording of a client’s (beneficiary or clearing member) account opening information in Estro. This back office may be at same location as DPM system or at a remote location networked as branch.
                            </p>
                            <p className="mt-3 text-base font-normal text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
                           
Transfer instruction may also be entered into Estro, which offers lot more facilities and security than DPM system. This includes maker / checker concept as in use by banks where each transaction is required to be authorised by persons at different levels depending upon the value and type of transaction.
                            </p>
                           
                        </div>

                        <div>
                            <img src='/assets/img/banner-img.svg' alt="banner-img" className="w-100 mt-10"/> 
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Banners;