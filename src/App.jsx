import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import CompanyAbout from "./pages/CompanyAbout";
import CompanyKeyManagement from "./pages/CompanyKeyManagement";
import CompanySoftware from "./pages/CompanySoftware";

import EpcSolar from "./pages/EPC";
import SolarOperationManaement from "./pages/SolarOM";

import Intro from "./pages/energyaudit/Intro";

import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";



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
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* COMPANY */}
      <Route path="/company/about-us" element={<CompanyAbout />} />
      <Route path="/company/key-management" element={<CompanyKeyManagement />} />
      <Route path="/company/company-software" element={<CompanySoftware />} />

      {/* SOLAR */}
      <Route path="/solar/epc" element={<EpcSolar />} />
      <Route path="/solar/om" element={<SolarOperationManaement />} />

      {/* ENERGY AUDIT */}
      <Route path="/energy-audit/intro" element={<Intro />} />
      <Route
        path="/energy-audit/safety-audit"
        element={<SafetyAudit />}
      />
      <Route
        path="/energy-audit/ecm-wcm"
        element={<EcmWcmActivities />}
      />
      <Route
        path="/energy-audit/water-conservation"
        element={<WaterConservationAudit />}
      />
      <Route
        path="/energy-audit/thermography"
        element={<ThermographyAudit />}
      />

      {/* OTHERS */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}