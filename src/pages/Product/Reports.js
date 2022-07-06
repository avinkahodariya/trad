import React from 'react'
import './reports.css'
// import { initalpagegraph } from '../../components/common/ProductCards/SliderData';

export const initalpagegraph = [
    { id: 1, active: true, title: 'Reports based on clients, Security for providing to clients or for internal controls and usage.', use: 'For BSE & NSE Stock Brokers', },
    { id: 2, active: true, title: 'Multiple settlement reports with various options.', use: 'For CDSL DPs', },
    { id: 3, active: true, title: 'Reports like Brokerages, Service Tax payable, Client Performance, security wise concentration on periodic basis like daily, monthly, quarterly etc.', use: 'For NDSL DPs', },
    { id: 4, active: true, title: 'Trades daybook (Trades Register) in order of time, security, client for particular day or period across the settlement(s) along option to select / deselect columns.', use: 'For MCX & NCDEX commodities', },
    { id: 5, active: false, title: 'Various reports like Demat Audit, Holding statement, Demat standing available.', use: 'Back Office Data Access Utility', },
    { id: 6, active: false, title: 'Possible inter-settlement report is available. Automatic generation of inter-settlement transfer entries and printing of instructions.', use: 'For MCX & NCDEX commodities', },
    { id: 7, active: false, title: 'Transfer into own beneficiary account based on payment receivable status of client is possible. Scanning for client’s holding in our beneficiary balance for making delivery against his sale and generation transfer instruction from our beneficiary into our pool for the purpose of pay-in is also possible.', use: 'For MCX & NCDEX commodities', },
    { id: 8, active: false, title: 'Demat confirmation letter & report available.', use: 'For MCX & NCDEX commodities', },
    { id: 9, active: false, title: 'Demat Reconciliation using SPEEDe file, DPC9, DP50, Exchange pay out file, file received from DP etc. may be used for reconciliation.', use: 'For MCX & NCDEX commodities', },
    { id: 10, active: false, title: 'Corporate action adjustment for Bonus, Split etc. can also generate Journal vouchers for dividend credit for clients’ shares lying with us.', use: 'For MCX & NCDEX commodities', },
    { id: 11, active: false, title: 'Viewing of holding reports to list quantity of shares of clients lying with us.', use: 'For MCX & NCDEX commodities', },

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
                                <div className="absolute -left-0.5 top-15 mt-1.5 border-b-4 w-7 border-[#3491FF]"></div>
                                <div className="stepper-circle absolute w-3 h-3 bg-[#3491ff] rounded-full"></div>
                            </div>
                            <p className="font-medium text-[1rem] text-[#808D9A] mb-0 text-sm">{value.title}</p></li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default Reports;