import React from "react";
const Banner = () => {
  return (
    <div className="hero-banner  bg-[#F5FAFE] px-10">
      <div className="container flex flex-wrap justify-between items-center    mx-auto">
        <main className="py-2 md:py-10  ">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-10">
            <div className="sm:text-center lg:text-left">
              <h1
                className="text-4xl leading-8 tracking-tight text-[#3491FF] sm:text-5xl md:text-5xl font-medium md:leading-12 sm:mt-5  sm:max-w-xl sm:mx-auto md:mt-5  lg:mx-0
                ">
                Expert in Backoffice Software for Trading Stock Exchange.
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0 font-medium">
                Perform Stress-Free operations with the best back office
                software. Your business deserves the best software for all your
                back-office requirements and we are here to supply it to you.
              </p>
            </div>
            <div>
              <img
                src="/assets/img/banner-img.svg"
                alt="banner-img"
                className="w-100"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Banner;
