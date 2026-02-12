
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Projects | AmpUltraVolt Engineers Pvt Ltd";
  }, []);
  return (
    <>
      
      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/project-banner.webp"
          alt="AmpUltraVolt Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/70 flex items-center justify-center text-center px-6">
          <div data-aos="fade-up">
            <h1 className="text-white text-4xl font-semibold mb-4">
              Our Projects
            </h1>
            <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Delivering sustainable energy solutions through innovation,
              engineering excellence and operational expertise.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="pt-10 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
              Welcome to the Source of Alternative Energy
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              AmpUltraVolt is a reputed end-to-end service provider of Solar Power
              Plants, delivering solutions from Energy Audit and Energy
              Conservation Measures (ECM) to Engineering, Procurement,
              Construction (EPC) and Operation & Maintenance (O&M).
            </p>

            <p className="text-gray-600 leading-relaxed">
              Beyond solar power, our expertise extends to Wind Power,
              Transmission Line execution, Substation Detailed Engineering,
              Power System Studies and Insulation Coordination Studies.
            </p>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-aos="zoom-in"
            className="relative h-[380px] rounded-3xl overflow-hidden shadow-xl group"
          >
            <img
              src="/images/projects-intro.webp"
              alt="Energy Projects Overview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

        </div>
      </section>

      {/* ================= PROJECT DOMAINS ================= */}
      <section className="py-20 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-6">

          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-center text-[#0b1220] mb-14"
          >
            Our Project Domains
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              { title: "Solar Power", img: "/images/project-solar.webp" },
              { title: "Wind Power", img: "/images/project-wind.webp" },
              { title: "Energy Audit", img: "/images/project-audit.webp" },
              { title: "Energy Conservation Measures (ECM)", img: "/images/project-ecm.webp" },
              { title: "EPC (Engineering, Procurement & Construction)", img: "/images/project-epc.webp" },
              { title: "Operation & Maintenance (O&M)", img: "/images/project-om.webp" },
              { title: "Transmission Lines", img: "/images/project-transmission.webp" },
              { title: "HR & Training Initiatives", img: "/images/project-hr.webp" },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all duration-500
                "
              >
                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[#0b1220]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

     {/* ================= EXPERIENCE ================= */}
<section
  className="relative py-20 bg-center bg-cover"
  style={{ backgroundImage: "url('/images/htpannels.webp')" }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#020617]/65"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

    <h2
      data-aos="fade-up"
      className="text-3xl font-semibold text-white mb-6"
    >
      Engineering Excellence Backed by Experience
    </h2>

    <p
      data-aos="fade-up"
      data-aos-delay="100"
      className="text-gray-200 leading-relaxed max-w-4xl mx-auto"
    >
      Our team of highly experienced engineers, combined with years of
      domain expertise, enables AmpUltraVolt to consistently exceed
      customer expectations. We deliver reliable, efficient and future-
      ready energy solutions across diverse sectors and geographies.
    </p>

  </div>
</section>
   {/* ================= CURRENT PROJECTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            data-aos="fade-up"
            className="text-3xl font-semibold text-center text-[#0b1220] mb-14"
          >
            Current Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Tower Material Shifting & Ground Assembly Work",
                desc: "Tower no 14/0 (DC+03) Tower material shifting and ground assembly work in progress",
                img: "/gallery/project-img1.webp",
              },
              {
                title: "Transmission Tower Erection – Tightening Pending",
                desc: "Loc no 15/0 DC+6 tower erection complete tightening pending",
                img: "/gallery/project-img2.webp",
              },
              {
                title: "Transmission Line Tower Erection Completed",
                desc: "Loc no 4/0 DC+6 tower erection and tightening complete",
                img: "/gallery/project-img3.webp",
              },
              {
                title: "Double Circuit Tower Installation Work",
                desc: "Loc no 31/1 DB+6 tower erection complete tightening pending.",
                img: "/gallery/project-img4.webp",
              },
              {
                title: "DA+6 Tower Erection & Line Tightening",
                desc: "Loc no 3/2 DA+6 tower erection and tightening complete",
                img: "/gallery/project-img5.webp",
              },
              {
                title: "Transmission Structure Installation – DA+6",
                desc: "Loc no 3/1 DA+6 tower erection and tightening complete",
                img: "/gallery/project-img6.webp",
              },
              {
                title: "Kanakagiri to Koppal Transmission Line Project",
                desc: "Kanakagiri to Koppal Loc no 10/0 (DC+6) Tower erection done Tightening pending",
                img: "/gallery/project-img7.webp",
              },
            ].map((project, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="group bg-[#f8fafc] rounded-2xl overflow-hidden shadow-md hover:shadow-xl  border-2 border-transparent hover:border-green-600 transition-all duration-500"
              >
                {/* IMAGE */}
               <div className="relative h-[280px] overflow-hidden cursor-pointer">
  <img
    src={project.img}
    alt={project.title}
    onClick={() => setSelectedImage(project.img)}
    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
  />
</div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-[#0b1220] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMAGE MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}