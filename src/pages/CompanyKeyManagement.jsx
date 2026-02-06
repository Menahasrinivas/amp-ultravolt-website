import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CompanyKeyManagement() {
  return (
    <>
      <Helmet>
        <title>Key Management | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="Meet the leadership behind AmpUltraVolt Engineers Pvt Ltd. Experienced professionals driving excellence in power, EPC and engineering services."
        />
      </Helmet>

      <Header />

     {/* PAGE BANNER */}
<section
  className="relative h-[55vh] bg-center bg-cover"
  style={{
    backgroundImage: "url('/banner/managementbanner.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
    <div>
      <h1 className="text-4xl font-semibold text-white">
        Key Management
      </h1>
      <p className="mt-3 text-gray-200">
        Leadership that drives engineering excellence
      </p>
    </div>
  </div>
</section>


      {/* MANAGEMENT PROFILE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="grid md:grid-cols-3 gap-12 items-start">

        {/* IMAGE */}
<div className="md:col-span-1">
  <div className="rounded-xl overflow-hidden shadow-md">
    <img
      src="/images/ampceo.png"
      alt="Vicky N. Pillai – Executive Director"
      className="w-full h-[320px] object-cover"
    />
  </div>
</div>

          {/* CONTENT */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-2">
              Vicky N. Pillai
            </h2>

            <p className="text-gray-600 mb-4">
              B.E (EEE)., MBA (F&M)., CEA / CEM (BEE., MoP) & P.G Diploma in Electrical Safety
            </p>

            <h3 className="text-lg font-medium mb-3 text-slate-800">
              Executive Director
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              A dynamic professional with over 17 years of extensive experience
              in Electrical Equipment, EHV / HV / MV / LV systems, Operation &
              Maintenance, Erection, Testing, and Commissioning across India’s
              prominent companies and multinational organizations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              His leadership and technical expertise play a pivotal role in
              driving AmpUltraVolt’s commitment to safety, quality, and
              operational excellence across all engineering and EPC projects.
            </p>
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
