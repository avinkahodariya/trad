import React from 'react'
import './tradenet.css';
const listData = [
    {desc:'All relevant reports required by branches / franchises for day to day operations with facility to save and print the same'},
    {desc:'If remote center is give a facility of cheque issue, he may also enter payment entries from remote.'},
    {desc:'Make request for release of funds / shares due to client. The release will be subject to verification by head office.'},
    {desc:'Commodity Exchange data can also be display under same utility, under single login.'},
]
const rightSideData = [
    {desc:"Entry of receipts for collection received by branches. The credit for the same will reflect in client’s ledger only on authorization by head office."},
    {desc:"Branches can enter new clients’ information from remote, client will be active only when authorized by head office."},
    {desc:"Holding statement of Clients having their demat account with us can be made available to branches through same utility."},
    {desc:"All rights available to TradeNet user can be defined by head office."},
]
function TradeNet() {
    return (
        <>
        <section className="bg-[#ffffff] px-20 py-12 time-2202-line">
            <div className='container mx-auto ' >
                <h2 className="title text-2xl lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-7 text-[#0A2A4A] text-center">
                    TradeNet – Browser based connectivity software
                </h2>
                <div className=" flex-wrap  grid grid-cols-2 mt-10 p-4  ">

                    <ul className="  relative    px-5 mb-4 w-full">
                        {listData.map((item,index)=>(
                        <li className="mb-0 text-[#808D9A] text-[18px] ml-2 flex flex-nowrap squre " key={index}>
                            <p className=" font-normal text-[#808D9A] w-full   text-[1rem] m-[-5px] ">{item.desc}</p>
                        </li>
                        
                        ))}
                    
                    </ul>
                    <ul className="  relative    px-5 mb-4  p-4">
                        {rightSideData.map((item,index)=>(
                            <li className="mb-0 text-[#808D9A] text-[18px] ml-2 flex flex-nowrap squre " key={index}>
                                <p className=" font-normal text-[#808D9A] w-full  text-[1rem] m-[-5px]">{item.desc}</p>
                            </li>                    
                        ))}
                    </ul>
                </div>
            </div>
            </section>
        </>
    )
}

export default TradeNet;
