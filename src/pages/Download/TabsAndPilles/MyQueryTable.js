import React from 'react'

const MyQueryTable = () => {
    function createData(QuerieID, Department, Subject, Status, Date, Time, Type, RaisedBy) {
        return { QuerieID, Department, Subject, Status, Date, Time, Type, RaisedBy};
      }

    const rows = [
        createData("57118","TradePlusX","BSE : API for Weeklv submission","Replied","31/05/2022","13:15","(H) Request", "Nariman Finvest (Info)"),
        createData("57072","TradePlusX","Ledger and Contract Amount Difference","Replied","31/05/2022","14:17","Error", "Nariman Finvest (Info)"),
        createData("56940","TradePlusX","HS Ouerry","Replied","24/05/2022","17:21","Error", "Nariman Finvest (Info)"),
        createData("56869","Commex","Commex Allocation error","Replied","20/05/2022","17:57","Error", "Seema Shah"),
        createData("56851","TradePlusX","30days not traded report issue","Pending","19/05/2022","18:50","Error", "Nariman Finvest (Info)"), 
        createData("56239","TradePlusX","Collateral at Client Level - Segregation Data","Pending","22/04/2022","14:52","(L) Request", "Nariman Finvest (Info)"),
        createData("55871","TradePlusX","BSE : API for Weeklv submission","Replied","06/04/2022","15:52","Error", "Nariman Finvest (Info)"),
    ];
  return (
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-[#3491FF] ">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Querie ID</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Department</th>
                        <th scope="col" class="px-6 py-3 text-left	w-1/3 text-base font-bold">Subject</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Status</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Date</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Time</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Type</th>
                        <th scope="col" class="px-6 py-3 text-center text-base font-bold">Raised By</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,i)=>(
                        <tr class={`${i%2==0&&'bg-[#F3F7FC]'}`}>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.QuerieID}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.Department}</th>
                            <th class='py-4 border-l text-left w-1/4 text-[#3D3D3D] text-lg font-medium pl-5'>{row.Subject}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.Status}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.Date}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.Time}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.Type}</th>
                            <th class='py-4 border-l text-[#3D3D3D] text-lg font-medium'>{row.RaisedBy}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyQueryTable