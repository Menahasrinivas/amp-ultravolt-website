import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HrInitiative() {
  return (
    <>
      <Helmet>
        <title>HR Initiatives | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="AmpUltraVolt HR Initiatives focus on employee induction, training, safety, engagement, mentoring and continuous development aligned with international standards."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[52vh]">
        <img
          src="/banner/hr-banner.webp"
          alt="HR Initiatives and Employee Development"
          className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-[#020617]/65 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-3">
              HR Initiatives & Employee Development
            </h1>

            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Empowering people through structured training, safety leadership,
              mentoring, and global exposure to build a skilled, engaged, future-ready workforce.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="pt-8 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-5">
              Structured HR Training & Induction Program
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              AmpUltraVolt ensures close to 100% induction success through a
              result-driven and interactive training environment supported by
              individual mentoring and continuous evaluation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The HR team includes 15 certified specialists delivering ISO-certified
              training aligned with international standards and industry best practices.
            </p>

            <p className="text-gray-600 leading-relaxed">
              These programs ensure consistency, competency, and long-term professional growth.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/hr-intro.webp"
              alt="HR Training Program"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </section>

      {/* ================= KEY TRAINING AREAS ================= */}
      <section className="pt-4 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-stretch">

          {/* LEFT – IMAGE */}
          <div
            data-aos="fade-left"
            className="relative rounded-3xl overflow-hidden shadow-xl min-h-[300px] group"
          >
            <img
              src="/images/hr-training.webp"
              alt="HR Training & Development"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* RIGHT – CONTENT */}
          <div data-aos="fade-up" className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-8">
              Key Areas of HR Training Focus
            </h2>

            <div className="space-y-4">
              {[
                "Stress Management",
                "First Aid Training",
                "Environmental Management & Conservation",
                "Motivation",
                "Self-Assessment",
                "Six-Sigma",
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="
                    flex items-center gap-5
                    px-6 py-4
                    bg-[#f9fafb]
                    border-l-4 border-gray-300
                    hover:border-blue-600
                    hover:bg-blue-50
                    transition-all duration-500
                  "
                >
                  <span className="text-sm font-semibold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-base font-medium text-[#0b1220]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= EMPLOYEE DEVELOPMENT & SAFETY ================= */}
      <section className="py-16 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-4">
              Employee Development, Safety & Global Engagement
            </h2>

            <div className="w-16 h-[3px] bg-blue-600 rounded-full mb-6"></div>

            <p className="text-gray-700 leading-relaxed text-[15px] text-justify">
              AmpUltraVolt emphasizes continuous employee development through refresher
              programs, advanced training, adaptive feedback systems, and safety leadership.
              The HR Safety wing actively engages engineers globally to minimize incidents
              and promote safe working practices. Employees receive mentoring from senior
              professionals and gain international exposure, serving as brand ambassadors
              across Asia, Africa, the Middle East, and Europe.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/hr-safety.webp"
              alt="Employee Training and Safety Programs"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}