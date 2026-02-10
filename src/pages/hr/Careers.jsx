import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CareersAmp() {
  return (
    <>
      <Helmet>
        <title>Careers | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="Explore career opportunities at AmpUltraVolt. Join a culture of innovation, leadership, teamwork and professional growth."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/career-banner.webp"
          alt="Careers at AmpUltraVolt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/70 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-4">
              Careers @ AmpUltraVolt
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join a culture of innovation, leadership, teamwork and continuous
              professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="pt-8 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              More Than a Workplace – A Growth Journey
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              At AmpUltraVolt, we are networkers, innovators, pioneers, engineers,
              technicians, risk-takers and team players. We seek individuals who
              are passionate about their domain, curious about new technologies,
              and driven to grow professionally.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our leadership spans the entire organization, with professionals
              who have grown from Trainee Engineers to Vice Presidents and
              Directors — a reflection of our belief that small beginnings can
              lead to giant transformations.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/careers.webp"
              alt="AmpUltraVolt Team Culture"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </section>

      {/* ================= CULTURE & VALUES ================= */}
      <section className="py-16 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – IMAGE */}
          <div
            data-aos="fade-left"
            className="relative h-[340px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/careers-team.webp"
              alt="Work Culture at AmpUltraVolt"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* RIGHT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              A Culture That Builds Leaders
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              We believe in encouraging employees to take ownership, innovate,
              brainstorm and bring positive change to their workspace. AmpUltraVolt
              is not just an employer — we are investors in our people’s progress.
            </p>

            <p className="text-gray-600 leading-relaxed text-justify">
              Our work culture values uniqueness, intelligence, integrity,
              openness, calculated risk-taking and a cosmopolitan mindset. We
              thrive in an environment where individuality and teamwork coexist
              in harmony.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY JOIN US ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">

          <h2 className="text-3xl font-semibold text-center text-[#0b1220] mb-12">
            Why Join AmpUltraVolt?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

            {[
              "Exposure to futuristic engineering projects",
              "Clear career growth and leadership opportunities",
              "Culture of innovation and continuous learning",
              "Strong mentorship and teamwork",
              "Global exposure and diverse work environments",
              "Opportunity to make a meaningful impact",
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="
                  bg-[#a8c8e9]
                  border-l-4 border-gray-300
                  hover:border-blue-600
                  px-6 py-5
                  rounded-xl
                  transition-all duration-500
                "
              >
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="py-16 bg-[#0b1220] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up" >

          <h2 className="text-3xl font-semibold mb-6">
            Current Job Openings
          </h2>

          <div className="inline-block bg-white/10 px-8 py-4 rounded-2xl mb-6">
            <p className="text-lg font-medium">Skilled Labor</p>
          </div>

          <p className="text-gray-300 mb-6">
            Interested candidates can send their updated resumes to:
          </p>

          <a
            href="mailto:hr@AmpUltraVolt.com"
            className="inline-block text-lg font-semibold text-blue-400 hover:text-blue-300 transition"
          >
            hr@AmpUltraVolt.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}