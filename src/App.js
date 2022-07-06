import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Home       from './pages/Home';
import TradePlus  from './pages/Product';
import Products   from './pages/Products';
import ProducrEstro from './pages/ProductEstro';
import ProductEsign from './pages/ProdcutEsign';
import Layout     from './layout/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductCommex from './pages/ProductCommex';
import ProductCross from './pages/ProductCross';


import Download from './pages/Download';
import DownloadCard from './pages/Download/Cards/DownloadCard';
import TabsAndPilles from './pages/Download/TabsAndPilles/Index';



function App() {
  return (
   <>
    <BrowserRouter>
      <Layout>
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/products" element={<Products />} />
                  <Route exact path="/products/trade-plus" element={<TradePlus />} />
                  <Route exact path="/products/estro" element={<ProducrEstro />} />
                  <Route exact path="/products/e-sign" element={<ProductEsign />} />
                  <Route exact path="/products/commex" element={<ProductCommex />} />
                  <Route exact path="/products/cross" element={<ProductCross />} />


                  <Route exact path="/downloads" element={<Download />} />
                  <Route exact path="/downloads/:id" element={<DownloadCard />} />
                  <Route exact path="/downloads/:id/tabs" element={<TabsAndPilles />} />


              </Routes>
      </Layout>
    </BrowserRouter>
   </>
  );  
}

export default App;