import React from 'react'

const EstroTable = () => {
    function createData(Estro) {
        return { Estro };
      }

    const rows = [
        createData("EstroNet"),
        createData("Website"),
        createData("eSign"),
        

    ];  
  return (
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mb-10	">
        <div class="text-xs text-white uppercase bg-[#3491FF] w-100">
                                <div class='flex items-center justify-center py-3'>
                                   
                                    <div className='text-lg font-medium'>Estro</div>
                                </div>
                </div>
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead class="text-xs  text-gray-700 uppercase  ">
        </thead>
                <tbody>
                    {rows.map((row,i)=>(
                        <tr class={`${i%2==0&&'bg-[#F3F7FC]'}`}>
                            <th class='w-1/5'>
                                <div class='flex items-center justify-left px-6 py-3'>
                                <div className='flex mx-2'>
                                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300  dark:bg-[#3491FF] dark:border-gray-600" />
                                </div>
                                <div className='text-[#3491FF] text-md font-medium'>
                                    {row.Estro}
                                </div>
                                </div>
                                
                            </th>
                        </tr>
                    ))}
                </tbody>
                <div class='flex items-center justify-end py-3'>
                    <div className='text-sm font-medium'>Participant ID</div>
                    <div className='flex mx-2'>
                        <input type="" id="visitors" class=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  " placeholder="" required/>
                    </div>
                </div>
            </table>
        </div>
    </div>
  )
}

export default EstroTable