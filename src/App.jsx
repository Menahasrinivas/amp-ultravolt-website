import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import CompanyAbout from "./pages/CompanyAbout";
import CompanyKeyManagement from "./pages/CompanyKeyManagement";
import CompanySoftware from "./pages/CompanySoftware";
import EpcSolar from "./pages/EPC";
import SolarOperationManaement from "./pages/SolarOM";
import Intro from "./pages/enery_audit/Intro";
import GalleryImages from "./pages/Gallery";
import ContactInfo from "./pages/Contact";
import SafetyAudit from "./pages/enery_audit/SA";
import EcmWcmActivities from "./pages/enery_audit/EcmWcmActivities";
import WaterConservationAudit from "./pages/enery_audit/WaterConservationAudit";
import ThermographyAudit from "./pages/enery_audit/ThermographyAudit";
import ProjectsAmp from "./pages/Projects";
import HrInitiative from "./pages/hr/HrInitiative";
import TrainingAmp from "./pages/hr/Training";
import CareersAmp from "./pages/hr/Careers";
import EngineeringServicesAmp from "./pages/services/EngineeringServices";
import RenewablePowerAmp from "./pages/services/RenewablePower";
import SpecializedStudiesAmp from "./pages/services/SpecializedStudies";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTopMenu from "./components/ScrollToTop";

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
  <>
   <ScrollToTopMenu />
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
      <Route path="/energy-audit/safety-audit" element={<SafetyAudit />} />
      <Route path="/energy-audit/ecm-wcm" element={<EcmWcmActivities />} />
      <Route
        path="/energy-audit/water-conservation"
        element={<WaterConservationAudit />}
      />
      <Route
        path="/energy-audit/thermography"
        element={<ThermographyAudit />}
      />

      {/* SERVICES */}
      <Route path="/services/engineering" element={<EngineeringServicesAmp />} />
      <Route
        path="/services/renewable-power"
        element={<RenewablePowerAmp />}
      />
      <Route
        path="/services/specialized-studies"
        element={<SpecializedStudiesAmp />}
      />

      {/* PROJECTS */}
      <Route path="/projects" element={<ProjectsAmp />} />

      {/* HR */}
      <Route path="/hr/initiatives" element={<HrInitiative />} />
      <Route path="/hr/training" element={<TrainingAmp />} />
      <Route path="/hr/careers" element={<CareersAmp />} />

      {/* OTHERS */}
      <Route path="/gallery" element={<GalleryImages />} />
      <Route path="/contact" element={<ContactInfo />} />
    </Routes>

    {/* ✅ MOBILE WHATSAPP FLOAT */}
    <WhatsAppFloat />
  </>
);
}