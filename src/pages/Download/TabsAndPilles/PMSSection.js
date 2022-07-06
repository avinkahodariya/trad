import React from 'react';


export default function PMSSection() {
    function createData(Branch, Commex, ClearingID) {
        return { Branch, Commex, ClearingID};
      }

    const rows = [
     
        createData("Latest exe","MCX"),
    ];
  return (
    <>
    
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mb-10	">
        <div className="text-xs text-white uppercase bg-[#3491FF] w-100">
            <div className='flex items-center justify-center py-3'>
                <div className='flex px-2'>
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] " />
                </div>
                <div className='text-lg font-medium'>PMS</div>
            </div>
        </div>
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs  text-gray-700 uppercase  ">
            <tr className='bg-[#F3F7FC]'>
                <th scope="col" classNameN="px-6 py-3 text-center border-r"></th>
                <th scope="col" classNameN="px-6 py-3 text-center border-l"></th>
            </tr>
        </thead>
                <tbody>
                    {rows.map((row,i)=>(
                        <tr className={`${i%2!==0&&'bg-[#F3F7FC]'}`}>
                            <th className=''>
                                <div className='flex items-center justify-left pl-6 py-5'>
                                    <div className='flex px-2'>
                                        <input id={"default-checkbox-"+i} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF]" />
                                    </div>
                                    <div className='px-3 text-[#3491FF] text-sm font-medium'>  
                                    <label for={"default-checkbox-"+i}>
                                        {row.Branch}
                                    </label>
                                    </div>
                                </div>
                            </th>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div></>


  )
}
