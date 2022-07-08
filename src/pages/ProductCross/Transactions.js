import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './changefacility.css';
// import {initaldata} from '../../components/common/ProductCards/SliderData';
export const initaldata = [
  { id: 1, active: true, sno: '01', title: 'Back office – CDSL – Back office export / import of all different type of transactions including Demat and pledge.', use: 'For BSE & NSE Stock Brokers', },
  { id: 2, active: true, sno: '02', title: 'Reading Response files for various type of uploads.', use: 'For CDSL DPs', },
  { id: 3, active: true, sno: '03', title: 'Display clients name(s), signature, holding, receivables while entering transactions for better security and speed up collection.', use: 'For NDSL DPs', },
  { id: 4, active: true, sno: '04', title: 'Buttons for viewing current holding, transaction statement, ledger while transaction entry.', use: 'For MCX & NCDEX commodities', },
  { id: 5, active: false, sno: '05', title: 'Accept transaction data files from broking back office for on-market, off-market, inter-depository, Power of attorney, Pledge.', use: 'Back Office Data Access Utility', },
  { id: 6, active: false, sno: '06', title: 'Clients with high volume of transactions (generally brokers) may be offered facility to provide data in form of file resulting in time saving, minimisation of mistakes, etc.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '07', title: 'Provision to collect charges upfront with immediate calculation of amount of charge and provision to record receipt of cash / cheque on completion of instruction entry.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '08', title: 'Validations by instruction serial No.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '09', title: 'Unique single transfer entry form for all types of transactions.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '10', title: 'Optional Three levels of authorization and can be defined by administrator based on value of transaction.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '11', title: 'Printing of Transaction Statement, Holding Statement, Charges and Ledger details in single report. Facility for having pre-printed stationary for the same.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '12', title: 'Transaction Analysis Report.', use: 'For MCX & NCDEX commodities', },
  { id: 6, active: false, sno: '13', title: 'Maintains log of each transaction and can report all information about the maker, checker and modifications carried out on a particular transaction.', use: 'For MCX & NCDEX commodities', },

];



const Transactions = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <>
      <div className="bg-[#F4FAFF]">
        <div className='title-box text-center px-5 py-9'>
          <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-0 text-[#0A2A4A]'>Transactions</h2>
        </div>
        <div className="container flex flex-wrap justify-between items-center mx-auto mb-6 px-5 py-6">

          <Slider {...settings} >
            {initaldata.map((value, index) => (
              <div
                key={index + '_value'}
                className=" rounded-xl  w-[20rem] h-[18rem] mx-auto bg-gradient-to-r pt-[6px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7]">
                <div className="flex flex-col  h-full bg-white text-black rounded-lg p-4">
                  <div className=' gradient-circle flex rounded-full w-[4.2rem] h-[4.2rem] mx-auto items-right bg-gradient-to-r p-[1px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] ' >
                    <div className=' flex justify-start items-center w-[4rem] h-[4rem]  bg-white text-white rounded-full p-4  text-center' >
                      <span className='text-center text-3xl title-font font-semibold text-[#176BB3]'> {value.sno}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-[#808D9A] font-normal text-[1rem] mb-1 text-left">{value.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default Transactions;