import React from "react";
import './timeline.scss';

const leftContent = [
    {num: '01', title: 'Grouping by Group / Family / Branch.' },
    {num: '02', title: 'Store Introducer details.' },
    {num: '03', title: 'Generating and managing UCC file for BSE / NSE.' },
    {num: '04', title: 'List of client/’s Demat Account(s) to ensure the transfer is only to one of the specified account of client.' },
    {num: '05', title: 'Maintain list of client’s bank account(s) which can be used to prevent third party transfer of funds the same can also be used to print on cheque issued to client.' }
];

const rightContent = [
    {num: '06', title: 'Linking with DP back office software and facility for common KYC module and avoid duplication of data entry Facility to store financial details of client of multiple years.' },
    {num: '07', title: 'Client code generation facility to find next code available for a given series of code.' },
    {num: '08', title: 'Clients can provide their e-mail address where contracts / ledgers / positions / demat position / statements etc. may be automatically e-mailed.' },
    {num: '09', title: 'Provision to Freeze / Unfreeze clients.' },
    {num: '10', title: 'Facility to print account opening / welcome letter.' },
]


const ClientMaster = ()=>{
    return (
        <>


<section id="timeline-section">
  
        <div className="container flex flex-wrap mx-auto ">
            
            <div className='title-box text-center w-full px-20 py-9'>
                  <h2 className=' text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]'>Client Master</h2>
              </div>

            <div className="grid grid-cols-2 w-full px-12 py-5 ">

                <div class="timeline w:1/2">
                    {leftContent.map((singleLeft)=>(
                        <div class="outer">
                            <div class="card">
                                <div class="info">
                                    <div className="title-section">
                                        <h3 class="title">{singleLeft.num}</h3>
                                    </div>
                                    <div className="desc font-medium">
                                        <h3 className="text-[1rem]">{singleLeft.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>

                <div class="right-timeline w:1/2">
                    {rightContent.map((singleRight)=>(
                    <div class="outer">


                    <div class="card">
                        <div class="info">
                            
                            <div className="desc font-medium">
                                <h3 className="text-[1rem]">{singleRight.title}</h3>
                            </div>

                            <div className="title-section">
                                <h3 class="title ">{singleRight.num}</h3>
                            </div>

                        </div>
                    </div>



                </div>    
                    ))}
                </div>

        </div>
        </div>
</section>



        </>
    )
}
export default ClientMaster;