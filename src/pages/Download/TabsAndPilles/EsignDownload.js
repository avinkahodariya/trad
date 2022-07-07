import React from "react";
import SliderCard from "./SliderCard";

const EsignDownload = (props) => {
  return (
    <div className="bg-[#F4FAFF]">
      <div>
        <div className="font-medium text-3xl mb-4	text-center pt-12 text-[#0A2A4A]">
          E-sign
        </div>
        <div className="mb-6 text-md text-center text-[#808D9A] font-normal">
          {" "}
          CDSL Record Organiser & Support System software for managing all
          activities in DP’s office. It offers a lot more facilities and
          security than CDAS system like stationery management, signature
          verification, current holding, dues etc.{" "}
        </div>
      </div>
      <div className="flex justify-between px-12 py-6">
        <SliderCard
          title="Head office"
          subTitle="E-sign"
          img={"/assets/img/svg-1.png"}
          arrow={false}
          index={props.index}
        />
        <SliderCard
          title="Knowledge Base"
          subTitle="Circular"
          img={"/assets/img/svg-7.svg"}
          arrow={false}
          index={props.index}
        />
        <div class="text-gray-600 body-font">
          <div className="single-slider px-5 py-0">
            <div>
              <div className="flex justify-center p-2  bg-slate-300 md:p-5 md:bg-[#f4faff] items-center w-80  rounded-xl">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsignDownload;
