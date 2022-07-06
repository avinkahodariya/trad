import React,{useState} from 'react'

const TradePlusForm = (props) => {

  const [Id, setId] = useState({
    BSE:"",
    NSE: "",
  })
  console.log("🚀 ~ file: TradePlusForm.js ~ line 9 ~ TradePlusForm ~ Id", Id)

  const storedata = (e) => {
    let Obj = {...Id}
        Obj[e.target.name]=e.target.value
        setId({...Obj})
        props.setid(Obj )
  }

  return (
    <div>
       <div>
        <div class="mb-1">
            <label class="block text-[#0A2A4A] text-sm font-medium mb-2 " for="username">
            Clearing ID for BSE:
            </label>
            <input name="BSE" class="shadow appearance-none border rounded w-96 py-2 px-3 text-[#808D9A] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Clearing ID for BSE" 
            onChange={storedata}/>
        </div>
        {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
        <div class="mb-4">
            <label class="block text-[#0A2A4A] text-sm font-medium mb-2 " for="username">
            Clearing ID for NSE:
            </label>
            <input  name="NSE" class="shadow appearance-none border rounded w-96  py-2 px-3 text-[#808D9A] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Clearing ID for NSE" 
            onChange={storedata}/>
        </div>
        {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
        </div>
    </div>
  )
}

export default TradePlusForm

// onChange={(e)=>{props.setData(e)}}