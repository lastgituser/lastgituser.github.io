import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import './index.css';
import CaseStudyGthr from "./pages/casestudies/CaseStudyGthr";
import CaseStudyMyPetPal from './pages/casestudies/CaseStudyMyPetPal';
import CaseStudyDHS from './pages/casestudies/CaseStudyDHS';
import CaseStudyCampHorizon from './pages/casestudies/CaseStudyCampHorizon';
import CaseStudyHope2Restoration from './pages/casestudies/CaseStudyHope2Restoration';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work">
            <Route index element={<Work />} />
            <Route path="gthr" element={<CaseStudyGthr />} />
            <Route path="MyPetPal" element={<CaseStudyMyPetPal />} />
            <Route path="DHS" element={<CaseStudyDHS />} />
            <Route path="CampHorizon" element={<CaseStudyCampHorizon />} />
            <Route path="Hope2Restoration" element={<CaseStudyHope2Restoration />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
