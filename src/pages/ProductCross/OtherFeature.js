import React from 'react'
const AG =  require('./img/a-g.png') 
const AB =  require('./img/a-b.png')
const BGBlue  = require('./img/bg-blue.png')
const BGGreen  = require('./img/bg-green.png')
function OtherFeature() {
  return (
    <section className='bg-white '>

        
            <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5  text-[#0A2A4A] relative text-center pb-10 '>Other Features</h2>

        <div className='container py-20 px-14 min-h-[30rem] mx-auto' >

            <div className='grid grid-cols-2   justify-between min-h-[27rem]' >
                
                    <div className='bg-white   z-[10] relative    '  >
                            <img src={BGGreen} className="absolute z-[0] h-[20rem]" />
                            <div className='content relative top-[2.5rem] left-[7rem] w-[65%]'>
                                <span className='text-[#00C673] text-[50px] font-[600]   '>01</span>
                                <p className='text-[#808D9A] pt-4 text-[1rem]'>User Group Rights can be defined at micro level i.e. add, edit, delete, print, preview, etc.</p>
                            </div>
                    </div>


                    <div className='bg-white   z-[10] relative    '  >
                            <img src={BGBlue} className="absolute z-[0] h-[20rem]" />
                            <div className='content relative top-[2.5rem] left-[7rem] w-[65%]'>
                                <span className='text-[#52A1FF] text-[50px] font-[600]   '>02</span>
                                <p className='text-[#808D9A] pt-4 text-[1rem]'>Holiday master linked with all data entries, can prevent wrong entries.</p>
                            </div>
                    </div>

            </div>

            <div className='grid grid-cols-2   justify-between min-h-[27rem]' >
                
               

                    <div className='bg-white   z-[10] relative    '  >
                            <img src={BGBlue} className="absolute z-[0] h-[20rem]" />
                            <div className='content relative top-[2.5rem] left-[7rem] w-[65%]'>
                                <span className='text-[#52A1FF] text-[50px] font-[600]   '>03</span>
                                <p className='mt-[20px] text-[#808D9A] pt-4 text-[1rem] '>In-built Backup facility removes hassle from very important tasks.</p>
                            </div>
                    </div>

                    <div className='bg-white   z-[10] relative    '  >
                            <img src={BGGreen} className="absolute z-[0] h-[20rem]" />
                            <div className='content relative top-[2.5rem] left-[7rem] w-[65%]'>
                                <span className='text-[#00C673] text-[50px] font-[600]  '>04</span>
                                <p className='text-[#808D9A] pt-4 text-[1rem]'>In-built archival facility for keeping aside old/new data not currently required. User can also copy/transfer various types of data for various periods accordingly. User can also decide the range of data to be transferred that may be different for back office related data, etc.</p>
                            </div>
                    </div>



            </div>

        </div>
    </section>
  )
}

export default OtherFeature