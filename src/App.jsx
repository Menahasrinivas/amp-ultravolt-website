import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import CompanyAbout from "./pages/CompanyAbout";
import CompanyKeyManagement from "./pages/CompanyKeyManagement";
import CompanySoftware from "./pages/CompanySoftware";
import EpcSolar from "./pages/EPC";

import AOS from "aos";
import "aos/dist/aos.css";
import SolarOperationManaement from "./pages/SolarOM";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/about-us" element={<CompanyAbout />} />
      <Route path="/company/key-management" element={<CompanyKeyManagement />} />
      <Route path="/company/company-software" element={<CompanySoftware />} />
      <Route path="/solar/epc" element={<EpcSolar />} />
      <Route path="/solar/om" element={<SolarOperationManaement />} />
    </Routes>
  );
}