import React from 'react'
import CountUp from 'react-countup';

function Industry() {
    return (
        <>
            <section className="text-gray-600 body-font mb-8 w-full bg-[#0A2A4A]">
                <div className="container px-40 py-12 mx-auto ">
                    <div className='title-box text-center'>
                        <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl mt-3 mb-5 text-[#ffffff]'>Industry Experts</h2>
                    </div>
                    <div className=" container flex flex-wrap text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className=" px-2 py-12 sm:border-r-2 sm:border-[#B3ABC4]">
                                <h2 className="title-font font-bold italic text-5xl text-[#02D67D] text-center ">  <CountUp
                                    start={0}
                                    end={15}
                                    duration={3}
                                />+</h2>

                                <p className="leading-relaxed text-[#ffffff] mt-4">Stock Exchanges</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className=" px-4 py-12 sm:border-r-2 sm:border-[#B3ABC4]">
                                <h2 className="title-font font-bold italic text-5xl text-[#02D67D] text-center "><CountUp
                                    start={0}
                                    end={100}
                                    duration={3}
                                />+</h2>
                                <p className="leading-relaxed text-[#ffffff] mt-4">Trading Members</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className=" px-4 py-12 ">
                                <h2 className="title-font font-bold italic text-5xl text-[#02D67D] text-center "><CountUp
                                    start={0}
                                    end={150}
                                    duration={3}
                                />+</h2>
                                <p className="leading-relaxed text-[#ffffff] mt-4">Stock Brokers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Industry