import React, { useState } from "react";

const CommexTable = () => {
  const [SelectAll, setSelectAll] = useState({
    first: false,
    second: false,
    frsAry: [],
    secAry: [],
  });

  const handleChange1 = (e) => {
    let ary = [...SelectAll.frsAry];
    if (!ary.includes(e.target.name)) {
      ary.push(e.target.name);
    } else {
      ary = ary.filter((d) => d !== e.target.name);
    }

    // let list = {...SelectAll}
    // list[e.target.name]=e.target.checked
    // list.second=false
    setSelectAll({ ...SelectAll, frsAry: ary });
  };

  const handleChange2 = (e) => {
    let ary = [...SelectAll.secAry];
    if (!ary.includes(e.target.name)) {
      ary.push(e.target.name);
    } else {
      ary = ary.filter((d) => d !== e.target.name);
    }
    // let list = {...SelectAll}
    // list[e.target.name]=e.target.checked
    // list.second=false
    setSelectAll({ ...SelectAll, secAry: ary });
  };

  function createData(Branch, Commex, ClearingID) {
    return { Branch, Commex, ClearingID };
  }

  const rows = [
    createData("Off line Branches", "NCDEX"),
    createData("CommNet", "MCX"),
    createData("Website", "NSEL"),
    createData("eSign", "AHM-NMCE"),
    createData("", "ICEX"),
    createData("", "NSX"),
    createData("", "ACE"),
  ];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mb-10	">
        <div className="text-xs text-white uppercase bg-[#3491FF]">
          <div className="flex items-center justify-center py-3">
            <div className="text-lg font-medium">Commex</div>
          </div>
        </div>
        <table className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
          <thead className="text-xs  text-gray-700 uppercase  ">
            <tr className="bg-[#F3F7FC]">
              <th>
                <div className="flex items-center justify-left pl-6">
                  <div className="px-4">
                    <input
                      id="first"
                      type="checkbox"
                      value=""
                      name="first"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded dark:bg-[#3491FF] "
                      onClick={() => {
                        if (SelectAll.first) {
                          setSelectAll({
                            ...SelectAll,
                            first: !SelectAll.first,
                            frsAry: [],
                          });
                        }else{
                            setSelectAll({
                                ...SelectAll,
                                first: !SelectAll.first,
                               
                              });
                        }
                      }}
                    />
                  </div>
                  <div className="p-2  text-start text-[#3D3D3D]">
                    Select All
                  </div>
                </div>
              </th>
              <th classNameName="border-l">
                <div className="flex items-center justify-left pl-6">
                  <div className="px-4">
                    <input
                      id="first"
                      type="checkbox"
                      value=""
                      name="second"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded dark:bg-[#3491FF] "
                      onClick={() => {
                        if(SelectAll.second){
                            setSelectAll({
                                ...SelectAll,
                                second: !SelectAll.second,secAry:[]
                              });
                        }else{
                            setSelectAll({
                                ...SelectAll,
                                second: !SelectAll.second,
                              });
                        }
                        
                      }}
                    />
                  </div>
                  <div className="p-2  text-start text-[#3D3D3D]">
                    Select All
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-center border-l">
                Clearing ID
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr className={`${i % 2 !== 0 && "bg-[#F3F7FC]"}`}>
                <th className="w-1/5">
                  <div className="flex items-center justify-left pl-6">
                    <div className="px-4">
                      {row.Branch && (
                        <input
                          id="default-checkbox"
                          name={row.Branch}
                          checked={
                            SelectAll.first ||
                            SelectAll.frsAry.includes(row.Branch)
                          }
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                          onChange={handleChange1}
                        />
                      )}{" "}
                    </div>
                    <div className="p-2 border-l text-start text-[#3D3D3D]">
                      {row.Branch}
                    </div>
                  </div>
                </th>
                <th className=" border-l">
                  <div className="flex items-center justify-left pl-6">
                    <div className="px-4">
                      <input
                        id="default-checkbox"
                        name={row.Commex}
                        type="checkbox"
                        checked={
                          SelectAll.second ||
                          SelectAll.secAry.includes(row.Commex)
                        }
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded   dark:bg-[#3491FF] "
                        onChange={handleChange2}
                      />
                    </div>
                    <div className="p-2 text-start text-[#3D3D3D]">
                      {row.Commex}
                    </div>
                  </div>
                </th>
                <th className="p-2 border-l w-1/5">
                  <div className="flex justify-start ">
                    <input
                      type=""
                      id="visitors"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer      "
                      placeholder=""
                      required
                    />
                  </div>
                </th>
              </tr>
            ))}
            <tr className="">
              <th></th>{" "}
              <th>
                <div className="text-sm font-medium text-right">
                  Participant ID
                </div>
              </th>
              <th>
                <div className="flex px-2 justify-center mb-4">
                  <input
                    type="number"
                    id="visitors"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2  "
                    placeholder=""
                    required
                  />
                </div>
              </th>
            </tr>
            <hr></hr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommexTable;
