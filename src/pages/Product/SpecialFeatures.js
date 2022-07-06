import React from 'react'
import './SpecialFeatures.css';
import {IconOne,IconTwo,IconThree,IconFour,IconFive,IconSix,IconSeven,IconEight,} from './Icons';
const dataList = [
    {count: "", icons:<IconOne/>,
     desc:"Powerful risk management system to calculate overall risk position of client after considering ledger balance, collaterals, margins due, deliveries receivable, deliveries retained, delivery in client’s BO account (if with our DP) and also debit for DP services."},
    {count: "", icons:<IconTwo/>,
     desc:"Multiple companies / Multiple Exchanges / Multiple Segments possible."},
    {count: "", icons:<IconThree/>,
     desc:"Simple & easy to understand entry screens and reports."},
    {count: "", icons:<IconFour/>,
     desc:"Can invoke Calculator / calendar from within the software."},
    {count: "", icons:<IconFive/>,
     desc:"All processes displayed on a single screen. "},
    {count: "", icons:<IconSix/>,
     desc:"Automatic transfer of settlement to accounts, so that even sub-brokers do not require help of specialized accountant."},
    {count: "", icons:<IconSeven/>, desc:"Optimally designed data structure, gives better response time."},
    {count: "", icons:<IconEight/>, desc:"Built in backup facility in compressed form for fast and simple backup procedure."}
]

function SpecialFeatures() {
    return (
        <>
            <section class="text-gray-600 body-font bg-[#F4FAFF] px-10 py-12">
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-2 pb-0 text-[#0A2A4A] text-center">
            Special Features
          </h2>
                <div class="container px-5 py-14 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4 ">
                        {dataList.map((item)=>(
                                 <div class=" lg:w-1/2 md:w-full p-12 ">
                                 <a href="#" class="block p-6 h-[10rem]  md:w-full bg-white rounded-lg border border-gray-200 shadow-md relative">
                                     <div className='absolute garidents-svgImg'>
                                         {item.icons}
                                     </div>
                                     <p class="font-normal text-[#808D9A] text-[1rem]  text-left p-6">
                                        {item.desc}
                                     </p>
                                 </a>
                             </div>
                        ))}
                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecialFeatures