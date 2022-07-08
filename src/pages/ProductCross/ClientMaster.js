import React from "react";
import './clientmaster.scss';

const leftContent = [
    {num: '01', title: 'Back office – CDSL system Back office export / import.'},
    {num: '02', title: 'Additional information like:,,Charges scheme, Billing frequency and detailed / summary mode.,,Frequency of statement of transactions, holding along with mode of delivery like print, email, fax, courier etc.,,Broking Back office client code.'},
    {num: '03', title: 'Grouping clients by family, category, group, branch etc.' },
    {num: '04', title: 'A/c opening letters printing with / without list of attachments.' },
    {num: '05', title: 'Redefining charges, group, billing and statement frequency by selecting from list of clients.' },

];

const rightContent = [
    {num: '06', title: 'Special Account closing option to carry out all required checks on receivables and pending demat(s) from back office.' },
    {num: '07', title: 'Warning on dormant accounts usage and provision to freeze accounts.' },
    {num: '08', title: 'Edit / Capture Signature of Client as well as for Power of Attorney.' },
    {num: '09', title: 'Client listing with special filter and Label Printing for selectable fields including balance.' },
    {num: '10', title: 'Facility to create receipt entry for documentation charges at the time of account opening.' },
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

            <div class="timeline w:1/2 h-fit">
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
                                        <h3 className="text-[1rem]">{splitTitle[0]}</h3>
                                    {index == 1 &&
                                    <>
                                        <h3>• {splitTitle[1]}</h3>
                                        <h3>• {splitTitle[2]}</h3>
                                        <h3>• {splitTitle[3]}</h3>
                                    </>
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                )})}
                    
                </div>
                <div class="right-timeline w:1/2 h-fit">
                    {rightContent.map((singleRight)=>(
                    <div class="outer">


                    <div class="card">
                        <div class="info">
                            
                            <div className="desc font-medium">
                                <h3 className="text-[1rem]">{singleRight.title}</h3>
                            </div>

                            <div className="title-section">
                                <h3 class="title">{singleRight.num}</h3>
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