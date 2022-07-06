import React from 'react';
import './css/ChargeBilling.scss';
const Image = require('./img/ChargeBillImg.png');

function ChargeBilling() {
  return (
    <section id="change-billng-section" className='bg-[#F4FAFF] min-h-[30rem]  '   >

        <div className='container py-12 px-12 mx-auto'>
        
        <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5 pb-4 text-[#0A2A4A] relative text-center  '> Charges & Billing</h2>
       




          <div className='ps-timeline-sec h-[36rem] pt-[10rem]' >
              <div className='container ' >

              <img src={Image} className="absolute" />

                <ol className="ps-timeline">  
                  
                  <li>
                    <div className="img-handler-bot">
                    <p className='text-[#808D9A] text-[16px]'>
                    Levying additional charges for special tasks carried out for clients.
                      </p>
                    </div>
                    
                    <span className="ps-sp-bot">01</span>
                  </li>
                  <li>
                    <div className="img-handler-top">
                    <p className='text-[#808D9A] text-[16px]'>
                    Defining charges scheme applicable to different clients.
                      </p>
                    </div>
                    
                    <span className="ps-sp-top">02</span>
                  </li>
                  <li>
                    <div className="img-handler-bot">
                      
                    <p className='text-[#808D9A] text-[16px]'>Printing bills on blank papers / letter heads / pre defined stationery on Dot Matrix Printer / Page printer in pre-set summarised / detailed mode.</p>
                    </div>
                    
                    <span className="ps-sp-bot">03</span>
                  </li>

                  <li>
                    <div className="img-handler-top">
                      
                    <p className='text-[#808D9A] text-[16px]'>Defining various charges on percentage / minimum bases.</p>
                    </div>
                    <div className="ps-bot">
                    </div>
                    <span className="ps-sp-top">04</span>
                  </li>

                  <li>
                    <div className="img-handler-bot">
                      
                    <p className='text-[#808D9A] text-[16px]'>Forwarding detailed bill to client via E-mail to who are provided summarised bills in print.</p>
                    </div>
                    
                    <span className="ps-sp-bot">05</span>
                  </li>
                  

                  <li>
                    <div className="img-handler-top">
                      
                    <p className='text-[#808D9A] text-[16px]'>Including Demat request charges in bills for better accounting.</p>
                    </div>
                    
                    <span className="ps-sp-top">06</span>
                  </li>



                  <li>
                    <div className="img-handler-bot">
                    <p className='text-[#808D9A] text-[16px]'>Verifying NSDL bill figure including late pay-in charges.</p>
                    </div>
                    
                    <span className="ps-sp-bot">07</span>
                  </li>
                  


               
                </ol>
              </div>
          </div>

        </div>
    </section>
  )
}

export default ChargeBilling