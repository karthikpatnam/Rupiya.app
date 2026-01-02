import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ResidueFree from './pages/ResidueFree';
import CarbonCredits from './pages/CarbonCredits';
import ForFarmers from './pages/ForFarmers';
import ForFPOs from './pages/ForFPOs';
import ForBuyers from './pages/ForBuyers';
import ForInvestors from './pages/ForInvestors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/residue-free" element={<Layout currentPageName="ResidueFree"><ResidueFree /></Layout>} />
        <Route path="/carbon-credits" element={<Layout currentPageName="CarbonCredits"><CarbonCredits /></Layout>} />
        <Route path="/for-farmers" element={<Layout currentPageName="ForFarmers"><ForFarmers /></Layout>} />
        <Route path="/for-fpos" element={<Layout currentPageName="ForFPOs"><ForFPOs /></Layout>} />
        <Route path="/for-buyers" element={<Layout currentPageName="ForBuyers"><ForBuyers /></Layout>} />
        <Route path="/for-investors" element={<Layout currentPageName="ForInvestors"><ForInvestors /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
