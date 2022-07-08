import React from 'react'

function Table() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-0">
      {/* <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1> */}
    <p className=" leading-relaxed text-[1rem] text-[#808d9a]  px-[20rem]">Sec-Mark eSolutions Pvt. Ltd. has now incorporated capability to digitally sign documents in it’s back office software as:</p>
    </div>
    <div className=" w-full mx-auto overflow-auto">
      <table className="table-auto w-full h-20 whitespace-no-wrap">
        <thead>
          <tr className='h-20 rounded-md'>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-[#ffffff] text-2xl bg-[#3491FF] rounded-tl rounded-bl text-left border-r-[0.1rem] border-[#ccc]">Product</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-[#ffffff] text-2xl bg-[#3491FF] rounded-tr rounded-br">Digitally signed Documents</th>
           
          </tr>
        </thead>
        <tbody>
          <tr className='mt-2'>
            <td className="px-4 py-3 title-font tracking-wider font-medium text-[#ccc] text-2xl bg-[#ffffff] border-r-[0.1rem] border-[#cccc]">
            <h1 className="sm:text-xl text-xl font-bold title-font mb-2 text-[#0A2A4A]">TRADEPLUS (Windows Version)</h1>
      <p className=" leading-relaxed  text-[1rem] text-left text-[#808D9A] font-normal">Back office software for Equity and dervatives segments for brokers on various exchanges.</p>
            </td>
            <td className="px-4 py-3 title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center">Daily contracts, bills, Ledger, Account Confirmations</td>
           
          </tr>
          <tr className='mt-2'>
            <td className="px-4 py-3 title-font tracking-wider font-medium text-[#ccc] text-2xl bg-[#ffffff] border-r-[0.1rem] border-[#cccc]">           
            <h1 className="sm:text-xl text-xl font-bold title-font mb-2 text-[#0A2A4A]">TRADEPLUS (DOS Version)</h1></td>
            <td className="px-4 py-3 title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center">Daily contracts</td>            
          </tr>
          <tr className='mt-2'>
          <td className="px-4 py-3 title-font tracking-wider font-medium text-[#ccc] text-2xl bg-[#ffffff] border-r-[0.1rem] border-[#cccc]">
            <h1 className="sm:text-xl text-xl font-bold title-font mb-2 text-[#0A2A4A]">CROSS</h1>
      <p className=" leading-relaxed  text-[1rem] text-left text-[#808D9A] font-normal">Back office software for DP on CDSL</p>
            </td>
            <td className="px-4 py-3 title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center">Holding  & Transaction Statements, Bills, Ledgers</td>
            
          </tr>
          <tr className='mt-2'>
          <td className="px-4 py-3 title-font tracking-wider font-medium text-[#ccc] text-2xl bg-[#ffffff] border-r-[0.1rem] border-[#cccc]">
            <h1 className="sm:text-xl text-xl font-bold title-font mb-2 text-[#0A2A4A]">ESTRO</h1>
             <p className=" leading-relaxed  text-[1rem] text-left text-[#808D9A] font-normal">Back office software for DP on NSDL</p>
            </td>
            <td className="px-4 py-3 title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center">Holding  & Transaction Statements, Bills, Ledgers</td>
           
          </tr>
          <tr className='mt-2'>
          <td className="px-4 py-3 title-font tracking-wider font-medium text-[#ccc] text-2xl bg-[#ffffff] border-r-[0.1rem] border-[#cccc]">
            <h1 className="sm:text-xl text-xl font-bold title-font mb-2 text-[#0A2A4A]">COMMEX</h1>
             <p className=" leading-relaxed  text-[1rem] text-left text-[#808D9A] font-normal">Back office software for  DP on Commodities</p>
            </td>
            <td className="px-4 py-3 title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center">Holding  & Transaction Statements, Bills, Ledgers</td>
           
          </tr>
          
        </tbody>
      </table>
     
    </div>
    
  </div>
  <div className="flex flex-col text-center w-full mb-10 px-5 ">
      <p className=" title-font font-normal text-[#808d9a] text-[1rem] bg-[#ffffff] text-center pl-[10rem] pr-[10rem]">The above back-office packages will have option to digitally sign the documents before they are e-mailed. Client can have various persons signing the document and when there are multiple IDs installed on same machine, it shall ask for the person who is to sign the document and his associated password.</p>
    </div>
</section>
    </>
  )
}

export default Table