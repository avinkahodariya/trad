import React, { useState } from "react";
// import Card from "./Card";
import { initalState } from "./SliderData";
import Slider from "react-slick";

function Carousel() {

  const [cards, setCards] = useState(initalState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))[0].id;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.id === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.id === nextCardIdx).id =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.id;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
      .pop(1).id;
    // minimize pos
    prevState.find((f) => f.active === false).id =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.id;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.id === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    
    <>
      <div className="justify-self-center items-center text-sm md:text-3xl cursor-pointer rounded-full px-2">
        {<button type="button" onClick={() => handleLeftClick()} className="text-blue-700 bg-[#ffffff] h-10 w-10 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3379 7.14011L14.9279 18.5501C13.5804 19.8976 13.5804 22.1026 14.9279 23.4501L26.3379 34.8601" stroke="#3491FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>}
      </div>
      {cards.filter((f) => f.active === true)
        .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0))
        .map((value, index) => (
          <div
            key={index + '_value'}
            className="
            flex
            justify-center
            p-10 w-60 h-60 bg-slate-300 md:p-10  md:bg-[#FFFFFF]
            items-center
            drop-shadow-md	
            rounded-xl"
          >
            <div className="items-center justify-self-center">
              <img alt="No Image" src={value.image} className="h-10 w-10 mb-3 place-content-between block absolute top-10 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" />
              <h2 className="text-center text-md mb-2 mt-5 font-medium text-[#3491FF]">{value.title}</h2>
              <p className=" text-center text-xs mb-2 font-medium text-[#0A2A4A]">{value.use}</p>
              <p className=" text-center text-xs mt-4 font-small text-[#808D9A]">{value.description}</p>
            </div>
          </div>
          // <Card key={index} prop={value} />
        ))}
      <div
        className="text-sm md:text-3xl cursor-pointer rounded-full px-2 "
      >
        {<button type="button" onClick={() => handleRightClick()} className="text-blue-700 bg-[#ffffff] h-10 w-10 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6621 7.14011L27.0721 18.5501C28.4196 19.8976 28.4196 22.1026 27.0721 23.4501L15.6621 34.8601" stroke="#3491FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>}
      </div>
    </>
  );
}

export default Carousel;