import React from 'react'

function Products() {
  return (
    <>
    <section class="text-gray-600 body-font">
    <div className='title-box text-center px-5 py-9'>
                  <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl text-[#0A2A4A]'>Product</h2>
              </div>
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-1.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">Trade Plus</h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">Back office package for stock brokers</p>
          </div>
        </div>
      </div>
      <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-2.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">Cross  </h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">                         Back office / CDSL co-ordination, billing and accounting software for DPs with CDSL 
</p>
          </div>
        </div>
      </div>
      <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-2.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">Estro</h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">Back office / CDSL co-ordination, billing and accounting software for DPs with NSDL</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4 mt-6">
    <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-4.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">Commex</h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">Back office software for commodities derivatives</p>
          </div>
        </div>
      </div>
      {/* <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-5.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">Bowl</h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">Back office Data access utility by client linked through web</p>
          </div>
        </div>
      </div> */}
      <div class="px-4 md:w-1/3">
        <div class="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img class="w-24 h-24 place-self-center object-cover object-center ml-44 mt-10" src="/assets/img/product-6.svg" alt="blog"/>
        <div class="p-6">
            <h1 class="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">eSign</h1>
            <p class="leading-relaxed mb-3 text-center text-[#808D9A]">Module for Digitally signing the documents and dispatch to email address of client with maintenance of log.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Products