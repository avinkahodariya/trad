import React from 'react'
import './report.css'
// import { initalpagegraph } from '../../components/common/ProductCards/SliderData';

export const initalpagegraph = [
    { id: 1, active: true, title: ' Reports based on clients, commodity for providing to clients or for internal controls and usage.', use: 'For BSE & NSE Stock Brokers', },
    { id: 2, active: true, title: 'Reports like Brokerages, Client Performance, produce wise concentration on periodic basis like daily, monthly, quarterly etc.', use: 'For CDSL DPs', },
    { id: 3, active: true, title: 'Trades daybook (Trades Register) in order of time, security, client along option to select / deselect columns.', use: 'For NDSL DPs', },
    { id: 4, active: true, title: ' All client related reports may be taken for specific client group, family, sub-broker or branch and may be taken in order of client code / client name / group / family etc.', use: 'For MCX & NCDEX commodities', },
    { id: 5, active: false, title: 'Investor Portfolio Report to monitor periodic trading position of client / self consolidated for period across exchanges clubbed for multiple account codes.', use: 'Back Office Data Access Utility', },
    { id: 6, active: false, title: 'Brokerage Sharing Report and automatic posting on bill generation.', use: 'For MCX & NCDEX commodities', },
    { id: 7, active: false, title: 'Performance report for Clients / Groups / families / commodity / branches / trading terminals / sub-broker etc for any range of period.', use: 'For MCX & NCDEX commodities', },
    { id: 8, active: false, title: 'Report printing with facility to select target printer, set print quality / size of report or redirection to a file in various formats like .txt / .rft / .html/ .xls.', use: 'For MCX & NCDEX commodities', },
    { id: 9, active: false, title: 'Various MIS reports like Brokerage Analysis, Performance reports & other various statistics.', use: 'For MCX & NCDEX commodities', },
    { id: 10, active: false, title: 'Graphical representation of various reports.', use: 'For MCX & NCDEX commodities', },
    { id: 11, active: false, title: 'All reports can be printed in fast DOS mode or on GUI Printers or may be e-mailed.', use: 'For MCX & NCDEX commodities', },

];

const Reports = () => {
    return (
        <section className="text-gray-600 body-font bg-[#ffffff] px-10 py-12">
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-7 text-[#0A2A4A] text-center">
                Reports
            </h2>
            <div className='container mx-auto'>
                {initalpagegraph.map((value, index) => (
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