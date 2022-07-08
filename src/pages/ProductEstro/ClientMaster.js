import React from "react";
import './timeline.scss';

const leftContent = [
    {num: '01', title: 'Back office - DPM - Back office export / import.' },
    {num: '02', title: 'Additional information like:,,Charges scheme.,,Billing frequency and detailed / summary mode.,,Statement of Transactions & holding frequency & mode.'},
    {num: '03', title: 'Group clients by family.' },
    {num: '04', title: 'Redefining charges, group, billing and statement frequency by selecting from list of clients.' },
];

const ClientMaster = ()=>{
    return (
        <>


<section id="timeline-section">
  
        <div className="container flex flex-wrap  mx-auto">
            
            <div className='title-box text-center w-full px-20 py-9'>
                  <h2 className=' text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-0 text-[#0A2A4A]'>Client Master</h2>
              </div>

            <div className="grid grid-cols-2 w-full px-12 py-5">

                <div class="timeline w:1/2">
                    {leftContent.map((singleLeft, index) => {
                        var splitTitle = singleLeft.title.split(',,');
                        return(
                        <div class="outer">
                            <div class="card">
                                <div class="info">
                                    <div className="title-section">
                                        <h3 class="title">{singleLeft.num}</h3>
                                    </div>
                                    <div className="desc">
                                        <h3 className="font-medium text-[1rem]">{splitTitle[0]}</h3>
                                    {index == 1 &&
                                    <>
                                        <h3 className="font-medium">• {splitTitle[1]}</h3>
                                        <h3 className="font-medium">• {splitTitle[2]}</h3>
                                        <h3 className="font-medium">• {splitTitle[3]}</h3>
                                    </>
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                )})}
                    
                </div>
        </div>
        </div>
</section>



        </>
    )
}
export default ClientMaster;