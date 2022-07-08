import React from "react";
import "./Slider.scss";
const Slider = () => {
  return (
    <>
      <div className="flex mb-10 ">
        <div className="flex flex-col md:w-1/3  circleThing-right circle-effect-right  justify-between h-full bg-white text-white rounded-full p-4">
          <div className="bg-white p-10 custom-h-w  border-[2px] rounded-full"></div>
        </div>

        <div className="flex flex-col md:w-1/3  circleThing-center circle-effect-right  justify-between h-full bg-white text-white rounded-full p-4">
          <div className="bg-white p-10 custom-h-w  border-[2px] rounded-full "></div>
        </div>

        <div className="flex flex-col md:w-1/3  circleThing-left circle-effect-right  justify-between h-full bg-white text-white rounded-full p-4">
          <div className="bg-white p-10 custom-h-w  border-[2px] rounded-full"></div>
        </div>
      </div>
    </>
  );
};
export default Slider;
