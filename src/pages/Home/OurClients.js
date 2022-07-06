import React from 'react'

function OurClient() {
    return (
        <>
            <div className='title-box text-center'>
                <h2 className='title text-lg font-semibold sm:text-3xl md:text-3xl mt-3 text-[#0A2A4A]'>Our Clients</h2>
            </div>
            <section className="text-gray-600 body-font px-10">
                <div className="container  py-8 mb-12 mx-auto  ">
                    <div className="flex  text-center gap-2 ">
                        <div className=" sm:w-1/6  rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-30 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-1.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                        <div className=" sm:w-1/6 w-1/2 rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-20 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-2.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                        <div className=" sm:w-1/6 w-1/2 rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-20 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-3.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                        <div className=" sm:w-1/6 w-1/2 rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-20 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-4.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                        <div className=" sm:w-1/6 w-1/2 rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-20 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-5.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                        <div className=" sm:w-1/6 w-1/2 rounded-lg bg-gradient-to-r from-[#DEFFF1] to-[#B0D3FE] h-20 ">
                            <h2 className="">
                                <img src='/assets/img/Clientimg-6.svg' alt="Client-img" className="h-20 w-20 mx-auto " />
                            </h2>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurClient