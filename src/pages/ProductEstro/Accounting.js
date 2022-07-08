import React from 'react'
import './accounting.css'
// import { initalpagegraph } from '../../components/common/ProductCards/SliderData';

export const initalaccount = [
    { id: 1, active: true, title: 'Includes powerful accounting software rich with functions of a full fledge accounting software', use: 'For BSE & NSE Stock Brokers', },
    { id: 2, active: true, title: 'Handling account schedules in accordance with Schedule VI of companies act.', use: 'For CDSL DPs', },
    { id: 3, active: true, title: 'All reports, ledgers, balance sheets on Dot Matrix / Page Printers.', use: 'For NDSL DPs', },
];

const Accounting = () => {
    return (
        <section className="text-gray-600 body-font bg-[#ffffff] px-10 py-12">
            <div className='container mx-auto'>
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-2 pb-10 text-[#0A2A4A] text-center">
                Accounting
            </h2>
            <div>
                {initalaccount.map((value, index) => (
                    <ul className={`relative border-l-4 ml-11 border-[#3491FF] dark:border-dark px-5 py-6 ${index % 2 ? "bg-[#FFFFFF]"  : "bg-[#F4FAFF]"}`}>
                        <li className="mb-0 ml-4 flex flex-nowrap ">
                            <div>
                                <div className="absolute stepper-triangle w-5 h-5  bg-[#3491FF]  rotate-45"></div>
                                <div className="absolute -left-0.5 top-15 mt-1.5 border-b-4 w-7 border-[#3491FF]"></div>
                                <div className=" stepper-circle absolute w-3 h-3 bg-[#3491ff] rounded-full "></div>
                            </div>
                            <p className=" font-medium text-[#808D9A] mb-0  text-[1rem]">{value.title}</p></li>
                    </ul>
                ))}
            </div>
            </div>
            
        </section>
    )
}

export default Accounting;