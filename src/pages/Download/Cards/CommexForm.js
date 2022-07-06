import React, { useState } from 'react'

const CommexForm = (props) => {

  const [Id, setId] = useState({
    MCX:"",
    NCDEX:""
    
  })
  console.log("🚀 ~ file: CommexForm.js ~ line 10 ~ CommexForm ~ Id.MCX", Id.MCX)

  const storedata = (e) =>{
    let Obj = {...Id}
    Obj[e.target.name] = e.target.value
    setId({...Obj})
    props.setid(Obj)
  }


  return (
    <div>
        <form>
        <div class="mb-1">
            <label class="block text-gray-700  font-bold mb-2 text-xl" for="username">
            Clearing ID for MCX:
            </label>
        <input name="MCX" class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Clearing ID for BSE"  onChange={storedata} />
    </div>
    {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
    <div class="mb-1">
            <label class="block text-gray-700  font-bold mb-2 text-xl" for="username">
            Clearing ID for NCDEX:
            </label>
            <input name="NCDEX" class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Clearing ID for BSE"  onChange={storedata} />
        </div>
        {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
        </form>
    </div>
  )
}

export default CommexForm