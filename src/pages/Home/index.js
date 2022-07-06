import React from 'react';
import Banner from './Banner';
import About from './About';
import ProductSlider from './ProductSlider';
import Contact from './Contact';
import Services from './Services';
import OurClients from './OurClients';
import Industry from './Industry';
const Home = ()=>{
    return (
        <>
            <Banner/>
            <About/>
            <ProductSlider/>
            <Services/>
            <Industry/>
            <OurClients/>
            <Contact/>

        </>
    )
}
export default Home;