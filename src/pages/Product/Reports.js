import React from 'react'
import './reports.css'
// import { initalpagegraph } from '../../components/common/ProductCards/SliderData';

export const initalpagegraph = [
    { id: 1, active: true, title: 'Reports based on clients, Security for providing to clients or for internal controls and usage.', use: 'For BSE & NSE Stock Brokers', },
    { id: 2, active: true, title: 'Multiple settlement reports with various options.', use: 'For CDSL DPs', },
    { id: 3, active: true, title: 'Reports like Brokerages, Service Tax payable, Client Performance, security wise concentration on periodic basis like daily, monthly, quarterly etc.', use: 'For NDSL DPs', },
    { id: 4, active: true, title: 'Trades daybook (Trades Register) in order of time, security, client for particular day or period across the settlement(s) along option to select / deselect columns.', use: 'For MCX & NCDEX commodities', },
    { id: 5, active: false, title: 'Risk Management related reports.', use: 'Back Office Data Access Utility', },
    { id: 6, active: false, title: 'Report based on client’s delivery lying with us and clients having ledger debits since last 7 days. Facility also available to generate BSE / NSE / front office file to load order file for shares to be sold with various selection criteria.', use: 'For MCX & NCDEX commodities', },
    { id: 7, active: false, title: 'All client related reports may be taken for specific client group or family or sub-broker or branch and may be taken in order of client code / client name / group / family etc.', use: 'For MCX & NCDEX commodities', },
    { id: 8, active: false, title: ' Investor Portfolio Report to monitor periodic trading position of client / self consolidated for various settlement types across exchanges clubbed for multiple account codes.', use: 'For MCX & NCDEX commodities', },
    { id: 9, active: false, title: 'Brokerage Sharing Report for any period.', use: 'For MCX & NCDEX commodities', },
    { id: 10, active: false, title: 'Performance report for Clients / Groups / families / securities / branches / trading terminals / sub-broker etc for any range of period.', use: 'For MCX & NCDEX commodities', },
    { id: 11, active: false, title: 'Report printing with facility to select target printer, set print quality / size of report or redirection to a file in various formats like TXT / RTF / HTML / XLS.', use: 'For MCX & NCDEX commodities', },
    { id: 12, active: false, title: 'VAR / RMS Margin reports.', use: 'For MCX & NCDEX commodities', },
    { id: 13, active: false, title: 'Various MIS reports like Brokerage Analysis, Performance reports & other various statistics.', use: 'For MCX & NCDEX commodities', },
    { id: 14, active: false, title: 'Graphical representation of various reports.', use: 'For MCX & NCDEX commodities', },
    { id: 15, active: false, title: 'All reports can be printed in fast DOS mode or on GUI Printers or may be e-mailed.', use: 'For MCX & NCDEX commodities', },

];

const Reports = () => {
    return (
        <section className="text-gray-600 body-font bg-[#ffffff] px-10 py-12">
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-10 text-[#0A2A4A] text-center">
                Reports
            </h2>
            <div className='container mx-auto'>
                {initalpagegraph.map((value, index) => (
                    <ul className={`relative border-l-4 ml-11 border-[#3491FF] dark:border-dark px-5 py-6 ${index % 2 ? "bg-[#FFFFFF]"  : "bg-[#F4FAFF]"}`}>
                        <li className="mb-0 ml-4 flex flex-nowrap ">
                            <div>
                                <div className="absolute stepper-triangle w-5 h-5  bg-[#3491FF]  rotate-45"></div>
                                <div className="absolute -left-0.5 top-15 mt-1.5 border-b-[3px] w-[2rem] border-[#3491FF]"></div>
                                <div className="stepper-circle absolute w-3 h-3 bg-[#3491ff] rounded-full"></div>
                            </div>
                            <p className="font-medium text-[1rem] text-[#808D9A] mb-0 ">{value.title}</p></li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Reports;