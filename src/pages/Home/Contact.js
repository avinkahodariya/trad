import React, { useState } from 'react';
const Contact = ()=>{

        const [data, setdata] = useState({
        name:"",
        email:"",
        phone:"",
    })
    const [eroor, seteroor] = useState({})

    const onChange =  (e) =>{
       let  dataObj = {...data};
       dataObj[e.target.name]=e.target.value;
       setdata({...dataObj})
    }

    const check = ()=>{
        validate()
    }

    const validate =()=>{
        let error={...eroor}
         if(data.email==""){
            error.email=true
         }else{
            error.email = false
         }
         if(data.phone==""){
            error.phone=true
         }else{
            error.phone = false

         }
         if(data.name==""){
            error.name=true
         }else{
            error.name = false
         }
         console.log("🚀 ~ file: Contact.js ~ line 38 ~ validate ~ error", error)

         seteroor(error)
    }



    return (
        <>
            <section id="contact-section" >
                <div className='container mx-auto' >
                <div className="text-center w-full">
                    <div>
                        <h2 className="font-semibold sm:text-3xl md:text-3xl mt-3 text-[#0A2A4A] leading-tight">
                        Get in Touch!
                        </h2>
                    </div>
                </div>
                <div className="px-10   grid gap-8 grid-cols-1 md:grid-cols-2 py-2   md:py-16 mx-auto bg-white ">
                    <div className="flex flex-col justify-between">
                        <img src="/assets/img/map-img.png" class="w-auto h-full" />
                    </div>

                    <div className="bg-white text-gray-900 rounded-lg shadow-lg  px-8 py-5" >
                        <div className='grid gap-4 grid-cols-1   md:grid-cols-2  ' >
                            <div className='flex flex-col justify-between' >
                                <div>
                                    <span className="uppercase text-sm text-[#3491FF] font-bold">
                                    Full Name
                                    </span>
                                    <input
                                    className="w-full bg-[#F4FAFF] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    placeholder=""
                                    onChange={(e)=>{onChange(e)}}
                                    />
                                {eroor.name&&<div className="text-red-500 mx-2">Please Enter Your Name...</div>}
                                </div>
                                <div className="mt-8">
                                    <span className="uppercase text-sm text-[#3491FF] font-bold">Email</span>
                                    <input
                                    value={data.email}
                                    name='email'
                                    className="w-full bg-[#F4FAFF] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    onChange={(e)=>{onChange(e)}}
                                    />
                                    {eroor.email&&<div className="text-red-500 mx-2">Please Enter Your Email...</div>}
                                </div>
                                <div className="mt-8">
                                    <span className="uppercase text-sm text-[#3491FF] font-bold">Phone</span>
                                    <input
                                    value={data.phone}
                                    name='phone'
                                    className="w-full bg-[#F4FAFF] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    onChange={(e)=>{onChange(e)}}
                                    />
                                    {eroor.phone&&<div className="text-red-500 mx-2">Please Enter Your phone...</div>}
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                    <span className="uppercase text-sm text-[#3491FF] font-bold">
                                    Message
                                    </span>
                                    <textarea
                                    className="w-full h-full bg-[#F4FAFF] text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    defaultValue={""}
                                    />
                                </div>
                                
                        </div>

                    

                    <div className="mt-8 flex justify-center">
                        <button className="uppercase text-sm font-bold tracking-wide bg-[#3491FF] text-white p-3 rounded-lg w-86 focus:outline-none focus:shadow-outline "
                        onClick={()=>{check()}}
                        >
                        Send Message
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Contact;