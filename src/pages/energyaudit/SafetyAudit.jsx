
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SafetyAudit() {
  return (
    <>
     

      <Header />

      {/* PAGE BANNER */}
      <section className="relative h-[55vh] ">
        <img
          src="/banner/safety.webp"
          alt="Energy Audit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-4xl font-semibold">
               Electrical and Fire Safety Audit
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl mx-auto">
              Identifying electrical risks, preventing fire hazards, and protecting
          people, assets, and business continuity through structured safety audits.
            </p>
          </div>
        </div>
      </section>
      {/* ================= RISK CONTEXT ================= */}
<section className="py-12 bg-white mt-10">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl">
      <img
        src="/images/safety-one.webp"
        alt="Electrical Fire Risk"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-6 mt-12">
        Why Electrical Safety Audit is Essential
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Over 20% of fires worldwide and nearly 40% of fires in India occur due
        to faulty electrical circuits. Electrical hazards continue to threaten
        safety in the form of shocks, burns, fires and explosions.
      </p>

      <p className="text-gray-600 leading-relaxed">
        In process and service industries, electrical faults can lead to massive
        business interruption, data loss, equipment damage and risk to human life.
      </p>
    </div>

  </div>
</section>
{/* ================= ELECTRICAL / FIRE SAFETY AUDIT SCOPE ================= */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}
    <div className="mb-14 max-w-3xl">
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
        Electrical & Fire Safety Audit – Scope of Study
      </h2>
      <p className="text-gray-600 leading-relaxed">
        A systematic evaluation of electrical systems to identify potential fire,
        shock, explosion and operational hazards, ensuring statutory compliance
        and risk mitigation across facilities.
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT – CONTENT */}
      <div className="space-y-5 text-gray-700 text-sm leading-relaxed">
        <ul className="space-y-3 list-disc pl-5">
          <li>Verification of statutory compliance with Indian Electricity standards</li>
          <li>Physical inspection to identify electrical shock, fire and explosion hazards</li>
          <li>Review of lightning protection system – adequacy & maintenance</li>
          <li>Assessment of static electricity hazards in plant operations</li>
          <li>Hazardous area classification & flameproof equipment review</li>
          <li>Evaluation of electrical preventive maintenance practices</li>
          <li>Analysis of electrical accidents and near-miss incidents</li>
          <li>Review of safety procedures, work permits, LOTO & interlocks</li>
          <li>Cable insulation integrity testing (sample basis)</li>
          <li>Earthing system review including resistance measurements</li>
          <li>Identification of overloading through load current measurements</li>
          <li>Infra-red thermal imaging for hotspot detection</li>
        </ul>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/images/safety-two.webp"
          alt="Electrical Safety Audit Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  </div>
</section>

{/* ================= EXPERIENCE & REPORTING ================= */}
<section className="py-20 bg-[#f7faf9]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

    <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
      Experience & Audit Deliverables
    </h2>

    <p className="text-gray-600 leading-relaxed mb-4">
      Our engineers have over 25 years of experience in carrying out Electrical
      Safety Audits efficiently and thoroughly across diverse industries.
    </p>

    <p className="text-gray-600 leading-relaxed">
      After completing the audit, a detailed report covering observations,
      identified hazards, and recommended remedial actions is submitted and
      discussed with the management of the facility.
    </p>

  </div>
</section>

{/* ================= INTEGRATED SAFETY MANAGEMENT ================= */}
<section
  className="
    relative py-24 text-white
    bg-fixed bg-center bg-cover
  "
  style={{
    backgroundImage: "url('/images/systemintegrated.webp')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#020617]/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-center mb-16">
      Integrated Safety Management System
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "LOTO (Lock Out & Tag Out)",
        "HIRA (Hazard Identification & Risk Assessment)",
        "Height Permit",
        "Incident Investigation",
        "Confined Space Entry",
        "Scaffolding Safety",
        "Excavation & Crane Lifting",
        "On-site Contractor Safety Management",
        "SWP & SOP",
        "WOW (Way of Working)",
      ].map((item, index) => (
        <div
          key={index}
          className="
           bg-blue-500/15 backdrop-blur-lg
        border border-blue-300/30
        rounded-2xl p-6
        hover:bg-blue-500/25
        transition-all duration-300
          "
        >
          <p className="text-sm font-medium">{item}</p>
        </div>
      ))}

    </div>
  </div>
</section>
{/* ================= FIRE SAFETY AUDIT ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT – IMAGE */}
      <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/images/firesafety.webp"
          alt="Fire Safety Audit Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* RIGHT – CONTENT */}
      <div>

        <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
          Fire Safety Audit
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
          Fire safety audit is an effective tool for assessing fire safety
          standards of an organization or occupancy. A fire safety audit
          addresses the inherent fire hazards associated with day-to-day
          activities and recommends measures to reduce potential fire risks.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
          We offer Fire Safety Audit services to commercial buildings as well as
          industrial complexes. Our audits follow a systematic and organized
          approach to identify fire hazards and assess the effectiveness of
          existing fire prevention and protection systems.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4 text-justify">
          Our objective is to provide structured fire safety audits to evaluate
          the adequacy of components, services, and equipment, assess expected
          performance, and recommend compliance with applicable building rules,
          regulations, codes, and standards.
        </p>

       

      </div>

    </div>
  </div>
</section>


{/* ================= FIRE SAFETY AUDIT – GREEN BUILDING ================= */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT – CONTENT */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
          Fire Safety Audit – Green Building Consultancy
        </h2>
{/* 
        <p className="text-gray-600 leading-relaxed mb-8">
          Our Fire Safety Audit services for Green Buildings focus on identifying,
          evaluating, and mitigating fire risks through a systematic and compliant
          assessment of facilities, systems, and occupant preparedness.
        </p> */}

       <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
  {[
    "Identification of all significant fire hazards",
    "Identification of people at risk from each hazard",
    "Evaluation of existing control measures to reduce risk",
    "Determination of additional control measures required",
    "Emergency plan & responsibility review",
    "Fire alarm system availability review",
    "Fire-fighting system examination",
    "Fire safety awareness evaluation",
    "Fire safety training for employees",
    "Testing of fire safety equipment",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      <span className="mt-[1px] text-green-600 font-semibold">✓</span>
      <span>{item}</span>
    </li>
  ))}
</ul>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/images/firesafety-check.webp"
          alt="Fire Safety Audit Inspection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  </div>
</section>
<Footer />
    </>
  );
}