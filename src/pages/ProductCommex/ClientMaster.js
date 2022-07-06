import React from "react";
import './clientmaster.scss';

const leftContent = [
    { num: '01', title: ' Grouping by Group / Family / Branch.' },
    { num: '02', title: 'Client code generation facility to find next code available for a given alphabet.' },
];

const rightContent = [
    { num: '03', title: 'Clients can provide their e-mail address where bills / contracts / ledgers / positions / statements etc. may be emailed.' },
    { num: '04', title: 'Provision to Freeze / Unfreeze clients.' },
]


const ClientMaster = () => {
    return (
        <>
            <section id="timeline-section" className="bg-[#F4FAFF]">
                <div className="container flex flex-wrap mx-auto ">
                    <div className='title-box text-center w-full px-20 py-9'>
                        <h2 className=' text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-8 pb-4 text-[#0A2A4A]'>Client Master</h2>
                    </div>
                    <div className="grid grid-cols-2 w-full px-12 py-5">
                        <div class="timeline w:1/2">
                            {leftContent.map((singleLeft) => (
                                <div class="outer">
                                    <div class="card">
                                        <div class="info">
                                            <div className="title-section">
                                                <h3 class="title">{singleLeft.num}</h3>
                                            </div>
                                            <div className="desc">
                                                <h3 className="text-[1rem]">{singleLeft.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div class="right-timeline w:1/2">
                            {rightContent.map((singleRight) => (
                                <div class="outer">
                                    <div class="card">
                                        <div class="info">
                                            <div className="desc">
                                                <h3 className="text-[1rem]">{singleRight.title}</h3>
                                            </div>
                                            <div className="title-section">
                                                <h3 class="title text-[1rem]">{singleRight.num}</h3>
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