import React from 'react'
const C1 = require('./img/c-1.png');
const C2 = require('./img/c-2.png');

function Brokerage() {
  return (


    <section id="commex-brokerage" className="text-gray-600 body-font ">
      
        <div className="container px-5 py-12 mx-auto ">
            <div className="flex flex-col text-center w-full mt-[2rem] mb-[10rem]">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Brokerage Facility</h2>
            </div>

            <div className='grid grid-cols-5   '>

            <div className='relative left-[2rem]'  >
              <div className="rounded-full w-[15rem] h-[15rem] mx-auto  mt-10 bg-gradient-to-r p-[12px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] relative">
                  <div className="flex flex-col  h-full bg-white text-white rounded-full p-4 flex justify-center items-center">
                      <p className='tetx-[400] text-lg text-center text-[#808D9A]  '> For each slab a Minimum / Percent / Maximum / Fixed brokerage may be defined. </p>
                  </div>
              </div>
                <img src={C1} className="w-full absolute bottom-[-14px] left-[-3%] min-w-[22rem] max-w-[30rem] z-[-10] " style={{borderRadius:'98% 0% 0% 0%'}}  />
            </div>


            <div className='relative top-[-10rem]' >
              <div className="rounded-full w-[15rem] h-[15rem] mx-auto  mt-10 bg-gradient-to-r p-[12px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] relative">
                  <div className="flex flex-col  h-full bg-white text-white rounded-full p-4 flex justify-center items-center">
                  <p className='tetx-[400] text-lg text-center text-[#808D9A] '> Minimum Brokerage per contract may also be defined.
 </p>
                  </div>
              </div>
                <img src={C2} className="w-full absolute top-[30px] left-[-34px] min-w-[22rem] max-w-[30rem] z-[-10]"  />
            </div>




            <div className='relative' >
              <div className="rounded-full w-[15rem] h-[15rem] mx-auto  mt-10 bg-gradient-to-r p-[12px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] relative">
                  <div className="flex flex-col  h-full bg-white text-white rounded-full p-4 flex justify-center items-center">
                  <p className='tetx-[400] text-lg text-center text-[#808D9A] '>   Speculation, squaring off brokerages can be defined for same client. </p>
                  </div>
              </div>
                <img src={C1} className="w-full absolute bottom-[-14px] left-[-30px] min-w-[22rem] max-w-[30rem] z-[-10]"  />
            </div>


            <div className='relative top-[-10rem]' >
              <div className="rounded-full w-[15rem] h-[15rem] mx-auto  mt-10 bg-gradient-to-r p-[12px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] relative">
                  <div className="flex flex-col  h-full bg-white text-white rounded-full p-4 flex justify-center items-center">
                  <p className='tetx-[400] text-lg text-center text-[#808D9A] '> Brokerage discounts may be offerred based on daily turnover.
 </p>
                  </div>  
              </div>
                <img src={C2} className="w-full absolute top-[30px] left-[-34px] min-w-[22rem] max-w-[30rem] z-[-10]"  />
            </div>


             
            <div className='relative right-[2rem]' >
              <div className="rounded-full w-[15rem] h-[15rem] mx-auto  mt-10 bg-gradient-to-r p-[12px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] relative">
                  <div className="flex flex-col  h-full bg-white text-white rounded-full p-4 flex justify-center items-center">
                  <p className='tetx-[400] text-lg text-center text-[#808D9A] '> Introducing person’s brokerage may be credited to his accounts on settlement posting. </p>
                  </div>
              </div>
                <img src={C1} className="w-full absolute bottom-[-14px] left-[-14%] min-w-[22rem] max-w-[30rem] z-[-10]"  style={{borderRadius:'0% 100% 0% 0%'}}  />
            </div>

            </div>
        </div>



    </section>
  )
}

export default Brokerage