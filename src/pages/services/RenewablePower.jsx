import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RenewablePowerAmp() {
  return (
    <>
      <Helmet>
        <title>Wind Power Engineering Services | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt provides detailed electrical, civil and structural engineering services for wind power projects and wind farm substations up to 220kV."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/windpower-banner.webp"
          alt="Wind Power Engineering"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#020617]/70 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-3">
              Wind Power Engineering
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Delivering detailed electrical, civil and structural engineering
              solutions for wind farm substations up to 220kV.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WIND POWER ================= */}
      <section className="py-16 sm:py-20 bg-white text-[#0b1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              Wind Power
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
              AmpUltraVolt has executed detailed engineering assignments for
              <strong> Windfarm Substations up to 220kV</strong>, delivering
              robust and compliant renewable power solutions.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-5">
              Electrical
            </h3>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {[
                "Equipment Selection",
                "Protection and Metering SLD",
                "Skid Mounted Substation Layout",
                "Substation Layout Plan and Sections",
                "Substation Clearance Diagrams",
                "Erection Key Diagram",
                "Earthing for WTGs",
                "Earthing & Lightning Protection",
                "Lighting System Design",
                "MV & LV Cable Sizing, Routing Layout and Schedule",
                "Control Room Equipment Layout",
                "Battery and LVAC System",
                "SCADA System",
                "Project Bill of Materials",
                "Cost Estimate",
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 30}
                  className="
                    flex items-start gap-3
                    p-2 rounded-md
                    hover:bg-blue-50
                    transition-colors duration-300
                    group
                  "
                >
                  <span className="text-blue-600 font-semibold mt-[2px]">
                    ✓
                  </span>
                  <p className="
                    text-sm text-gray-800
                    group-hover:text-blue-700
                    transition-colors
                  ">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[320px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/wind-power.webp"
              alt="Wind Power Engineering"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>
      </section>

      {/* ================= CIVIL & STRUCTURAL ================= */}
      <section className="py-16 sm:py-20 bg-[#f7faf9] text-[#0b1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[320px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/civil-work.webp"
              alt="Civil and Structural Engineering"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              Civil and Structural
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {[
                "Foundation Design and Engineering",
                "Structure Design and Engineering",
                "Control Room Building Design and Engineering",
                "Lightning & Lighting Mast",
                "Foundation and Cable Trench Layout",
                "Storm Water Drainage System",
                "Road, Drain & Duct",
                "Transformer Foundation",
                "Transformer Fire Wall and Soak Pit",
                "Project Bill Of Materials",
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 30}
                  className="
                    flex items-start gap-3
                    p-2 rounded-md
                    hover:bg-blue-50
                    transition-colors duration-300
                    group
                  "
                >
                  <span className="text-blue-600 font-semibold mt-[2px]">
                    ✓
                  </span>
                  <p className="
                    text-sm text-gray-800
                    group-hover:text-blue-700
                    transition-colors
                  ">
                    {item}
                  </p>
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