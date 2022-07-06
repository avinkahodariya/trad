import React from "react";


function Card({ prop }) {


  return (
    <>
    
    <div
      className="
        flex
        justify-center
        p-10 w-60 h-60 bg-slate-300 md:p-10  md:bg-[#FFFFFF]
        items-center
        drop-shadow-md	
        rounded-xl"
    >
      <div className="items-center justify-self-center">
        <img alt="No Image" src={prop.image} className=" mb-3 place-content-between absolute top-10 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"/>
        <h2 className="text-center text-md mb-2 mt-5 font-medium text-[#3491FF]">{prop.title}</h2>
        <p className=" text-center text-xs mb-2 font-medium text-[#0A2A4A]">{prop.use}</p>
        <p className=" text-center text-xs mt-4 font-small text-[#808D9A]">{prop.description}</p>
      </div>
    </div>
    </>
  );
}

export default Card;