import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SpecializedStudiesAmp() {
  return (
    <>
      <Helmet>
        <title>Power System Studies & Insulation Coordination | AmpUltraVolt</title>
        <meta
          name="description"
          content="AmpUltraVolt provides advanced Power System Studies using ETAP and Insulation Coordination Studies using EMTP-RV for HV & EHV networks ensuring safety, stability and reliability."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/study-banner.webp"
          alt="Power System Studies"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#020617]/75 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-4">
              Power System Studies
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Advanced analytical studies ensuring system reliability, safety,
              stability and insulation performance for HV & EHV power networks.
            </p>
          </div>
        </div>
      </section>
      {/* ✅ BANNER SECTION CLOSED */}

    {/* ================= INSULATION CO-ORDINATION ================= */}
<section className="py-10 bg-[#f7faf9]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">

      {/* LEFT COLUMN */}
      <div className="flex flex-col h-full" data-aos="fade-right">

        {/* TEXT BLOCK */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
            Insulation Coordination Study
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Using <strong>EMTP-RV package from Powersys</strong>, insulation
            coordination studies are performed for lightning and switching
            overvoltage performance to ensure safe insulation margins for
            EHV systems.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Studies are carried out considering operational philosophy,
            system configuration, and protective device coordination to
            achieve optimal insulation performance.
          </p>
        </div>

        {/* IMAGE — STRETCHES TO MATCH RIGHT */}
        <div
          className="
            relative flex-1 h-full
            rounded-2xl overflow-hidden
            shadow-lg
          "
          data-aos="zoom-in"
        >
          <img
            src="/images/study-steps.webp"
            alt="Insulation Coordination Study"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col h-full justify-between" data-aos="fade-left">
        {[
          "Select most onerous system configuration for study",
          "Collect, compile and validate system data",
          "Model transformers, GIS, OHL, cables and surge arresters",
          "Select lightning current magnitude and waveform",
          "Define number of cases for insulation coordination",
          "Run EMTP-RV analysis using MicroTran v3.25",
          "Conduct SOV studies for systems above 300kV",
          "Evaluate alternative configurations and protection ratios",
          "Generate voltage stress waveforms",
          "Specify surge arrester type, class and energy rating",
        ].map((step, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 20}
            className="
              flex gap-4 items-start
              p-4 rounded-xl bg-white
              hover:bg-blue-100
              shadow-sm hover:shadow-md
              transition-all
            "
          >
            <span className="text-blue-600 font-semibold">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">
              {step}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* ================= POWER SYSTEM STUDIES ================= */}
      <section
        className="relative py-10 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('/images/power-system.webp')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/15"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="max-w-3xl mb-6" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-white mb-2">
              Power System Studies
            </h2>
            <p className="text-white leading-relaxed text-sm">
              Using <strong>ETAP 12.0 Software Package</strong>, AmpUltraVolt performs
              in-depth analytical studies to evaluate system performance, stability,
              protection adequacy, and compliance under various operating scenarios.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-blue-200"></div>

            {[
              "Short Circuit Studies",
              "Load Flow Studies",
              "Relay Coordination",
              "Transient Stability",
              "Dynamic Stability",
              "Motor Starting Analysis",
              "Harmonic Analysis",
            ].map((item, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className={`relative mb-6 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-8 md:text-right"
                    : "md:pl-8 md:ml-auto"
                }`}
              >
                <span
                  className="hidden md:block absolute top-1 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white shadow"
                  style={{
                    [index % 2 === 0 ? "right" : "left"]: "-5px",
                  }}
                ></span>

                <div className="bg-white/90 backdrop-blur px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-sm font-semibold text-[#0b1220] mb-1 hover:text-blue-700">
                    {item}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-snug">
                    Comprehensive evaluation of system behavior to ensure operational
                    reliability, safety margins, and compliance with grid standards.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}