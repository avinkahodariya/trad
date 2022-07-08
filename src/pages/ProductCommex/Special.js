import React from 'react'
import './special.css';
import {IconOne,IconTwo,IconThree,IconFour,IconFive,IconSix,IconSeven,IconEight,} from './Icons';
const dataList = [
    {count: "", icons:<IconOne/>,
     desc:"Multiple company / Multiple Exchanges."},
    {count: "", icons:<IconTwo/>,
     desc:"Simple & easy to understand entry screens and reports."},
    {count: "", icons:<IconThree/>,
     desc:"Can invoke Calculator / calendar from within the software."},
    {count: "", icons:<IconFour/>,
     desc:"All processes taken care of on single screen."},
    {count: "", icons:<IconFive/>,
     desc:"Automatic transfer of bills to accounts."},
    {count: "", icons:<IconSix/>,
     desc:"Very optimally designed data structure, gives better response time."},
    {count: "", icons:<IconSeven/>, desc:" Built in backup facility for fast and simple backup procedure."},
]

function Special() {
    return (
        <>
            <section class="text-gray-600 body-font bg-[#F4FAFF] px-10 py-12">
            <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-2 pb-0 text-[#0A2A4A] text-center">
            Special Features
          </h2>
                <div class="container px-5 py-14 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4 ">
                        {dataList.map((item)=>(
                                 <div class=" lg:w-1/3 md:w-full p-12 ">
                                 <a href="#" class="block p-6 h-[10rem]  md:w-full bg-white rounded-lg border border-gray-200 shadow-md relative">
                                     <div className='absolute garident-svgImg'>
                                         {item.icons}
                                     </div>
                                     <p class="font-normal text-[#808D9A] text-[1rem] text-center p-6">
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

export default Special