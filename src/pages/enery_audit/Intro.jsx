import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Intro() {
  return (
    <>
     <Helmet>
  <title>Energy Audit Services | AmpUltraVolt Engineers Pvt Ltd</title>
  <meta
    name="description"
    content="AmpUltraVolt Engineers Pvt Ltd offers comprehensive Energy Audit services including electrical system analysis, thermography, power quality assessment, demand management and energy conservation solutions for commercial, residential, data center and industrial facilities."
  />
</Helmet>

      <Header />

      {/* PAGE BANNER */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/energy-intro.webp"
          alt="Energy Audit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-4xl font-semibold">
              Energy Audit
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl mx-auto">
              Optimizing energy performance through systematic analysis
            </p>
          </div>
        </div>
      </section>

      {/* ENERGY AUDIT INTRO */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-[#0b1220]">
                Energy Audit
              </h2>

              <p className="text-gray-600 leading-relaxed text-justify">
                Energy Audit is an inspection, survey and analysis of energy flows
                for energy conservation in a building, process or system to reduce
                energy input without negatively affecting output.
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                Our services cover Commercial & Residential Buildings, Data Centers,
                Schools and Industrial facilities, helping optimize energy usage
                and reduce operational costs.
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                Electrical energy is the most extensively utilized form of energy.
                High consumption occurs through mechanical systems such as pumps,
                blowers, agitators and other electrical equipment.
              </p>
            </div>

            <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-3xl shadow-lg">
              <img
                src="/images/audit-image.webp"
                alt="Energy Audit Inspection"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

          </div>
        </div>
      </section>
{/* ================= ENERGY AUDIT SCOPE – PART 1 ================= */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* IMAGE */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-3xl shadow-xl order-2 lg:order-1">
        <img
          src="/images/energy-audit-one.webp"
          alt="Energy Audit Inspection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
          Energy Audit Scope & Methodology
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Energy Audit is a systematic inspection, survey and analysis of energy
          flows to reduce energy consumption without affecting operational
          output.
        </p>

        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
          {[
            "Walkthrough of facility & due diligence of installed services",
            "Study of DBR and electrical drawings",
            "Analysis of past 1 year electricity bills & logs",
            "Meeting with higher management & understanding operations",
            "Energy management & equipment profiling",
            "Thermography analysis for panels and DBs",
            "UPS, DG and critical equipment profiling",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

{/* ================= ENERGY AUDIT SCOPE – PART 2 ================= */}
<section className="py-20 bg-[#f7faf9]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* CONTENT */}
      <div >
        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
          {[
            "Lux level & lighting intensity analysis",
            "CFM and air balancing analysis",
            "Individual power factor analysis",
            "Harmonic analysis of electrical panels",
            "Loss analysis in individual equipment",
            "Demand management analysis",
            "Final report, certification & recommendations presentation",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-blue-600"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-3xl shadow-xl ">
        <img
          src="/images/energy-audit-two.webp"
          alt="Energy Audit Analysis"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  </div>
</section>
      <Footer />
    </>
  );
}