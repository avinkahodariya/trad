import React from 'react';
import { Link } from 'react-router-dom';
const dataList = [
  {link:"/products/trade-plus", title:"Trade Plus",img:"/assets/img/product-1.svg",desc:"Back office package for stock brokers."},
  {link:"/products/estro", title:"Estro",img:"/assets/img/product-3.svg",desc:"Back office / NSDL co-ordination, billing and accounting software for DPs with NSDL."},
  {link:"/products/cross", title:"Cross",img:"/assets/img/product-2.svg",desc:"Back office / CDSL co-ordination, billing and accounting software for DPs with CDSL"},
  {link:"/products/commex", title:"Commex",img:"/assets/img/product-4.svg",desc:"Back office software for commodities derivatives."},
  // {link:"/products/bowl", title:"Bowl",img:"/assets/img/product-5.svg",desc:"Back office Data access utility by client linked through web"},
  {link:"/products/e-sign", title:"eSign",img:"/assets/img/product-6.svg",desc:"Module for Digitally signing the documents and dispatch to email address of client with maintenance of log."},

]
const Products = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
    <div className='title-box text-center px-5 py-9'>
         <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl text-[#0A2A4A]'>Products</h2>
    </div>
  <div className="container px-14 py-12 mx-auto pt-4">
    <div className="flex flex-wrap -m-4 justify-center">
      {dataList.map((item,index)=>(
        <div className="px-4 md:w-1/3" key={index}>
            <Link to={item.link}>
              <div className="h-80 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden mt-4">
                  <img className="w-24 h-24 place-self-center object-cover object-center mx-auto mt-10" src={item.img} alt="blog"/>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-center text-[#3491FF] mb-3 underline">{item.title}</h1>
                    <p className="leading-relaxed mb-3 text-center text-[#808D9A]">{item.desc}</p>
                  </div>
              </div>
            </Link>
        </div>        
      ))}

     
    </div>
 
  </div>
</section>
    </>
  )
}

export default Products