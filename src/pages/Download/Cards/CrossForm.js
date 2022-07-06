import React from 'react'

const CrossForm = (props) => {
  return (
        <div>
            <form>
            <div class="mb-1">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="username">
                Participant ID for CDSL: 
                </label>
                <input name="Cross CDSL" class="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your Participant ID for CDSL" onChange={(e)=>{props.setData(e)}} />
            </div>
            {props.check&&<div className="text-red-500 mx-2">Please Enter Details...</div>}
            </form>
        </div>  )
}

export default CrossForm