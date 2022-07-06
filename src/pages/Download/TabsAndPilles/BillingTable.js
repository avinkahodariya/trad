import React from 'react'

const BillingTable = () => {

    function createData(Description, Rupees, Tax) {
        return { Description, Rupees, Tax};
      }

    const rows = [
        createData("Annual Maintenance Charges [2022-23] MCX"," ", "15000"),
        createData("Your GST ID: 27AACCN0286A1ZV","CGST Collected @ 9%","1350"),
        createData("Rupees Seventeen Thousand Seven Hundred Only"," ","17700"),


    ];
  return (
    <div>
        <div className='flex justify-between ring-0	bg-[#3491FF] rounded-tl-2xl rounded-tr-2xl text-white'>
            <div class="px-6 py-3 text-lg font-medium text-left">Description</div>
            <div class="px-6 py-3  text-lg font-medium text-right">Rupees</div>
        </div>
        <div className='flex justify-between border	h-64'>
            <div className='w-3/5 text-left px-7 py-2 underline text-[#3D3D3D] text-bold text-base'>Annual Maintenance Charges [2022-23] MCX</div>
            <div className='border-l w-1/5 text-center py-2'></div>
            <div className='border-l w-1/5 text-center py-2 text-[#3D3D3D]'>15000</div>
        </div>

        <div className='flex justify-between border	h-20'>
            <div className='w-3/5 text-left px-7 py-10'>Your GST ID: <span className='font-bold'>27AACCN0286A1ZV</span></div>
            <div className='border-l w-1/5 text-center py-3.5'>
                <div>SGST Collected @ 9%</div>
                <div>CGST Collected @ 9%</div>
            </div>
            <div className='border-l w-1/5 text-center py-3.5'>
                <div>1350</div>
                <div>1350</div>
            </div>
        </div>
        <div className='flex justify-between border	h-12'>
            <div className='w-3/5 text-left py-4 pl-6'>Rupees Seventeen Thousand Seven Hundred Only</div>
            <div className='border-l w-1/5'></div>
            <div className='border-l w-1/5 p-2 font-bold text-center text-lg'>17700</div>
        </div>
    </div>
  )
}

export default BillingTable