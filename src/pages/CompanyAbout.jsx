import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CompanyAbout() {
  return (
    <>
      <Helmet>
        <title>About AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt Engineers Pvt Ltd is a reputed end-to-end Solar, Wind & Power Engineering service provider delivering EPC, O&M, Energy Audit and Transmission solutions."
        />
      </Helmet>

      <Header />

      {/* PAGE BANNER */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/aboutbanner.webp"
          alt="AmpUltraVolt Engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">
          <div>
            <h1 className="text-white text-4xl font-semibold">
              About AmpUltraVolt
            </h1>
            <p className="text-gray-200 mt-3 max-w-xl mx-auto">
              Welcome to the source of alternative energy
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <Motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-6">Why We</h2>
          <h4 className="text-2xl font-semibold mb-6">
            End-to-End Alternative Energy Solutions
          </h4>
          <p className="text-gray-700 leading-relaxed">
            AmpUltraVolt is a reputed end-to-end service provider of Solar Power
            Plant solutions — from Energy Audit, Energy Conservation Measures
            (ECM), Engineering, Procurement & Construction (EPC) to Operation &
            Maintenance (O&M).
          </p>
        </div>

        <img
          src="/images/whywe.webp"
          alt="Solar Power Plant"
          className="rounded-xl shadow-lg"
        />
      </Motion.section>

      {/* SPECIALIZATION SECTION */}
      <Motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/beyondsolar.webp"
            alt="Wind Power Engineering"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Beyond Solar – Multi-Disciplinary Expertise
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Apart from Solar Power, AmpUltraVolt extends its engineering
              expertise across a wide spectrum of power and infrastructure
              domains, delivering integrated solutions that meet complex
              technical and operational requirements.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our core competencies include Wind Power systems, Transmission
              Line execution, Sub-station Detailed Engineering, Power System
              Studies, and Insulation Coordination Studies, ensuring compliance
              with grid standards, system reliability, and long-term
              performance.
            </p>
          </div>
        </div>
      </Motion.section>

      {/* EXPERIENCE SECTION */}
      <Motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Engineering Experience That Delivers
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Our team of well-experienced engineers, backed by years of industry
            expertise, gives us a distinct edge in consistently meeting and
            exceeding customer expectations across all project stages.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            From detailed engineering and system analysis to execution and
            long-term operations, our professionals ensure precision,
            reliability, and quality at every stage of the project lifecycle.
          </p>
        </div>

        <img
          src="/images/engg-experience.webp"
          alt="Engineering Team"
          className="rounded-xl shadow-lg"
        />
      </Motion.section>

      {/* OUR CORE SERVICES */}
      <section className="py-16 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0b1220]">
              Our Core Services
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Integrated engineering and energy solutions delivered with
              precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/core-services.webp"
                alt="AmpUltraVolt Core Services"
                className="w-600px max-w-full rounded-3xl shadow-lg object-cover"
              />
            </div>

            <div className="space-y-6 sm:space-y-7">
              {[
                "Solar Power",
                "Wind Power",
                "Energy Audit",
                "ECM",
                "EPC",
                "O & M",
                "Transmission Lines",
                "HR Services",
              ].map((service, index) => (
                <div key={index} className="group flex items-center gap-5">
                  <div className="h-11 w-11 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">
                    <span className="text-blue-600 group-hover:text-white font-semibold">
                      ✓
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-[#0b1220]">
                      {service}
                    </h4>
                    <div className="mt-2 h-2px w-8 bg-blue-600 group-hover:w-24 transition-all"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* OUR VALUES – STICKY BACKGROUND (TIGHT SPACING) */}
            <section
              className="relative min-h-screen py-32 bg-fixed bg-center bg-cover"
              style={{ backgroundImage: "url('/images/ourvalues.webp')" }}
            >
              {" "}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45"></div>{" "}
              <Motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-white"
              >
                {" "}
                <h2 className="text-3xl font-semibold mb-14 text-center">
                  {" "}
                  Our Values{" "}
                </h2>{" "}
                <div className="relative">
                  {/* Vertical Line */}{" "}
                  <div className="absolute left-6 top-0 h-full w-[2px] bg-white/30"></div>
                  {[
                    {
                      title: "Integrity",
                      desc: "We uphold transparency, honesty and ethical engineering practices in every project we execute.",
                    },
                    {
                      title: "Commitment",
                      desc: "We stay committed to our clients, timelines and quality benchmarks — without compromise.",
                    },
                    {
                      title: "Passion",
                      desc: "Our passion for engineering excellence drives innovation and sustainable energy solutions.",
                    },
                    {
                      title: "Safety & Excellence",
                      desc: "Safety is embedded in our culture while excellence defines our execution standards.",
                    },
                  ].map((item, index) => (
                    <Motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      className="relative flex gap-6 mb-12 pl-16"
                    >
                      {" "}
                      {/* Dot */}{" "}
                      <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-blue-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {" "}
                          {item.title}
                        </h3>{" "}
                        <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
                          {" "}
                          {item.desc}{" "}
                        </p>{" "}
                      </div>{" "}
                    </Motion.div>
                  ))}{" "}
                </div>
              </Motion.div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
