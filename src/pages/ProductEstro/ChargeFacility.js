import React from 'react'
import './changesfacility.css'

function ChargeFacility() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-5">
                    <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5 pb-0 text-[#0A2A4A] text-center'>Charges</h2>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 relative">
                            <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                                <img alt="No Image" src="/assets/img/Ellipse-1.svg" className=" ellipse-img h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>01</span>
                                <p class="font-normal text-[#808D9A] pt-5 text-center text-[1rem]">Formulation of various scheme and default scheme concept for easy definition of schemes to individual accounts.</p>
                            </a>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 relative">
                        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                                <img alt="No Image" src="/assets/img/Ellipse-1.svg" className=" ellipse-img h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>02</span>
                                <p class="font-normal text-[#808D9A] pt-5 text-center text-[1rem]">Mass redefining scheme for selected clients.</p>
                            </a>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 relative">
                        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                                <img alt="No Image" src="/assets/img/Ellipse-1.svg" className=" ellipse-img h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>03</span>
                                <p class="font-normal text-[#808D9A] pt-5 text-center text-[1rem]">Provision of charges on rejected entries, Demat request, late pay-ins, additional copies of statements etc.</p>
                            </a>
                        </div>
                        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 relative">
                        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                                <img alt="No Image" src="/assets/img/Ellipse-1.svg" className=" ellipse-img h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>04</span>
                                <p class="font-normal text-[#808D9A] pt-5 text-center text-[1rem]">Displaying transaction carrying out cost, cash collection and issuing of receipts for the same while entering instructions.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChargeFacility