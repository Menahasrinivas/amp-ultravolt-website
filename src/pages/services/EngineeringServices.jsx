import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EngineeringServicesAmp() {
  return (
    <>
      <Helmet>
        <title>Engineering Services | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt delivers comprehensive Engineering Services including Substation Detailed Engineering, Transmission Line Design, Power System Studies, Insulation Coordination and Wind Power solutions."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
<section className="relative h-[40vh] sm:h-[50vh] md:h-[55vh]">
  <img
    src="/banner/engg-services-banner.webp"
    alt="Engineering Services"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-[#020617]/70 flex items-center justify-center text-center px-6">
    <div data-aos="fade-up">
      <h1 className="text-white text-4xl font-semibold mb-3">
        Engineering Services
      </h1>
      <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed text-justify">
        Comprehensive engineering solutions delivering reliability, safety
        and performance across substations, transmission systems and
        renewable energy infrastructure.
      </p>
    </div>
  </div>
</section>

{/* ================= ENGINEERING ================= */}
<section className="py-12 bg-white text-[#0b1220]">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT IMAGE */}
    <div
      data-aos="zoom-in"
      className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl group"
    >
      <img
        src="/images/engg-services.webp"
        alt="Engineering Services"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div data-aos="fade-left">
      <h2 className="text-3xl font-semibold mb-5">
        Engineering Services
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-justify">
        Comprehensive electrical and civil engineering solutions designed to
        meet statutory standards, operational safety, and optimized project
        execution.
      </p>

      <ul className="space-y-3 text-sm">
        {[
          "Lightning & Lighting Mast System",
          "Foundation and Cable Trench Layout",
          "Storm Water Drainage System",
          "Road, Drain & Duct Bank Design",
          "Transformer and N2F System",
          "RTCC Control System",
          "Reactor Foundation Design",
          "Transformer Fire Wall, Soak Pit & BOP",
          "Switchyard Fencing Works",
          "Project Bill of Materials (BOM)",
          "Technical Specification – Supply & Insulation",
          "Detailed Cost Estimation",
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-blue-600 font-semibold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

  </div>
</section>


{/* ================= SUBSTATION ENGINEERING ================= */}
<section
  className="
    relative py-12
    bg-fixed bg-center bg-cover
  "
  style={{
    backgroundImage: "url('/images/substation-engg.webp')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* CONTENT */}
    <div data-aos="fade-up" className="max-w-3xl">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Substation – Detailed Engineering
      </h2>

      <p className="text-gray-200 leading-relaxed mb-8 text-justify">
        AmpUltraVolt has completed <strong>100+ assignments</strong> over the
        past decade in Switchyard and Substation detailed engineering services
        up to <strong>765kV</strong>, across India and overseas. Our engineering
        ensures safety, statutory compliance, constructability and long-term
        operational reliability.
      </p>

      {/* ELECTRICAL SCOPE LIST */}
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
        {[
          "Equipment Selection",
          "Substation Layout Plan and Sections",
          "Substation Clearance Diagrams",
          "Earth Mat Calculation & Design",
          "Erection Key Diagram",
          "Protection and Metering",
          "Earthing & Lightning (DSLS) Protection",
          "Lighting System Design",
          "Cable Routing Layout and Schedule",
          "Control Room Equipment Layout",
          "ACDB, DCDB & Battery System",
          "Control and Relay Panel",
          "Fire Protection System",
          "SCADA and PLCC System",
          "Emergency Lighting Systems",
          "Project Bill of Materials",
          "Preparation of Technical Specification",
          "Cost Estimation",
        ].map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 25}
            className="flex items-start gap-3"
          >
            <span className="text-blue-400 font-semibold mt-[2px]">▸</span>
            <p className="text-md text-gray-100 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
{/* ================= TRANSMISSION LINE ================= */}
<section className="py-18 bg-[#0b1220] text-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

    {/* CONTENT */}
    <div data-aos="fade-right">
      <h2 className="text-3xl font-semibold mb-5">
        Transmission Line Engineering
      </h2>

      <p className="text-gray-300 leading-relaxed mb-4 text-justify">
        Comprehensive engineering services for
        <strong> 132kV / 220kV / 400kV & 765kV </strong>
        transmission line projects with optimized design,
        safety compliance, and statutory approvals.
      </p>

      <ul className="space-y-3 text-sm">
        {[
          "Transmission Line Route Survey & Alignment Finalization",
          "Tower Location Finalization (Tower Spotting)",
          "Conductor Selection & Electrical Sizing",
          "Transmission Line Design Considering ROW Constraints",
          "Preparation of Single Line Diagram (SLD)",
          "Structural Analysis using STAAD (STAAD Analysis Report)",
          "Foundation Design & Drawings for All Soil Conditions",
          "Tower Structural, Elevation & Clearance Drawings",
          "Sag–Tension Chart with Mathematical Optimization",
          "Technical Support for Tower Testing at Recognized Testing Centers",
          "Bay Extension Estimation, CEIG Inspection & Approval",
          "Transmission Line Bill of Materials (BOM) Preparation",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-blue-400 font-semibold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* IMAGE */}
    <div
      data-aos="zoom-in"
      className="relative h-[460px] rounded-3xl overflow-hidden shadow-xl group"
    >
      <img
        src="/images/trans-engg.webp"
        alt="Transmission Line Engineering"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}