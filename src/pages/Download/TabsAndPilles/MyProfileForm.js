import React, { useState } from 'react'
import BottomTabs from './BottomTabs'
import ProductTable from './ProductTable'
import ProductTabs from './ProductTabs'
import SliderCard from './SliderCard'
import Table from './Table'

const MyProfileForm = (props) => {

    const [profile, setprofile] = useState("True")
    const [Details, setDetails] = useState("True")
    const [check, setcheck] = useState()
    const [Detailcheck, setDetailcheck] = useState()
    const [data, setdata] = useState({
        accountcode:"",
        name:"",
        adderess:"",
        city:"",
        pincode:"",
        company:"",
        clientname:"",
        clientname2:"",
        panno:"",
        provisionalid:"",
        provisionalid2:"",
    })

    const storeData = (e) =>{
        let Obj = {...data}
        Obj[e.target.name]=e.target.value
        setdata({...Obj})
    }
    
    const handlechange = () =>{
        if(validate(data)){
            setcheck(validate(data));
           }else{
            setcheck('');
            setprofile ("True")
           }
    }

    const validate =(values)=>{
    console.log("🚀 ~ file: MyProfileForm.js ~ line 39 ~ validate ~ values", values)
        let errors 
        if(!values.accountcode || !values.name || !values.adderess || !values.city || !values.pincode || !values.company){
            console.log("🚀 ~ file: MyProfileForm.js ~ line 41 ~ validate ~ values.accountcode", values.accountcode)
            errors = "All Field Are Reqire...";
        }
        return errors;
    }

    const changehandle = () => {
        if(Detailvalidate(data)){
            setDetailcheck(Detailvalidate(data));
           }else{
            setDetailcheck('');
            setDetails("True")
           }
    }

    const Detailvalidate =(values)=>{
        console.log("🚀 ~ file: MyProfileForm.js ~ line 39 ~ validate ~ values", values)
            let errors 
            if(!values.clientname || !values.clientname2 || !values.panno || !values.provisionalid || !values.provisionalid2){
                errors = "All Field Are Reqire...";
                }
            return errors;
        }

    return (
        <div className='border back-forword-btn rounded-2xl mx-10 my-10'>
            <div className='flex justify-between px-12 py-4'>
                <div className='font-semibold text-xl text-left  text-[#3D3D3D]'>My Profile</div>
                <div className='font-medium text-xl text-end text-[#3D3D3D] cursor-pointer flex' >
                   
                   <div> {profile == "True"?<svg onClick={()=>{setprofile("false")}}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>:<svg className= ' p-2' onClick={handlechange} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                          </svg>
                    } 
                    </div>
                </div>
            </div>
            <hr className='pb-4 border-t-[#EBEBEB]'></hr>
            <div className={`flex justify-between pb-6 ${profile=="false"?' input-border-all':""}`}>
                <div className='w-1/2  px-12'>
                    <div className='flex items-center'>
                        <div className="uppercase  font-medium justify-start w-1/4 text-sm text-[#3D3D3D]">*Account Code</div>
                        <input disabled={profile=="True"?true:false} name="accountcode" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline justify-end text-sm" type="number" placeholder="N06" onChange={storeData}/>
                    </div>
                    <div className='flex items-center'>
                        <div className="uppercase  font-medium w-1/4 text-[#3D3D3D] text-sm">*Name</div>
                        <input disabled={profile=="True"?true:false} name="name" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="Nariman Finvest Pvt. Ltd."  onChange={storeData}/>
                    </div>
                    <div className='flex items-center'>
                        <div className="uppercase  font-medium w-1/4 text-[#3D3D3D] text-sm">*Address</div>
                        <input disabled={profile=="True"?true:false} name="adderess" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="4 Phoneix, 457 S.V.P Road , Perathana Samaj, Mumbai 400004"  onChange={storeData}/>
                    </div>
                    {check&&<div className='flex items-center mt-1'>
                        <p className='w-1/4'></p>
                        <p className="text-red-500 mx-2 w-3/4">{check}</p>
                    </div>}
                    
                    
                </div>
                <div className='w-1/2 px-12	'>
                    <div className='flex items-center	'>
                        <div className="uppercase  font-medium w-1/4 text-[#3D3D3D] text-sm">*City</div>
                        <input disabled={profile=="True"?true:false} name="city" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="Mumbai"  onChange={storeData}/>
                    </div>
                    <div className='flex items-center	'>
                        <div className="uppercase  font-medium w-1/4 text-[#3D3D3D] text-sm">*Pin Code</div>
                        <input disabled={profile=="True"?true:false} name="pincode" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="number" placeholder="40004"  onChange={storeData}/>
                    </div>
                    <div className='flex items-center	'>
                        <div className="uppercase  font-medium w-1/4 text-[#3D3D3D] text-sm">*Other Companies</div>
                        <input disabled={profile=="True"?true:false} name="company" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="Nariman Commodity Services Pvt. Ltd."  onChange={storeData}/>
                    </div>
                    <div className='flex items-right justify-right' >
                        <p className='underline underline-offset-1 text-[#3491FF] text-base mx-3 ml-auto'  
                        onClick={()=>{props.setcurrentTab("changepasswordprofile");}}> change password ?</p>
                   
                    </div>
                </div>
            </div>



            <hr className=' border-t-[#EBEBEB] '></hr>
            <div className='flex justify-between px-12 py-6'>
                <div className='font-semibold text-xl text-left  text-[#3D3D3D]'>Provide your GST details</div>
                <div className='font-medium text-xl text-end text-[#3D3D3D] cursor-pointer'>
                {Details == "True"?<svg onClick={()=>{setDetails("false")}}  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>:<svg className= ' p-2' onClick={changehandle} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                          </svg>
                    }    
                </div>
            </div>
            <hr className='pb-4 border-t-[#EBEBEB]'></hr>
            <div className={`flex justify-between ${Details=="false"?' input-border-all':""}`}>
                <div className='w-1/2  px-12'>
                    <div className='flex items-center'>
                        <div className="uppercase text-sm  font-medium justify-start w-1/4  text-[#3D3D3D]">*Client name</div>
                        <input disabled={Details=="True"?true:false} name="clientname" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline justify-end text-sm" type="text" placeholder="Nariman Commodity Services Pvt. Ltd."  onChange={storeData}/>
                    </div>
                    <div className='flex items-center	'>
                        <div className="uppercase text-sm  font-medium w-1/4 text-[#3D3D3D]	"></div>
                        <input disabled={Details=="True"?true:false} name="clientname2" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="Nariman Finvest Pvt. Ltd."  onChange={storeData}/>
                    </div>
                    <div className='flex items-center	'>
                        <div className="uppercase text-sm  font-medium w-1/4 text-[#3D3D3D]	">*PAN No</div>
                        <input disabled={Details=="True"?true:false} name="panno" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="Nariman Commodity Services Pvt. Ltd."  onChange={storeData}/>
                    </div>
                    {Detailcheck&&<div className='flex items-center mt-1'>
                        <p className='w-1/4'></p>
                        <p className="text-red-500 mx-2 w-3/4">{Detailcheck}</p>
                    </div>}
                </div>
                <div className='w-1/2 px-12	'>
                    <div className='flex items-center	'>
                        <div className="uppercase text-sm  font-medium w-1/4 text-[#3D3D3D]	">	*Provisional ID</div>
                        <input disabled={Details=="True"?true:false} name="provisionalid" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="27AACCN0286A1ZV"  onChange={storeData}/>
                    </div>
                    <div className='flex items-center	'>
                        <div className="uppercase text-sm  font-medium w-1/4 text-[#3D3D3D]	"></div>
                        <input disabled={Details=="True"?true:false} name="provisionalid2" className="input-border w-3/4 bg-[#F4FAFF] text-[#9E9E9E] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="text" placeholder="27AABCN2859C1ZL"  onChange={storeData}/>
                    </div>
                </div>
            </div>

            <div>
                <div className='font-semibold text-xl text-left text-[#3D3D3D] ml-12 mt-8'>GST Release Document</div>
                <div className='grid grid-cols-5 justify-between mx-10'>
                    <SliderCard subTitle='Trade Plus' img={'/assets/img/svg-5.png'} />
                    <SliderCard subTitle='ESTRO' img={'/assets/img/svg-1.png'} />
                    <SliderCard subTitle='CROSS' img={'/assets/img/svg-2.png'} />
                    <SliderCard subTitle='Commex' img={'/assets/img/svg-6.png'} />
                    <SliderCard subTitle='Pms' img={'/assets/img/svg-6.png'} />
                </div>
                <div className='mx-10'>
                    <Table />
                </div>
            </div>

            <div>
                <div className='font-semibold text-xl text-left ml-12 my-8 text-[#3D3D3D]'>Products</div>
                <div className='mx-10'>
                    <ProductTabs />
                </div>
            </div>
        </div>
    )
}

export default MyProfileForm

// const storeData = (e) =>{
//     let Obj = {...data}
//     Obj[e.target.name]=e.target.value
//     setdata(Obj)
// }

// const handlechange = () =>{
//     if(Object.values(data).length==0 || Object.values(data).includes("")){
//         setcheck(true)
//       }else{
//       setprofile ("True")
//       setcheck(false)
//     }
// }