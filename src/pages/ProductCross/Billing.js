import React from 'react';
const BiCir = require('./img/bil-circle.png');
const ZigZag = require('./img/zig-zag.png');
const Billing = ()=>{
    return (
        <>
            <section className=' bg-[#F4FAFF] py-10 px-14'>
                <div className='container mx-auto relative' >

                    <div className="flex flex-col text-center w-full mb-10">
                    <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-0 text-[#0A2A4A]'>Billing</h2>
                    </div>

                    <img src={ZigZag} className="absolute max-h-full left-[45%] w-[8rem] h-[90%] " />

                    <ul className='list-wrraper'>
                        <li>
                            <div className='flex  justify-start  '>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                        Including Demat request charges in bills for better accounting. (upfront collection is also possible and simplified)
                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-18px] top-[26px] font-semibold font-Lexend ' >
                                        01
                                    </span>
                                </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className='flex justify-end    '>
                                
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-8px] top-[26px] font-semibold font-Lexend ' >
                                            02
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Levying additional charges for special tasks carried out for clients. (e.g. charges for indemnity bond)                                    </p>
                                </div>

                            </div>
                        </li>


                        <li>
                            <div className='flex  justify-start  '>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    Printing bills on blank papers / letter heads / pre defined stationery on Dot Matrix Printer / line Printer / Page printer in summarised / detailed mode.                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-18px] top-[26px] font-semibold font-Lexend ' >
                                        03
                                    </span>
                                </div>
                                </div>
                            </div>
                        </li>



                        <li>
                            <div className='flex justify-end    '>
                                
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-8px] top-[26px] font-semibold font-Lexend ' >
                                            04
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-0 pr-[6rem ]' >
                                    <p className='text-[#808D9A] text-[1rem] text-left'>
                                    Billing may be done for client himself or on a branch or franchise.                                    </p>
                                </div>

                            </div>
                        </li>


                        <li>
                            <div className='flex  justify-start  '>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-[#808D9A] text-[1rem] text-left'>
                                    File export of bill summery for plugging into your other software for users like banks, exchanges, brokers etc.                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-18px] top-[26px] font-semibold font-Lexend ' >
                                        05
                                    </span>
                                </div>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className='flex justify-end    '>
                                
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-8px] top-[26px] font-semibold font-Lexend ' >
                                            06
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Specifying minimum bill amount below which amounts will be carried forward to next billing cycle for accumulation.                                    </p>
                                </div>

                            </div>
                        </li>


                        <li>
                            <div className='flex  justify-start  '>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    Broker DPs may redirect charges attributable to broking division to other account or offer NIL charges on them.                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-18px] top-[26px] font-semibold font-Lexend ' >
                                        07
                                    </span>
                                </div>
                                </div>
                            </div>
                        </li>



                        <li>
                            <div className='flex justify-end    '>
                                
                                <div className='box-right relative text-center  flex justify-center items-center    ' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-8px] top-[26px] font-semibold font-Lexend ' >
                                            08
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    Forwarding detailed bill to client via E-mail to who are provided summarised bills in print.                                    </p>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Billing;