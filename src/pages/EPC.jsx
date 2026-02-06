import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


export default function EpcSolar() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section
        className="relative h-[55vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/banner/epcbanner.webp')" }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <h1 className="text-4xl font-semibold text-white">
              Engineering, Procurement & Construction (EPC)
            </h1>
            <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
              End-to-end EPC solutions for Solar Power Plants with precision,
              compliance, and long-term performance assurance
            </p>
          </div>
        </div>
      </section>

      {/* ================= EPC MASTER SECTION ================= */}
      <section className="relative py-32 bg-linear-to-b from-[#f4f7fb] to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.08),transparent_45%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="max-w-4xl mb-20" data-aos="fade-up">
            <p className="text-sm tracking-widest text-blue-600 mb-4">
              ENGINEERING • PROCUREMENT • CONSTRUCTION
            </p>

            <h2 className="text-4xl font-semibold mb-6 text-[#0b1220]">
              End-to-End Solar EPC
              <span className="block text-blue-700">
                Designed for Reliability & Long-Term Performance
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              AmpUltraVolt delivers customized and turnkey EPC Solar Power
              Projects through experienced professionals and BEE Certified
              Energy Auditors, supported by advanced testing and precision
              measuring instruments.
            </p>
          </div>

          {/* ================= EPC PROCESS ================= */}
          <div className="grid lg:grid-cols-5 gap-6 mb-28">
            {[
              { title: "Concept & Design", img: "/images/epc-design.webp" },
              { title: "Engineering & Procurement", img: "/images/epc-procure.webp" },
              { title: "Erection & Installation", img: "/images/epc-erection.webp" },
              { title: "Testing & Commissioning", img: "/images/epc-testing.webp" },
              { title: "O&M – Plant Lifecycle", img: "/images/epc-lifestyle.webp" },
            ].map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="relative h-56 rounded-2xl overflow-hidden group border border-gray-200 hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
                <div className="relative z-10 h-full flex items-end p-6">
                  <h4 className="text-white text-lg font-semibold">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
{/* ================= RELIABILITY & TRUST ================= */}
<div className="grid lg:grid-cols-2 gap-14 items-center mb-16">

  {/* LEFT CONTENT */}
  <div data-aos="fade-right">
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-600 mb-4">
      <span className="w-6 h-2px bg-blue-600"></span>
      ENGINEERED RELIABILITY
    </span>

    <h3 className="text-3xl lg:text-[32px] font-semibold mb-6 text-[#0b1220] leading-tight">
      Reliability Built Into
      <span className="block text-blue-700">
        Every Stage of EPC Execution
      </span>
    </h3>

    <p className="text-gray-700 leading-relaxed mb-5 max-w-xl">
      AmpUltraVolt designs and delivers Solar Power Plants with a
      performance-first approach ensuring operational stability, safety,
      and long-term durability.
    </p>

    <p className="text-gray-600 leading-relaxed max-w-xl">
      Our EPC capabilities span Utility Scale SPV Power Plants and Rooftop
      Solar PV systems, executed under strict engineering and compliance
      benchmarks.
    </p>
  </div>

  {/* RIGHT TRUST CARD */}
  <div
    data-aos="fade-left"
    className="
      relative rounded-3xl p-12
      bg-white/80 backdrop-blur
      border border-blue-200/70
      shadow-[0_30px_80px_rgba(37,99,235,0.15)]
      transition hover:shadow-[0_40px_100px_rgba(37,99,235,0.25)]
    "
  >
    {/* Accent */}
    <div className="absolute -top-1 left-12 w-24 h-3px bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"></div>

    <h4 className="font-semibold mb-10 text-lg text-[#0b1220]">
      Why Clients Trust AmpUltraVolt
    </h4>

    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 text-gray-700">

      {[
        {
          title: "Certified Expertise",
          desc: "BEE Certified Energy Auditors",
        },
        {
          title: "Turnkey Delivery",
          desc: "End-to-end EPC execution",
        },
        {
          title: "Precision Testing",
          desc: "Advanced testing instruments",
        },
        {
          title: "Lifecycle Focus",
          desc: "Performance assurance",
        },
      ].map((item, i) => (
        <div
          key={item.title}
          className="group transition"
        >
          <p className="text-blue-700 font-semibold mb-1 group-hover:translate-x-1 transition">
            {item.title}
          </p>
          <p className="text-sm text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  



            </div>
          </div>
        </div>
      </section>



{/* TECHNICAL CAPABILITIES – TIMELINE DESIGN */}
<section data-aos="fade-up"
  data-aos-duration="900"
  data-aos-offset="200"
  className="relative min-h-[75vh] pt-16 pb-14 bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/epc-service.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* TITLE */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h3 className="text-3xl font-semibold text-white mb-3">
        Electrical Inspection, Testing & Commissioning
      </h3>
      <p className="text-gray-300 text-sm sm:text-base">
        High-voltage engineering expertise covering substations, transformers,
        protection systems and transmission infrastructure.
      </p>
    </div>

   {/* TIMELINE */}
<div className="relative">

  {/* CENTER LINE */}
 
<div
  className={`
    absolute left-1/2 top-0 h-full w-[3px]
    bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600
    -translate-x-1/2
    hidden md:block
  `}

></div>

  {/* ITEMS */}
  <div className="space-y-10 md:space-y-12">

    {[
      {
        title: "EHV / HV Substations",
        desc: "Inspection & commissioning of 22 / 400 kV and 220 / 6.6 kV substations",
      },
      {
        title: "Medium Voltage Systems",
        desc: "66 / 6.6 kV and 33 / 6.6 kV MV systems testing & maintenance",
      },
      {
        title: "Power Transformers",
        desc: "Testing & commissioning of 270–350 MVA transformers",
      },
      {
        title: "Protection Equipment",
        desc: "CT, CVT, PT, Circuit Breakers, Isolators & Lightning Arresters",
      },
      {
        title: "Neutral & Grounding Systems",
        desc: "NGT & NGR systems ensuring electrical safety & fault control",
      },
      {
        title: "Transmission Accessories",
        desc: "Wave traps and associated transmission protection equipment",
      },
    ].map((item, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div
          key={index}
          className={`relative flex items-center ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          {/* CONTENT */}
          <div
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className={`
              w-full md:w-[38%]
              px-2
              text-white
              ${isLeft ? "md:pr-2 text-right" : "md:pl-2 text-left"}
            `}
          >
            <h4 className="text-base font-semibold mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-200 leading-relaxed">
              {item.desc}
            </p>
          </div>

          {/* CONNECTOR LINE */}
          <div
  className={`
    absolute inset-0
    w-6 h-6 rounded-full
    bg-blue-500/40
    blur-xl
    animate-ping
  `}
></div>
        

          {/* CENTER DOT WITH GLOW */}
          <div
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              hidden md:block
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0
                w-6 h-6 rounded-full
                bg-blue-500/40
                blur-xl
                animate-ping
              "
            ></div>

            {/* Core Dot */}
            <div
              className="
                relative z-10
                w-3 h-3 rounded-full
                bg-blue-500
                shadow-[0_0_12px_rgba(59,130,246,0.9)]
              "
            ></div>
          </div>
        </div>
      );
    })}

      </div>
    </div>
  </div>
</section>
      {/* ================= RELIABILITY STATEMENT ================= */}
      <section className="py-16 bg-slate-100" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700">
            AmpUltraVolt ensures reliability, risk-free yields, and long-term
            durability by deploying multi-system products that complement each
            other across the full lifecycle of Solar Power Plants.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
