import React from 'react'
import Accounting from './Accounting';
import Banners from './Banners';
import ChargeFacility from './ChargeFacility';
import ClientMaster from './ClientMaster';
import Statements from './Statements';
import StationeryManagement from './StationeryManagement';
import Technology from './Technology';
import Transactions from './Transactions';
import DematRequest from './DematRequest';
import ChangeBilling from './ChargeBilling';
import Branches from './Branches';
import Website from './Website';

function ProducrEstro
() {
  return (
    <>
    <Banners/>
    <ClientMaster/>
    <Transactions/>
    <ChargeFacility/>
    <Branches/>
    <StationeryManagement/>
    <DematRequest/>
    <Statements/>
    <ChangeBilling/>
    <Accounting/>
    <Technology/>
    <Website/>
    </>
  )
}

export default ProducrEstro;
