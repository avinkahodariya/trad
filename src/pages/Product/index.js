import React from 'react';
import Banner from './Banner';
import MainSlider from './MainSlider';
import ClientMaster from './ClientMaster';
import DerivativesSegment from './DerivativesSegment';
import Facility from './Facility';
import Reports from './Reports';
import Accounts from './Accounts';
import Deliveries from './Deliveries';
import Security from './Security';
import OtherSection from './OtherSection';
import Contracts from './Contracts';
import SpecialFeatures from './SpecialFeatures';
import TradeNet from './TradeNet';

const TradePlus = ()=>{
    return (
        <>
            <Banner/>
            <MainSlider/>
            <Facility/>
            <Contracts/>
            <DerivativesSegment/>
            <ClientMaster/>
            <Deliveries/>
            <Reports/>
            <Accounts/>
            <Security/>
            <SpecialFeatures/>
            <TradeNet/>
            <OtherSection/>
        </>
    )
}
export default TradePlus;