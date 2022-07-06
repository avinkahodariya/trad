import React from 'react'
import BillingTable from './BillingTable'
import Table from './Table'

const AccountDescription = (props) => {
  return (
    <div className='back-forword-btn p-8 mt-4 rounded-2xl	m-10'>
        <div>
            <img src='/assets/img/svg-8.svg' className='m-auto'/>
        </div>
      <div className='flex justify-between mt-6'>
        <div>
            <div className='font-bold text-lg text-[#3D3D3D]'>Nariman Commodity Services Pvt.Ltd.</div>
            <div className='text-[#3D3D3D] text-md'>4 Phoenix, 457 S.V.P. Road,</div>
              <div className='text-[#3D3D3D] text-md'>Prarthana Samaj,</div>
              <div className='text-[#3D3D3D] text-md'> MUMBAI - 400004</div>
        </div>

        <div>
            <div className='text-[#3D3D3D] text-md'>Bill No: INV-22230060</div>
            <div className='text-[#3D3D3D] text-md'>Date : 11/04/2022</div>
            <div className='text-[#3D3D3D] text-md'>From : 11/04/2022</div>
            <div className='text-[#3D3D3D] text-md'>To : 31/03/2023</div>
        </div>

        <div>
            <div className='text-[#3D3D3D] text-md'>CIN No : L67190MH2011PLC220404</div>
            <div className='text-[#3D3D3D] text-md'>36/227, RDP 10, Sector 6, Charkop, Kandivali (West), Mumbai - 400 067</div>
            <div className='text-[#3D3D3D] text-md'>From : 11/04/2022</div>
            <div className='text-[#3D3D3D] text-md'>E-mail: info@Tplus.in URL: www.Tplus.in</div>
        </div>
      </div>

      <div className='my-10'>
        <BillingTable />
      </div>
        
      <div>
        <div className='text-[#3D3D3D] text-md'>E&OE</div>
        <div className='py-4 text-[#3D3D3D]'>GST ID: 27AAQCS1732G1Z7</div>
        <div className='font-bold text-md	text-[#3D3D3D]'>998313 Information technology (IT) consulting and support services</div>
        <div className='flex justify-between mb-10 '>
            <div>
                <div className='py-4 text-[#3D3D3D]'>Subject to Mumbai Jurisdiction only.</div>
                <div className=' text-[#3D3D3D]'>This being computer generated statement, not signed.</div>
            </div>
            <div>
                <div className='font-bold py-4 text-[#3d3d3d] text-lg'>SECMARK CONSULTANCY LTD.</div>
                <div className='text-[#3D3D3D] text-end'>(PAN: AAULDI/ZG)</div>
            </div>
        </div>

        <div className='flex justify-end ' onClick={()=>{props.setinvoice(false)}}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="8" fill="#3491FF"/>
            <path d="M22.57 18.9297L16.5 24.9997L22.57 31.0697" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M33.4999 25H16.6699" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

      </div>
    </div>
  )
}

export default AccountDescription