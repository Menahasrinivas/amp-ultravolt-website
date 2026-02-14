import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion as Motion } from "framer-motion";
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

export default function CompanySoftware() {
  return (
    <>
      <Helmet>
        <title>Engineering Tools & Software | AmpUltraVolt</title>
        <meta
          name="description"
          content="Engineering tools and software deployed by AmpUltraVolt Engineers Pvt Ltd for power system studies, EPC design, and technical analysis."
        />
      </Helmet>

      <Header />
      {/* PAGE BANNER */}
      <section
        className="relative h-[55vh] bg-slate-900 bg-center bg-cover"
        style={{
          backgroundImage: "url('/banner/software-banner.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6 ">
          <div>
            <h1 className="text-4xl font-semibold text-white ">
              Engineering Tools & Software
            </h1>
            <p className="mt-3 text-gray-200 max-w-2xl mx-auto ">
              Advanced engineering platforms deployed for accuracy, compliance,
              and performance analysis
            </p>
          </div>
        </div>
      </section>
      {/* SOFTWARE SECTION – EPC STYLE */}
      <section className="bg-white pt-10 pb-20 sm:pt-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* SECTION INTRO */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16 text-justify"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0b1220]">
              Engineering Tools & Platforms
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base  text-justify">
              Industry-standard engineering software deployed for EPC design,
              system reliability, safety compliance, and advanced power
              analysis.
            </p>
          </Motion.div>
          {/* SOFTWARE SECTION */}
          <section className="py-16">
            <div className="w-full px-4 sm:px-6 lg:px-10">
              {/* CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* CARD TEMPLATE */}
                {[
                  {
                    title: "CAD & Drafting Platforms",
                    color: "from-emerald-400 to-cyan-400",
                    items: [
                      "AutoCAD 2012",
                      "AutoCAD LT",
                      "Nano CAD",
                      "BRICSCAD 2014",
                    ],
                  },
                  {
                    title: "Power System Studies & Analysis",
                    color: "from-sky-400 to-blue-400",
                    items: [
                      "ETAP 12.5",
                      "EMTP 3.5.0",
                      "MICROTRAN 3.22",
                      "Load Flow",
                      "Short Circuit",
                      "Transient Stability",
                    ],
                  },
                  {
                    title: "Structural & Electrical Design",
                    color: "from-indigo-400 to-purple-400",
                    items: [
                      "STAAD Pro",
                      "STAAD Pro ANSI",
                      "STAAD Pro Foundation",
                      "STAAD Pro Connect (10 Codes)",
                    ],
                  },
                  {
                    title: "Earthing, Protection & Lighting Design",
                    color: "from-amber-400 to-orange-400",
                    items: ["CDEGS", "CYME", "DIALux", "Calculux"],
                  },
                ].map((card, index) => (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="
            relative p-7 sm:p-8
            rounded-[28px]
            bg-[radial-gradient(120%_120%_at_50%_0%,#2f4f52_0%,#1f3438_45%,#17262a_100%)]
            text-white
            
            transition-all duration-500
            hover:-translate-y-2
          "
                  >
                    <h4 className="text-base sm:text-lg font-semibold mb-5 leading-snug">
                      {card.title}
                    </h4>

                    <ul className="divide-y divide-white/10">
                      {card.items.map((item, i) => (
                        <li
                          key={i}
                          className="
    group relative px-4 py-3
    text-sm text-gray-200
    hover:bg-white/10 hover:pl-7
    transition-all duration-300
  "
                        >
                          <span
                            className={
                              "absolute left-0 top-1/2 -translate-y-1/2 " +
                              "h-0 w-1 rounded-full " +
                              "bg-gradient-to-b from-emerald-400 to-cyan-400 " +
                              "transition-all duration-300 group-hover:h-6"
                            }
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* EDGE VIGNETTE */}
                    <div
                      className="
            pointer-events-none absolute inset-0
            rounded-[28px]
            bg-gradient-to-b from-black/10 via-transparent to-black/35
          "
                    />
                  </Motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}
