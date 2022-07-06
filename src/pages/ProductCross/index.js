import React from 'react'
import Accounts from './Accounts';
import Banners from './Banners';
import Billing from './Billing';
import Branches from './Branches';
import Charges from './Charges';
import ClientMaster from './ClientMaster';
import DematRequest from './DematRequest';
import Reports from './Reports';
import Statements from './Statements';
import StationeryManagement from './StationeryManagement';
import Technology from './Technology';
import Transactions from './Transactions';
import Website from './Website';
import OtherFeature from './OtherFeature';

function ProductCross
() {
  return (
    <>
    <Banners/>
<ClientMaster/>
<Transactions/>
<Charges/>
<Branches/>
<StationeryManagement/>
<DematRequest/>
<Statements/>
<Billing/>
<Accounts/>
<Reports/>
<OtherFeature/>
<Technology/>
<Website/>
    </>
  )
}

export default ProductCross;
