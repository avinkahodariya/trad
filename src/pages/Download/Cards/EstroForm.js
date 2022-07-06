import React from 'react'

const EstroForm = (props) => {
  return (
    <div>
        <form>
        <div class="mb-1">
            <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="username">
            Participant ID for NSDL:
            </label>
        <input name="Estro NSDL" class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Participant ID for NSDL" onChange={(e)=>{props.setData(e)}} />
    </div>
    {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
        </form>
    </div>
  )
}

export default EstroForm