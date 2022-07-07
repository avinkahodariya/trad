import React from "react";

const ProductTable = () => {
  function createData(Branch, Commex, ClearingID) {
    return { Branch, Commex, ClearingID };
  }

  const rows = [
    createData("TradeNet", "NSE"),
    createData("Website", "BSE"),
    createData("eSign", "MCX"),
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mb-10	">
        <div className="text-xs text-white uppercase bg-[#3491FF] w-100">
          <div className="flex items-center justify-center py-3">
            
            <div className="text-lg font-medium">Trade Plus</div>
          </div>
        </div>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase  ">
            <tr className="bg-[#F3F7FC]">
              <th scope="col" classNameN="px-6 py-3 text-center border-r"></th>
              <th scope="col" classNameN="px-6 py-3 text-center border-l"></th>
              <th scope="col" className="px-6 py-3 text-center border-l">
                Cash
              </th>
              <th scope="col" className="px-6 py-3 text-center border-l">
                F&O
              </th>
              <th scope="col" className="px-6 py-3 text-center border-l">
                FX
              </th>
              <th scope="col" className="px-6 py-3 text-center border-l">
                Clearing ID
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr className={`${i % 2 !== 0 && "bg-[#F3F7FC]"}`}>
                <th className="">
                  <div className="flex items-center justify-left pl-6">
                    <div className="flex px-2">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF]"
                      />
                    </div>
                    <div className="px-3 text-[#3491FF] text-sm font-medium">
                      {row.Branch}
                    </div>
                  </div>
                </th>
                <th className="px-3 border-l text-[#3D3D3D]">{row.Commex}</th>
                <th className="p-2 border-l">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                    />
                  </div>
                </th>
                <th className="p-2 border-l">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                    />
                  </div>
                </th>
                <th className="p-2 border-l">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                    />
                  </div>
                </th>
                <th className="p-2 border-l w-1/5">
                  <div className="flex justify-center ">
                    <input
                      type=""
                      id="visitors"
                      className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer  "
                      placeholder=""
                      required
                    />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
