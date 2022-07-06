import React from 'react'
import Accounts from './Accounts';
import Banners from './Banners';
import ChangeFacility from './ChangeFacility';
import ClientMaster from './ClientMaster';
import Contracts from './Contracts';
import Reports from './Reports';
import Security from './Securitys';
import Special from './Special';
import Brokerage from './Brokerage';
import Billing from './Billing';

function ProductCommex
() {
  return (
    <>
    <Banners/>
<Contracts/>
<ClientMaster/>
<Brokerage/>
<ChangeFacility/>
<Reports/>
<Accounts/>
<Security/>
<Special/>
    </>
  )
}

export default ProductCommex;
