import React, { useState } from 'react'

const MyAccountTable = (props) => {

    const [selectbox, setselectbox] = useState([])

    const SelectCheckBox = (data) => {
        let dataArray = [...selectbox];
        if(dataArray.includes(data)){
            dataArray = dataArray.filter((d)=>d!==data)
        }else{
            dataArray.push(data);}  
            setselectbox(dataArray)
    }

    
    function createData(BillNo, Date, Amount, Received, TDS, Balance, Action) {
        return { BillNo, Date, Amount, Received, TDS, Balance, Action };
      }

    const rows = [
        createData("INV-22230060","11/04/2022","17700","17400","300","0"),
        createData("INV-22230058","11/04/2022","501500","493000","8500","0"),
        createData("2021-22/TT/42","15/04/2021","501500","493000","8500","0"),
        createData("2021-22/TT/43","15/04/2021","17700","17400","300","0"),
        createData("2020-21/TT/16","21/04/2020","35400","34800","600","0"),
        createData("2020-21/TT/4","08/04/2020","289100","284210","4890","0"),
        createData("2019-20/TT/125","01/06/2019","200600","197200","3400","0"),
        createData("2019-20/TT/126","01/06/2019","17700","17400","300","0"),
        createData("2018-19/TT/34","11/04/2018","164610","161820","2790","0"),
        createData("2018-19/TT/35","11/04/2022","14160","13920","300","0"),
    ];
    return (
    <div className='px-12 pt-2 pb-8'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-[#3491FF] ">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-center text-base font-bold"></th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Bill No</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Date</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Amount</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Received</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">TDS</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Balance</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,i)=>(
                        <tr class={`${i%2==0&&'bg-[#F3F7FC]'}`}>
                            <th className="p-2 border-l">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                      onClick={()=>{SelectCheckBox(row.BillNo)}}    
                    />
                  </div>
                </th>
                            <th class='py-4 text-[#3491FF] text-lg font-medium cursor-pointer'onClick={()=>{props.setinvoice(true)}}>{row.BillNo}</th>
                            <th class='py-4 text-[#3D3D3D] text-lg font-medium'>{row.Date}</th>
                            <th class='py-4 text-[#3D3D3D] text-lg font-medium'>{row.Amount}</th>
                            <th class='py-4 text-[#3D3D3D] text-lg font-medium'>{row.Received}</th>
                            <th class='py-4 text-[#3D3D3D] text-lg font-medium'>{row.TDS}</th>
                            <th class='py-4 text-[#3D3D3D] text-lg font-medium'>{row.Balance}</th>
                            <th className='flex justify-center h-12'><svg className='w-4 cursor-pointer	' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 120.89"><title>download-file</title><path d="M84.58,47a7.71,7.71,0,1,1,10.8,11L66.09,86.88a7.72,7.72,0,0,1-10.82,0L26.4,58.37a7.71,7.71,0,1,1,10.81-11L53.1,63.12l.16-55.47a7.72,7.72,0,0,1,15.43.13l-.15,55L84.58,47ZM0,113.48.1,83.3a7.72,7.72,0,1,1,15.43.14l-.07,22q46,.09,91.91,0l.07-22.12a7.72,7.72,0,1,1,15.44.14l-.1,30h-.09a7.71,7.71,0,0,1-7.64,7.36q-53.73.1-107.38,0A7.7,7.7,0,0,1,0,113.48Z"/></svg></th>
                        </tr>
                    ))}
                </tbody>
            </table> 
        </div>

        {selectbox.length >0 && 
            <div className="py-4">
                <div>
                    <button type="submit" className="text-white text-lg  bg-[#3491FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >{selectbox.length} Download</button>
                </div>
            </div>
            }
        <div className='flex justify-between my-8'>
                <a href='#' className='text-[#3491FF] underline text-lg underline-offset-1'>Last Updated On 03-06-2022 at 10:38</a>
                <a href='#' className='text-[#3491FF] underline text-lg underline-offset-1'>Complience Check for Section 206AB & 206CCA</a>
            </div>
    </div>
  )
}

export default MyAccountTable