import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import TradePlus from '../../Product';
import CommexForm from './CommexForm';
import CrossForm from './CrossForm';
import DescriptionBox from './DescriptionBox';
import EsignExeForm from './EsignExeForm';
import EstroForm from './EstroForm';
import PmsForm from './PmsForm';
import TradePlusForm from './TradePlusForm';

const DownloadCard = () => {
  // const [nseid, setnseid]=useState("")
  // const [bseid, setbseid] = useState("")
  // var TestData = {
  //   NSEID : nseid,
  //   BSEID : bseid,
  // }
  const [temp, settemp] = useState({})
  console.log("🚀 ~ file: DownloadCard.js ~ line 22 ~ DownloadCard ~ temp", temp)
  const [id,setid]=useState({})
  console.log("🚀 ~ file: DownloadCard.js ~ line 23 ~ DownloadCard ~ id", id)
  const [check, setcheck] = useState(false)
  const navigate = useNavigate();
  const [selectedCompo,setSelectedCompo]=useState("")
  const params = useParams();

  const setData = (data)=>{
    let obj = {...id}
    obj[data.target.name]=data.target.value
    setid(obj)
   }

  const handleChange = () =>{
    console.log('idididid', id)
    if(Object.values(id).length==0 || Object.values(id).includes("")){
      setcheck(true)
    }
    else{
      localStorage.setItem('dataobj', JSON.stringify(id));
      navigate(`/downloads/${selectedCompo}/tabs`);
    }
  }

  const CardComponents = [
    {name:"TradePlus&TradeNet",components:<TradePlusForm setData={setData} check={check} setid={setid}/>},
    {name:"ESTRO&EstroNet",components:<EstroForm setData={setData} check={check}/>},
    {name:"CROSS&CrossNet",components:<CrossForm setData={setData} check={check}/>},
    {name:"CommEx&CommNet",components:<CommexForm setData={setData} check={check} setid={setid}/>},
    {name:"PMS",components:<PmsForm setData={setData} check={check}/>},
    {name:"eSign",components:<EsignExeForm setData={setData} check={check}/>},
  ]

  useEffect (() => {
    params.id && setSelectedCompo(params.id)
  },[params.id])

 

  return (
    <div className='flex  bg-[#F4FAFF] w-full'>
      <div className='w-1/2 my-28 px-28'>
        <DescriptionBox />
      </div>
      <div className='w-1/2 my-28  px-20'>
        <div className='text-[#3491FF] font-bold mb-7 text-2xl '>Enter Your Details</div>
        <div>
      {
      CardComponents.map((data)=>{
        if(data.name===selectedCompo){
          return <div>{data.components}</div>
        }
      })
      }
      </div>
      <div>
        <button
         className="uppercase text-sm font-bold tracking-wide bg-[#3491FF] text-white p-3 rounded-lg w-86 focus:outline-none focus:shadow-outline  w-24 mt-3	"
         onClick={()=>{ 
          handleChange()
          }}>
          Go
        </button>
      </div>
      </div>
     </div>
  )
}

export default DownloadCard