import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function WaterConservationAudit() {
  return (
    <>
      <Helmet>
        <title>Water Conservation Audit | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt Engineers provides Water Conservation Audits, Industrial & Wastewater Management services to reduce water loss, improve efficiency, and deliver sustainable water management solutions."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/water-audit.webp"
          alt="Water Conservation Audit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl font-semibold mb-3">
              Water Conservation Audit
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Structured water audits and management solutions to reduce losses,
              optimize consumption and ensure sustainable water usage.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              Professional Water Audit & Management Services
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              AmpUltraVolt offers Water Audits, Wastewater Management and
              Engineering services for buildings and industrial complexes.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our objective is to assist clients in reducing costly water loss
              through effective conservation strategies and leakage control
              programs across water distribution networks.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our experienced analytical, design and engineering teams identify
              improvement areas that provide immediate and long-term water cost
              savings.
            </p>
          </div>

          {/* IMAGE */}
          <div
            data-aos="fade-left"
            className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/water-audit.webp"
              alt="Water Audit Inspection"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

        </div>
      </section>

      {/* ================= AUDIT SECTIONS ================= */}
      <section className="py-24 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center text-[#0b1220] mb-16">
            Our Water Audit Services
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* BUILDING WATER AUDIT */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src="/images/building-water.webp"
                  alt="Building Water Audit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0b1220] mb-4">
                  Building Water Audits
                </h3>

                <ul className="space-y-3 text-gray-600 text-sm list-none">
                  {[
                    "Description of facilities",
                    "Analysis of historical water usage",
                    "On-site survey of fixtures, equipment & landscaping",
                    "Leak inspection and water loss assessment",
                    "Cost-effective water saving measures",
                    "Financial savings, payback & ROI analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* INDUSTRIAL WATER AUDIT */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src="/images/industrial-water.webp"
                  alt="Industrial Water Audit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0b1220] mb-4">
                  Industrial Water Audits
                </h3>

                <ul className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Complete plant & site audit",
                    "Laboratory testing of effluents & pollutants",
                    "Engineering of cost-effective treatment solutions",
                    "Design solutions for restricted sites",
                    "Construction & regulatory compliance management",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* WASTE WATER AUDIT */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-3xl shadow-lg overflow-hidden group"
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src="/images/waste-water.webp"
                  alt="Waste Water Audit"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0b1220] mb-4">
                  Waste Water Audits
                </h3>

                <ul className="space-y-3 text-gray-600 text-sm">
                  {[
                    "Benchmarking with global best practices",
                    "Pollution prevention opportunities",
                    "Evaluation of treatment facility performance",
                    "Wastewater minimization strategies",
                    "Recycling & reuse programs",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* FOOT NOTE */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-600">
              Our water audits deliver measurable results through data-driven
              insights, helping clients achieve efficient, compliant and
              sustainable water management.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}