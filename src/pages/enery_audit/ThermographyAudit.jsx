import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ThermographyAudit() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Thermography Audit | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt Engineers Pvt Ltd provides professional Thermography Audit services using advanced thermal imaging to detect electrical hotspots, prevent fire risks, and enhance reliability of electrical installations."
        />
      </Helmet>

      <Header />
 <div className="overflow-x-hidden">
      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/thermography.webp"
          alt="Thermography Audit"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-4">
              Thermography Audit
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Advanced non-contact thermal inspection to identify electrical
              abnormalities, prevent failures, and ensure safe and reliable
              operation of electrical systems.
            </p>
          </div>
        </div>
      </section>

     {/* ================= INTRO SECTION ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <div
      data-aos="fade-right"
      className="h-[420px] rounded-3xl overflow-hidden shadow-xl"
    >
      <img
        src="/images/thermo-audit.webp"
        alt="Thermal Inspection"
        className="w-full h-full object-cover hover:scale-105 transition duration-700"
      />
    </div>

    {/* CONTENT */}
    <div data-aos="fade-left" >
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
        What is Thermography Audit?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4 text-justify">
        Thermography is a non-contact, image-based temperature measurement
        technique used to identify weak points in electrical installations
        without disturbing active operation.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4 text-justify">
        Thermal imaging detects abnormal heat patterns caused by loose
        connections, overloading, insulation failures, or component degradation.
      </p>

      <p className="text-gray-600 leading-relaxed text-justify">
        Inspections are conducted in coordination with electrical experts to
        ensure accurate interpretation and preventive maintenance planning.
      </p>
    </div>

  </div>
</section>


{/* ================= BENEFITS ================= */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-3">
        Benefits of Thermography Study
      </h2>
      <p className="text-gray-600 leading-relaxed text-sm text-justify">
        Thermography enables early risk identification, improves operational
        reliability and enhances safety without interrupting live systems.
      </p>
    </div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT – BENEFITS */}
      <div className="space-y-4">

        {[
          "Reduction of fire and accident risks",
          "Early detection of weak points and damages",
          "Improved availability and reliability of installations",
          "Avoidance of consequential losses",
          "Safe inspection from secure distance",
          "Real-time temperature measurement under load",
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="
              group relative
              flex items-start gap-4
              px-4 py-3
              rounded-lg
              border border-gray-200
              hover:border-blue-500
               hover:bg-blue-50
              transition-all duration-300
            "
          ><div className="
    absolute left-0 top-0 h-full w-1
    bg-blue-500
    opacity-0 group-hover:opacity-100
    transition
  " />
            {/* LEFT INDICATOR */}
            <div className="
              mt-1 w-2 h-2 rounded-full
              bg-blue-600
              group-hover:scale-125
              transition
            " />

            {/* TEXT */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {item}
            </p>
          </div>
        ))}

      </div>

      {/* RIGHT – IMAGE */}
      <div
        data-aos="zoom-in"
        className="relative w-full max-w-[520px] mx-auto lg:mx-0"
      >
        <div className="rounded-2xl overflow-hidden shadow-xl h-[320px]">
          <img
            src="/images/thermo-benefits.webp"
            alt="Thermography Inspection"
            className="w-full h-full object-cover"
          />
        </div>

        {/* SOFT ACCENT */}
        <div className="absolute -inset-3 rounded-3xl bg-blue-50 -z-10"></div>
      </div>

    </div>
  </div>
</section>
{/* ================= APPLICATIONS ================= */}
<section
  className="relative py-24 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/images/applications.webp')" }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-20 max-w-4xl">
      <h2
        data-aos="fade-up"
        className="text-3xl font-semibol text-white mb-4"
      >
        Applications of Thermography
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-gray-200 leading-relaxed text-justify"
      >
        Thermography is applied across critical electrical assets to detect
        thermal anomalies under real operating conditions, supporting
        preventive maintenance, safety assurance and operational reliability.
      </p>
    </div>

    {/* LIST */}
    <div className="grid lg:grid-cols-2 gap-x-20 gap-y-14 text-white">
      {[
        "Transformers – all voltage classes",
        "Power factor compensation equipment",
        "Low, medium & high voltage switchgear",
        "Control panels, fuse boxes & cabinets",
        "Electrical machines and drives",
        "Cable trays, busbars & overhead lines",
      ].map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 120}
          className="group relative pl-10 border-l-4 border-gray-300 hover:border-blue-600 transition-colors duration-500"
        >
          {/* DOT */}
          <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gray-300 group-hover:bg-blue-600 transition"></div>

          <p className="text-base font-medium text-gray-100 leading-relaxed">
            {item}
          </p>

          <div className="mt-4 h-[1px] w-0 bg-blue-600 group-hover:w-24 transition-all duration-700"></div>
        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= EXAMPLES ================= */}
<section className="py-14 bg-[#0b1220] text-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2
      data-aos="fade-up"
      className="text-3xl font-semibold text-center mb-12"
    >
      Typical Issues Detected
    </h2>

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT – IMAGE (RECTANGULAR & SHORTER) */}
      <div
        data-aos="fade-right"
        className="
          relative
          h-[200px]        /* 👈 reduced height */
          w-full max-w-lg  /* 👈 rectangular width */
          mx-auto
          rounded-xl
          overflow-hidden
          shadow-lg
        "
      >
        <img
          src="/images/issues-find.webp"
          alt="Thermography Issue Detection"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            hover:scale-105
          "
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* RIGHT – CONTENT */}
      <div
        data-aos="fade-left"
        className="space-y-5"
      >
        <p className="text-gray-300 text-sm leading-relaxed text-justify">
          Thermographic inspections commonly reveal critical electrical issues
          that may lead to failures, fire risks and operational losses if left
          unaddressed.
        </p>

        <ul className="space-y-4 text-sm">
          {[
            "Contact failures resulting in abnormal heat generation",
            "Improper mechanical support of hangers and risers",
            "Faulty or loose wrap connections causing localized hotspots",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3"
            >
              {/* INDICATOR */}
              <span className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-500"></span>

              <span className="text-gray-200 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>
      <Footer />
      </div>
    </>
  );
}