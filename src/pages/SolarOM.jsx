import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SolarOM() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Solar Operation & Maintenance Services | AmpUltraVolt EPC</title>
        <meta
          name="description"
          content="AmpUltraVolt provides professional Solar Operation & Maintenance (O&M) services ensuring maximum uptime, lifecycle performance, monitoring, and preventive maintenance for utility scale and rooftop solar plants."
        />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AmpUltraVolt Engineers Pvt Ltd",
            url: "https://www.ampultravolt.com",
            logo: "https://www.ampultravolt.com/logo.png",
          })}
        </script>

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AmpUltraVolt Engineers Pvt Ltd",
            areaServed: "India",
            serviceOffered: "Solar Operation and Maintenance Services",
          })}
        </script>
      </Helmet>

      <Header />

   {/* ================= HERO ================= */}
<section className="relative h-[55vh] bg-center bg-cover">
  {/* Background Image */}
  <img
    src="/banner/ombanner.webp"   // 👈 change to your image name
    alt="Solar Operation & Maintenance"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-6">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-center max-w-4xl"
    >
      <h1 className="text-4xl font-semibold text-white mb-5">
        Solar Operation & Maintenance (O&M)
      </h1>
      <p className="text-gray-200 text-lg">
        Maximizing uptime, safeguarding performance, and extending the
        lifecycle of solar power assets.
      </p>
    </motion.div>
  </div>

</section>

    {/* OPERATION & MAINTENANCE SECTION */}
<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-24">

    {/* ================= BLOCK 1: INTRO + TEXT LEFT / IMAGE RIGHT ================= */}
<div className="grid lg:grid-cols-2 gap-12 items-center">

  {/* LEFT CONTENT */}
  <div data-aos="fade-right" className="space-y-6">

    {/* INTRO (MOVED INSIDE) */}
    <div>
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
        Operation & Maintenance (O&M)
      </h2>
      <p className="text-gray-600 leading-relaxed">
        Solar project maintenance maximizes uptime and extends plant life.
        Reliable O&M ensures uninterrupted power generation, protects warranties,
        and minimizes downtime risks through proactive monitoring and servicing.
      </p>
    </div>

    {/* WHY O&M */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#0b1220]">
        Why O&M is Critical
      </h3>
      <p className="text-gray-600 text-md leading-relaxed">
        O&M issues must be addressed during pre-construction itself.
        Site managers coordinate maintenance activities, spare parts,
        utilities, land owners and regulatory authorities.
      </p>
      <p className="text-gray-600 text-md leading-relaxed">
        A professional O&M partner deploys skilled engineers and technicians
        who continuously oversee plant performance, ensuring reliability
        and long-term asset protection.
      </p>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div
    data-aos="fade-left"
    className="h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl shadow-lg"
  >
    <img
      src="/images/solar-om.webp"
      alt="Solar O&M"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
    />
  </div>

</div>
    {/* ================= SERVICES CARDS ================= */}
    <div>
      <h3
        data-aos="fade-up"
        className="text-xl font-semibold text-center mb-10 text-[#0b1220]"
      >
        Key Maintenance Services
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          "Site visits & performance inspection",
          "Electrical system checks & corrections",
          "Solar inverter preventive maintenance",
          "Civil & structural sub-station inspection",
          "Communication & data logging systems",
          "Other components (Battery, Cables, Earthing, PCU)",
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="
              bg-white rounded-2xl p-6
              shadow-md hover:shadow-xl
              transition hover:-translate-y-1
            "
          >
            <p className="text-md text-gray-700 font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* ================= BLOCK 2: IMAGE LEFT / TEXT RIGHT ================= */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* IMAGE */}
      <div
        data-aos="fade-right"
        className="h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl shadow-lg"
      >
        <img
          src="/images/plant.webp"
          alt="Solar Maintenance"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div data-aos="fade-left" className="space-y-4">
        <h3 className="text-xl font-semibold text-[#0b1220]">
          Plant & Site Management
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          Vegetation growth, soil erosion, drainage issues and structural
          defects can severely impact plant performance and safety.
        </p>
        <p className="text-gray-600 text-md leading-relaxed">
          A proactive O&M team performs visual inspections and preventive
          actions before seasonal risks cause irreversible damage.
        </p>
      </div>
    </div>
{/* PLANT MAINTENANCE SCOPE – IMAGE CARDS */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-2">
        Plant Maintenance Scope
      </h2>
      <p className="text-gray-600 text-md max-w-2xl mx-auto">
        Structured maintenance strategies ensuring reliability,
        performance and long-term asset protection.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Preventive Maintenance",
          img: "/images/preventive.webp",
        },
        {
          title: "Corrective Maintenance",
          img: "/images/corrective.webp",
        },
        {
          title: "Predictive Maintenance",
          img: "/images/predictive.webp",
        },
        {
          title: "Spare & Inventory Management",
          img: "/images/spare.webp",
        },
      ].map((item, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="
            relative h-[220px]
            rounded-2xl overflow-hidden
            group
          "
        >
          {/* BACKGROUND IMAGE */}
          <img
            src={item.img}
            alt={item.title}
            className="
              absolute inset-0 w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/45"></div>

          {/* CONTENT */}
          <div className="
            relative z-10 h-full
            flex items-center justify-center
            text-center px-4
          ">
            <h4 className="text-white font-semibold text-lg">
              {item.title}
            </h4>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    {/* ================= MONITORING & NOC ================= */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* CONTENT */}
      <div data-aos="fade-right" className="space-y-4">
        <h3 className="text-xl font-semibold text-[#0b1220]">
          Monitoring, Analytics & NOC
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          AmpUltraVolt Engineers provides advanced monitoring using
          solar-log data loggers from Germany, enabling real-time
          performance tracking and diagnostics.
        </p>
        <p className="text-gray-600 text-md leading-relaxed">
          Our Network Operations Centre (NOC) ensures continuous monitoring,
          predictive analytics, alarms, and uptime management for utility-scale
          and rooftop solar plants.
        </p>
      </div>

      {/* IMAGE */}
      <div
        data-aos="fade-left"
        className="h-[320px] sm:h-[360px] lg:h-[400px] overflow-hidden rounded-3xl shadow-lg"
      >
        <img
          src="/images/epc-testing.webp"
          alt="Solar Monitoring"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
    </div>

  </div>
</section>

{/* ================= OUR SERVICES PORTFOLIO ================= */}
<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-20">

    {/* SECTION HEADING */}
    <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
        Our Services Portfolio
      </h2>
      <p className="text-gray-600 leading-relaxed text-md">
        Comprehensive preventive maintenance, monitoring, analytics and
        operational support designed to maximize uptime and protect
        solar asset performance.
      </p>
    </div>

   {/* ================= PREVENTIVE MAINTENANCE PACKAGES ================= */}
<section className="bg-[#f7faf9] py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div
        data-aos="fade-right"
        className="h-[320px] sm:h-[360px] lg:h-[420px]
                   overflow-hidden rounded-3xl shadow-lg"
      >
        <img
          src="/images/maintenance.webp"
          alt="Preventive Maintenance"
          className="w-full h-full object-cover
                     transition-transform duration-700
                     hover:scale-110"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-left" className="space-y-6">

        <div>
          <h3 className="text-3xl font-semibold text-[#0b1220] mb-3">
            Preventive Maintenance Packages
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our preventive maintenance programs are structured to enhance
            reliability, maximize energy yield, and safeguard long-term
            solar asset performance through proactive inspections.
          </p>
        </div>

        {/* LIST */}
        
          <ul className="space-y-4">

            {[
              "Regular cleaning of solar panels",
              "Frequent maintenance of thermal-based components",
              "Yearly service of HT side equipment",
              "Diagnostic testing for low power production",
              "Circuit testing & IV curve tracing",
              "Thermal imaging & earth value measurement",
              "Retro commissioning",
              "Data acquisition system check",
              "Warranty management",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  relative pl-6
                  text-sm text-gray-700
                  leading-relaxed
                  before:absolute before:left-0 before:top-2
                  before:h-2 before:w-2
                  before:rounded-full
                  before:bg-blue-500
                "
              >
                {item}
              </li>
            ))}

          </ul>
        

      </div>

    </div>
  </div>
</section>
  {/* ================= UPTIME & MONITORING ================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div
        data-aos="fade-right"
        className="h-[300px] sm:h-[360px] lg:h-[420px]
                   overflow-hidden rounded-3xl shadow-lg"
      >
        <img
          src="/images/uptime.webp"
          alt="Uptime Monitoring"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            hover:scale-110
          "
        />
      </div>

      {/* RIGHT CONTENT */}
      <div data-aos="fade-left">

        <h3 className="text-2xl font-semibold text-[#0b1220] mb-6">
          Uptime Management & Advanced Monitoring
        </h3>

        <ul className="grid sm:grid-cols-2 gap-4">

          {[
            "Automatic string level visual alarms",
            "Real-time data collection",
            "Daily monitoring of energy production",
            "Effective data interpretation",
            "Mismatch characterization & In-situ banding",
            "Solar resource management & prediction",
            "PV system monitoring systems",
            "Trending & analytics for continuous improvement",
            "Critical & non-critical reactive repairs",
            "Spare parts and inventory management",
          ].map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="
                flex items-start gap-3
                text-sm text-gray-700
                transition
                hover:text-blue-600
              "
            >
              {/* TICK ICON */}
              <span className="
                mt-1 flex-shrink-0
                w-5 h-5 rounded-full
                bg-blue-100 text-blue-600
                flex items-center justify-center
                text-xs font-bold
              ">
                ✓
              </span>

              <span>{item}</span>
            </li>
          ))}

        </ul>

      </div>
    </div>

  </div>
</section>
    {/* ================= NETWORK OPERATIONS CENTRE ================= */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* CONTENT */}
      <div data-aos="fade-right" className="space-y-4">
        <h3 className="text-xl font-semibold text-[#0b1220]">
          State-of-the-art Network Operations Centre (NOC)
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          To monitor operations and manage maintenance of solar rooftops
          and utility-scale plants, AmpUltraVolt Engineers leverages
          advanced Network Operations Centre capabilities.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our centralized monitoring provides instant performance insights,
          proactive alerts, and data-driven decision support — ensuring
          optimal asset performance and business continuity.
        </p>
      </div>

    {/* FEATURE CARD – IMAGE BACKGROUND */}
<div
  data-aos="fade-left"
  className="
    relative
    rounded-3xl p-8
    text-white
    shadow-xl
    overflow-hidden
    bg-center bg-cover
  "
  style={{
    backgroundImage: "url('/images/state.webp')",
  }}
>
  {/* DARK OVERLAY FOR READABILITY */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* CONTENT */}
  <div className="relative z-10">
    <ul className="space-y-4 text-sm">
      <li>• Centralized plant monitoring & diagnostics</li>
      <li>• Real-time alerts and fault identification</li>
      <li>• Performance benchmarking & analytics</li>
      <li>• Remote troubleshooting & reporting</li>
      <li>• Support for rooftop & utility-scale plants</li>
    </ul>
  </div>
</div>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}
