import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EcmWcmActivities() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          ECM & WCM Activities | Energy & Water Conservation | AmpUltraVolt Engineers Pvt Ltd
        </title>
        <meta
          name="description"
          content="AmpUltraVolt Engineers Pvt Ltd provides Energy Conservation Measures (ECM) and Water Conservation Measures (WCM) services focused on reducing energy and water consumption, optimizing system efficiency, and achieving sustainable cost savings across commercial, residential and industrial facilities."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/ecm.webp"
          alt="Energy & Water Conservation Measures"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <div className="px-6">
            <h1 className="text-white text-4xl font-semibold">
              ECM & WCM Activities
            </h1>

            <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-justify">
              Implementing Energy and Water Conservation Measures to optimize
              resource utilization, reduce operational costs, and support
              long-term sustainability across facilities.
            </p>
          </div>
        </div>
      </section>

  {/* ================= ENERGY CONSERVATION MEASURES (ECM) ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center" data-aos="fade-up">

      {/* LEFT – CONTENT */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
          Energy Conservation Measures (ECM)
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
          The Energy Conservation Measures (ECM) project focuses on identifying
          and implementing high-impact energy-saving opportunities that lead
          to significant reduction in energy consumption and operating costs.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6 text-justify">
          ECM is practiced with the objective of providing a structured framework
          for conducting energy audits, evaluation, and analysis to derive
          meaningful and practical energy conservation solutions that are easy
          to implement and sustain.
        </p>

        <h4 className="text-lg font-semibold text-[#0b1220] mb-4">
          Key Energy Saving Measures Implemented
        </h4>

        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          {[
            "Replacement of reciprocating air compressors with energy-efficient screw compressors",
            "Replacement of conventional lighting systems with LED fittings",
            "Installation of Variable Frequency Drives (VFD) in 1PA circuits",
            "Technology upgradation to improve system efficiency",
            "Installation of voltage stabilizers to optimize power quality",
            "Implementation of SPRS energy saving solutions",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-[2px] text-green-600 font-semibold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/images/ecm.webp"
          alt="Energy Conservation Measures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  </div>
</section>

{/* ================= WCM ACTIVITIES ================= */}
<section className="py-12 bg-gray-200">
  <div className="max-w-6xl mx-auto px-6 lg:px-10">

    {/* HEADER */}
    <div className="max-w-4xl mb-20" >
      <h2 className="text-4xl font-semibold text-[#0b1220] mb-6" data-aos="fade-up">
        WCM (World Class Manufacturing) Activities
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed text-justify text-justify">
        We provide structured consultancy services for implementing World Class
        Manufacturing practices focused on safety, operational excellence,
        standardization, and continuous improvement.
      </p>
    </div>

    {/* PROCESS FLOW */}
    <div className="relative pl-8" >

      {/* VERTICAL LINE */}
      <div className="absolute left-1 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-blue-200"></div>

      <div className="space-y-10" data-aos="fade-up">

        {[
          {
            title: "KAIZEN – Continuous Improvement",
            desc: "A structured approach promoting incremental improvements across processes, people, and systems — driving efficiency, quality, and productivity."
          },
          {
            title: "5S Methodology",
            desc: "Implementation of Seiri, Seiton, Seiso, Seiketsu, and Shitsuke to establish workplace discipline, visual management, and operational safety."
          },
          {
            title: "SWP – Safety Work Procedure",
            desc: "Development and deployment of standardized safety work procedures to control risks and ensure regulatory compliance."
          },
          {
            title: "SOP – Standard Operating Procedure",
            desc: "Preparation of clear and auditable operating procedures ensuring consistency, quality control, and safe execution of activities."
          },
          {
            title: "Six Sigma",
            desc: "Data-driven methodology aimed at reducing process variation, minimizing defects, and improving overall process capability."
          },
          {
            title: "Why–Why Analysis",
            desc: "Root cause analysis technique used to identify underlying causes of failures and prevent recurrence through systematic investigation."
          }
        ].map((item, index) => (
          <div key={index} className="relative" data-aos="fade-up" data-aos-delay={index * 150}>  

            {/* DOT */}
            <span className="absolute -left-[11px] top-2 w-4 h-4 rounded-full bg-blue-600"></span>

            {/* CONTENT */}
            <div className="pl-6">
              <h4 className="text-xl font-semibold text-[#0b1220] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}