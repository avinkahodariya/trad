import React from 'react'
const ractangle = require('./img/security-rectangle.svg');
const securityLine = require('./img/securityLine.png');

const Poligon = ({ className, counting }) => {
  return (
    <>
      <div className={className} >
        <svg width="91" height="103" viewBox="0 0 91 103" fill="none" xmlns="http://www.w3.org/2000/svg"  >
          <path d="M45.5 0L90.1003 25.75V77.25L45.5 103L0.899693 77.25V25.75L45.5 0Z" fill="url(#paint0_linear_1133_14051)" />
          <defs>
            <linearGradient id="paint0_linear_1133_14051" x1="-6" y1="0" x2="101.292" y2="96.3241" gradientUnits="userSpaceOnUse">
              <stop stop-color="#92DCDF" />
              <stop offset="0.0001" stop-color="#DEFFF1" />
              <stop offset="1" stop-color="#B0D3FE" />
            </linearGradient>
          </defs>
        </svg>
        <span className='counting absolute top-[1.7rem] left-[2rem] text-[2rem] text-[#00C673]  font-semibold ' >{counting}</span>
      </div>
    </>
  )
}



const LineImg = ({ className }) => {
  return (
    <span className={` border-dashed border-t-[5px] border-[#0080F6]  ${className} end-point  `} ></span>
  )
}
const Security = () => {
  return (
    <>
      <section id="security-section " >
          <div className='container mx-auto' >          
            <div className='title-box text-center'>
                <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-0 text-[#0A2A4A]'>Security</h2>
            </div>

            <div className='side-section   grid grid-cols-1 w-full' >
              <div className='relative w-full px-10  mt-[30px]' >
                <div className='flex justify-left items-center pb-3 ' >
                  <Poligon className="relative" counting="01" />
                  <LineImg className=" w-[33rem] relative" />
                  <p className='w-[60%] text-[#808D9A]  text-[18px]   ml-[2rem] '>
                    Password for each user along with authority / restriction setting for individual activity.
                  </p>
                </div>

                <div className='flex justify-left items-center pb-3  ' >
                  <Poligon className=" ml-[5rem] relative" counting="02" />
                  <LineImg className=" w-[28rem] relative" />
                  <p className='w-[60%] text-[#808D9A]  text-[18px]   ml-[2rem] '>
                    Stores client code as in trade file of exchange for verification against unauthorized modification.
                  </p>
                </div>
                <div className='flex justify-left items-center pb-3  ' >
                  <Poligon className="ml-[9rem] relative" counting="03" />
                  <LineImg className=" w-[24rem] relative" />
                  <p className='w-[60%] text-[#808D9A]  text-[18px]   ml-[2rem] '>
                    Security of client / server and RDBMS Database.
                  </p>
                </div>
                <div className='flex justify-left items-center pb-3  ' >
                  <Poligon className="ml-[5rem] relative" counting="04" />
                  <LineImg className=" w-[28rem] relative" />
                  <p className='w-[60%] text-[#808D9A]  text-[18px]   ml-[2rem] '>
                    Automatic locking of settlement on generation of bills.
                  </p>
                </div>
                <div className='flex justify-left items-center pb-3  ' >
                  <Poligon className="relative" counting="05" />
                  <LineImg className=" w-[33rem] relative" />
                  <p className='w-[60%] text-[#808D9A]  text-[18px]   ml-[2rem] '>
                  Each user may be restricted / permitted to access data of selected company/exchange.                  </p>
                </div>
               
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Security;