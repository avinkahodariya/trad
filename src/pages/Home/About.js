import React from 'react';
const About = ()=>{
    return (
        <section className='bg-white px-10'>
            <div className='container flex flex-wrap justify-between items-center mx-auto my-6' >
            <div className='box mt-0 md:mt-5 px-4 md:px-20 pt-0 pb-4'>
                <div className='title-box text-center'>
                    <h2 className='title text-3xl font-[600]  pb-3 text-[#0A2A4A]'>About Us</h2>
                </div>
                <div className="desc-box prose max-w-none mt-4 pb-8 dark:prose-dark xl:col-span-2">
                    <p className='text-center text-[#808D9A] text-[16px] px-[5rem] font-medium'>
                    SecMark Consultancy Ltd. is a Non-Government company founded on 3rd August 2011. Our office is in Mumbai, Maharashtra. We are a one-stop solution to all your financial problems. We are a young company of industry experts who have multiple professional qualifications and have experience working with Regulators, Exchanges, Depositories and Leading Financial Institutions. 
                    Our consulting, technology, outsourcing and management services make Regulatory Compliance, Operations, Risk Management, Business Processes, and ultimately your Lives simpler. More than 200 financial institutions have availed these services so far. The clients include MNCs, Large PSUs and leading private players in financial markets.
                    </p>
                </div> 
            </div>
            </div>
        </section>
    )
}
export default About;