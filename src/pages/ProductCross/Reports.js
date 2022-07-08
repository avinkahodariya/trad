import React from 'react'
import './Reports.css'
// import { initalpagegraph } from '../../components/common/ProductCards/SliderData';

export const initalaccount = [
    { id: 1, active: true, title: 'Report on Non operational clients for certain time period.', use: 'For BSE & NSE Stock Brokers', },
    { id: 2, active: true, title: 'Bill Summary including branch wise / franchise wise / group wise.', use: 'For CDSL DPs', },
    { id: 3, active: true, title: 'Audit Reports and exceptional report for extraordinary items.', use: 'For NDSL DPs', },
    { id: 4, active: true, title: 'Stationery stock report, batch upload report.', use: 'For NDSL DPs', },
    { id: 5, active: true, title: 'Risk Management related reports.', use: 'For NDSL DPs', },
    { id: 6, active: true, title: 'Holding/Pledge valuation report.', use: 'For NDSL DPs', },
    { id: 7, active: true, title: 'DP performance report.', use: 'For NDSL DPs', },
    { id: 8, active: true, title: 'Bill due report and letter.', use: 'For NDSL DPs', },
    { id: 9, active: true, title: 'ISIN, Registrar, Depository Participants etc. listing.', use: 'For NDSL DPs', },

];

const Reports = () => {
    return (
        <section className="text-gray-600 body-font bg-[#ffffff] px-10 py-12">
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-2 pb-10 text-[#0A2A4A] text-center">
                Reports
            </h2>
            <div className='container mx-auto'>
                {initalaccount.map((value, index) => (
                    <ul className={`relative border-l-4 ml-11 border-[#3491FF] dark:border-dark px-5 py-6 ${index % 2 ? "bg-[#FFFFFF]"  : "bg-[#F4FAFF]"}`}>
                        <li className="mb-0 ml-4 flex flex-nowrap ">
                            <div>
                                <div className="absolute stepper-triangle w-5 h-5  bg-[#3491FF]  rotate-45"></div>
                                <div className="absolute -left-0.5 top-15 mt-1.5 border-b-4 w-7 border-[#3491FF]"></div>
                                <div className=" stepper-circle absolute w-3 h-3 bg-[#3491ff] rounded-full "></div>
                            </div>
                            <p className=" font-normal text-[#808D9A] mb-0  text-[1rem]">{value.title}</p></li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Reports;