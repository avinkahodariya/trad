import React from 'react';
const Banner = ()=>{
    return(
        <div className="hero-banner  bg-[#F5FAFE]" >
                <div className='container flex flex-wrap justify-between items-center pl-10 pr-10  md:my-5 mx-auto'>
                <main className="py-2 md:py-10   px-4 md:px- ">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-10">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-3xl tracking-tight font-Lexend text-[#0A2A4A] font-semibold md:leading-3 sm:mx-auto  pb-5 lg:mx-0
                            ">
                       eSign
                            </h1>
                            <p className="text-2xl leading-4 tracking-tight font-Lexend text-[#0A2A4A] sm:text-2xl md:text-2xl font-medium  sm:mx-auto   lg:mx-0
                            ">
                          Module for digitally signing the documents and dispatch to email address of client with maintenance of log
                            </p>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 ">
                            It is now legally possible to forward your contract notes and other documents to your clients / business associates without printing them. You may even forward a signed document over e-mail and that is a valid proof in court of law in India. This is called digitally signing your documents. A digital signature is endorsed to the document that needs to be singed. The recipient can not only preserve and produce before various government authorities whenever required but also can verify that the document is properly signed or not.
                            </p>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 ">
                            When doing bulk mailing like sending few hundred contracts / bills on daily bases and having to print the documents, sign them, courier them is by itself very painful job. The cost involved and the time lag in making this documents reach the client / recipient is also an important factor. Just because the document needs to be signed by a person, such huge cost of handling documents apart from delayed information is something not advisable in the current environment.                            </p>
                        </div>

                        <div>
                            <img src='/assets/img/banner-img.svg' alt="banner-img" className="w-100 mt-[7rem]"  /> 
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default Banner;