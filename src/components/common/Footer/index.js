import React from 'react'

function Footer() {
    return ( < >

        <footer className = "text-gray-600 body-font bg-[#0A2A4A] px-10 " >
        <div className = "container   py-12  mx-auto" >
        < div className = "flex flex-wrap " >
        < div className = " lg:w-1/4 w-full" >
        < h2 className = "title-font" >
        <img className = "fill-current object-cover h-30 w-40 mb-6"
        src = { require('../Images/logo.png') }
        /> </h2 >
        <nav className = "list-none mb-10" >
        <li >
        <a className = "text-[#3491FF] font-medium text-lg mt-3" > Secmark Consultancy Limited. </a>  </li>  
        < li className = 'mt-5' >
        <a className = "text-[#FFFFFF] font-small text-md" > 36 / 227, RDP 10, Sector VI, Charkop, Kandivali(W), Mumbai, Maharashtra - 400 067, India. </a> 
        </li>  
        </nav>  
        </div> 
        <div className = "p-4 lg:w-1/2 w-full  mt-10 text-center " >
        <div className = 'title-box ' >
        <h2 className = 'title text-base font-bold sm:text-base md:text-base mt-3 text-[#00C673] text-center justify-center' > Technology For Commerce </h2> </div >
        <nav class = "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-3" >
        <a class = "mr-5 text-[#FFFFFF] text-sm font-small sm:text-sm md:text-sm border-r-2 sm:border-[#fff] pr-3 font-light flex align-center items-center " >
        <img src = "/assets/icons/lion.svg"
        className = "w-14 mr-2" />
        <span >
        Make in India </span>  
        </a> 
        < a class = "text-[#FFFFFF] text-sm font-small sm:text-sm md:text-sm mr-4 font-light" > Powered by SecMark Consultancy Limited  </a>

        </nav>  
        </div> 
        < div className = "p-4 lg:w-1/4 w-full px-10 " >
        <h2 className = "title-font font-medium text-[#3491FF] tracking-widest text-lg mb-5 border-l-[1px] sm:border-[#fff] align-left text-left pl-2" > Contact us </h2>  
        < div className = "flex-col-reverse block xl:flex-wrap md:flex-wrap lg:flex-wrap flex-wrap justify-center text-center" >
        < button className = "lg:mt-2 md:w-60 w-full xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#123961]  border-0 py-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded" > < img className = "fill-current px-3 "
        src = { require('../Images/Calling.png') }
        /> +
        91 9969265949 </button>  
        </div>  
        <div className = "flex-col-reverse block xl:flex-wrap md:flex-wrap lg:flex-wrap flex-wrap justify-center text-center  mt-3" >
        <button className = "lg:mt-2 md:w-60  w-full xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#123961]  border-0 py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded" >
        <img className = "fill-current px-2"
        src = { require('../Images/Message.png') }
        />info@secmark.in 
         </button>  
        </div>  
        </div>  
        </div> 
         <div className = "bg-[#0A2A4A] border-t-[0.5px] border-[#FFFFFF]  w-full " >
        < div className = " mx-auto py-2 flex flex-wrap flex-col sm:flex-row justify-between" >
        <p className = "text-[#fff] text-sm text-center sm:text-left " > 2022 Copyright:
        <a href = "#"
        rel = "noopener noreferrer"
        className = "text-[#3491FF] ml-1"
        target = "_blank" > info @secmark.in </a>  
        </p>  
        < div className = "flex justify-between   flex-wrap pl-3 space-x-4 sm:space-x-8" >
        <nav className = "list-none flex-row " >
        <li className = "inline pr-5" >
        <a className = "text-[#ffffff] font-small text-md" > Disclaimer </a>  
        </li>  
        <li className = "inline pl-4" >
        <a className = "text-[#FFFFFF] font-small text-md" > Privacy Policy. </a>  
        </li>  
        </nav>  
        </div>  
        </div>  
        </div>  
        </div>  
        </footer>  
        <div class = "fixed animate-bounce bottom-10 right-10    border-spacing-1 border-white-200 rounded-full  " >
        <a href = "#!" >
        <img src = { '/assets/icons/download.svg' }
        alt = "download-icon"
        className = 'w-20'  />
        </a>  
        </div>  
        </>
    )
}

export default Footer