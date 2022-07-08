import React from "react";
import "./scss/othersection.scss";
const listData = [
  {
    count: "",
    content:
      "Web site for Cash & Derivatives segment clubbed with DP related information through single login.",
  },
  {
    count: "",
    content: "Offline branches with database and data transfer concept.",
  },
  {
    count: "",
    content: "Digitally signed documents (contracts, bills, ledgers etc.)",
  },
  { count: "", content: "Arbitrage related reports." },
  {
    count: "",
    content:
      "MPrinting of Combined quarterly reports of TradePlus and Depository services. Includes TradePlus reports like ledger, delivery statements and Depository reports like transaction cum holding statement. Printing is done using laser printer with facility to print on both side of paper (duplex printing), if supported by printer. The facility results in huge cost saving as all statutory reports are sent by a single courier and creates better impression with customers who do not receive multiple couriers for same account.",
  },
  
];

const OtherSection = () => {
  return (
    <>
      <section
        id="other-section"
        className="bg-[#F4FAFF] px-20 py-20 time-2202-line"
      >
        <div className="title-box text-center px-5 ">
          <h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-0 text-[#0A2A4A]">
            Other associated Modules (Optional, Always quoted separately){" "}
          </h2>
        </div>

        <div className="wrapper container mx-auto">
          <ul className="sessions">
            {listData.map((item) => (
              <li>
                <p className="text-[#808D9A] pl-2">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OtherSection;
