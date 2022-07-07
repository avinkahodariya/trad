import React from 'react'

const MyAccountCard = () => {
  return (
    <div className='px-12 pt-2 pb-8'>
        <div className='flex'>
        <div className='w-2/5 px-12	back-forword-btn  mr-10 rounded-2xl	pt-8'>
            <div className='flex justify-between mb-2'>
                <div>
                    <a href='#' className='text-[#3491FF] text-lg underline underline-offset-1'>Our Bank Account Details</a>
                    <p className='mt-2 text-[#3D3D3D]'>(Should you prefer to deposit the cheque directly.)</p>
                </div>
               
            </div>           
            <div className='flex mb-2 mt-4'>
                <div className='text-[#3D3D3D]'>Account Name :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>SECMARK CONSULTANCY LTD.</div>
            </div>
            <div className='flex mb-2'>
                <div className='text-[#3D3D3D]'>Bank :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>Stat Bank of India</div>
            </div>
            <div className='flex mb-2'>
                <div className='text-[#3D3D3D]'>Branch :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>Borivali West</div>
            </div>
            <div className='flex mb-2'>
                <div className='text-[#3D3D3D]'>IFSC Code :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>SBIN0000551</div>
            </div>
            <div className='flex mb-8'>
                <div className='text-[#3D3D3D]'>A/C No :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>39744127423</div>
            </div>
        </div>
        <div className='w-1/5'></div>
        <div className='w-2/5 px-12	back-forword-btn ml-10  rounded-2xl	pt-8'>
            <div className='flex justify-between mb-2'>
                <div>
                    <a href='#' className='text-[#3491FF] text-lg  underline underline-offset-1'>Secmark Details</a>
                </div>           
            </div>           
            <div className='flex mb-2'>
                <div className='text-[#3D3D3D]'>GST ID :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>27AACCN0286A1ZV</div>
            </div>
            <div className='flex mb-2'>
                <div className='text-[#3D3D3D]'>PAN No :</div>
                <div className='font-bold ml-3 text-[#3D3D3D]'>AAAAA1234A</div>
            </div>
        </div>
        </div>
        <div className=' py-10'>
            <div className='mb-2 text-[#3D3D3D]'>Please email the deposit details to us along with :</div>
            <div className='mb-2 text-[#3D3D3D]'>Deposit Amount</div>
            <div className='mb-2 text-[#3D3D3D]'>Amount of TDS Deducted, if any</div>
            <div className='mb-2 text-[#3D3D3D]'>Cheque No</div>
            <div className='mb-2 text-[#3D3D3D]'>Cheque No</div>
            <div className='mb-2 text-[#3D3D3D]'>Date of Deposit</div>
            <div className='mb-2 text-[#3D3D3D]'>If possible, forward a scanned copy of pay-in slip</div>
        </div>
        {/* <div className='flex justify-end '>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="8" fill="#3491FF"/>
            <path d="M22.57 18.9297L16.5 24.9997L22.57 31.0697" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M33.4999 25H16.6699" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> */}
    </div>
  )
}

export default MyAccountCard