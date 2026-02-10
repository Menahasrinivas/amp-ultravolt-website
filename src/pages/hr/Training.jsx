import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TrainingAmp() {
  return (
    <>
      <Helmet>
        <title>HR Training & Development | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt HR Training & Development programs focus on rigorous recruitment, mentoring, certification, corporate sensitization and functional area exposure."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[52vh]">
        <img
          src="/banner/training-banner.webp"
          alt="HR Training and Development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/65 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-3">
              HR Training & Development
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Building industry-ready professionals through structured recruitment,
              mentoring, certification, and real-world exposure.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              Rigorous Recruitment & Mentored Training
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              AmpUltraVolt’s HR Department follows one of the most rigorous recruitment
              and training processes in the industry. Candidates are evaluated across
              multiple parameters and undergo several levels of departmental interviews
              before selection.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Training programs are considered industry benchmarks, with candidates
              sourced through internal references, academic institutions, and structured
              campus interviews.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Each program is carefully designed to align candidate interests,
              qualifications, and business requirements while ensuring continuous HR
              support throughout the journey.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/hr-trainingprogram.webp"
              alt="Recruitment and HR Training"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </section>

     {/* ================= TRAINING PROGRAM STRUCTURE ================= */}
<section
  className="relative py-16 bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/training.webp')",
  }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#020617]/70"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-white mb-3">
        Structured Training Program
      </h2>
      <p className="text-gray-200 max-w-3xl mx-auto">
        A two-week intensive program combining technical exposure, real-world
        assignments, and certification to prepare trainees for immediate deployment.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          title: "Classroom Centric",
          desc: "Subject-intensive learning covering technical education, product knowledge, and operation & maintenance.",
        },
        {
          title: "Case Centric",
          desc: "Real project incidents and safety-focused case studies to develop analytical and problem-solving skills.",
        },
        {
          title: "Experience Centric",
          desc: "On-site learning with industry experts, working at important client locations across regions.",
        },
      ].map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 120}
          className="
      bg-white/55
        backdrop-blur
           rounded-2xl p-8
              shadow-md
              transition-all duration-300 ease-out
                      transform hover:-translate-y-2 hover:scale-[1.03]
            hover:bg-blue-50
              hover:shadow-2xl
             group
               "
        >
          <h3 className="text-lg font-semibold text-[#0b1220] mb-4 group-hover:text-blue-600 transition">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* ================= CORPORATE SENSITIZATION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – IMAGE */}
          <div
            data-aos="fade-left"
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/structured-training.webp"
              alt="Corporate Sensitization Training"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* RIGHT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              Corporate Sensitization & Cultural Integration
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Training is highly interactive and assessment-driven, focusing on
              interpersonal skills, cultural adaptation, social etiquette, and
              customer-centric professional conduct.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              The program acclimatizes participants into AmpUltraVolt’s interdisciplinary
              global network early in their careers, enabling successful postings across
              domestic and international locations.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FUNCTIONAL AREA TRAINING ================= */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
            Functional Area Exposure & Continuous Development
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
            The training calendar familiarizes candidates with diverse functional areas
            across AmpUltraVolt divisions, enabling holistic understanding of operations.
            Continuous refresher programs keep employees engaged, strengthen collaboration
            with HR, and support long-term career growth through mentoring and structured
            learning frameworks.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}