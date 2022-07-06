import React from 'react'
import { Img1,Img2,Img3,Img4 } from './img/Icons';

const listData = [
    {content:"Facility has been provided to create full functional branches that can operate without DPM systems and yet provide clients of branches with timely information and services.",img: <Img1/>},
    {content:"Reports on branch profitability and inter branch comparisons.",img: <Img2/>},
    {content:"Reports on earnings / expenses of branches for effective working of franchise concepts on branches.",img: <Img3/>},
    {content:"Transfer of data to and from branches using dial-up / web connectivity using Data transfer features of database to prevent handling errors and tampering.",img: <Img4/>}
];
function Branches() {
  return (
    <section className='brancher-sections  branch-timeline bg-[#F4FAFF] '>

        <div className=' h-[50rem]  px-20 py-20 '  >
              <div className='container mx-auto' >
                
        <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5 pb-0 text-[#0A2A4A] relative text-center pb-10 '>Branches</h2>
                <ol className="flex   grid md:grid-cols-4  branch-timeline-list ">
                  
                  <li>
                    <div className="img-handler">   
                    <Img1/>
                    </div>
                    <div className='txt-handler-bottom 
                        
                     
                     '>
                        <p className='text-[#808D9A] text-[1rem] text-center'>
                            Facility has been provided to create full functional branches that can operate without DPM systems and yet provide clients of branches with timely information and services.
                        </p>
                    </div>
                  </li>
                  <li>
                    <div className="txt-handler-top">
                        <p className='text-[#808D9A] text-[1rem] text-center'>
                            Reports on branch profitability and inter branch comparisons.
                        </p>
                    </div>

                    <div className="img-handler-bottom 
                    
                    ">   
                    <Img2/>
                    </div>

                  </li>
                  <li>
                   
                    <div className="img-handler">   
                    <Img3/>
                    </div>
                    <div className='txt-handler-bottom'>
                        <p className='text-[#808D9A] text-[1rem] text-center'>
                        Reports on earnings / expenses of branches for effective working of franchise concepts on branches.
                        </p>
                    </div>

                  </li>

                  <li>

                  

                    <div className="txt-handler-top">
                    <p className='text-[#808D9A] text-[1rem] text-center'>Transfer of data to and from branches using dial-up / web connectivity using Data transfer features of database to prevent handling errors and tampering.</p>
                    </div>
                    <div className="img-handler-bottom">   
                    <Img4/>
                    </div>
                  </li>

            


               
                </ol>
              </div>
          </div>

    </section>
  )
}

export default Branches