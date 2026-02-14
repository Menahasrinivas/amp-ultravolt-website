import solar from "/images/home-services.webp";
import electrical from "/images/home-img2.webp";
import audit from "/images/home-img3.webp";
import maintenance from "/images/home-img4.webp";

export default function Services() {
  const services = [
    {
      title: "Solar Power Plant",
      desc: "Complete EPC solutions for on-grid and off-grid solar power plants.",
      icon: solar,
    },
    {
      title: "Electrical Works",
      desc: "HT & LT electrical installations, transmission lines and substations.",
      icon: electrical,
    },
    {
      title: "Energy Audit",
      desc: "Detailed energy audit and conservation measures for industries.",
      icon: audit,
    },
    {
      title: "Maintenance",
      desc: "Operation & maintenance services ensuring long-term performance.",
      icon: maintenance,
    },
  ];

  return (
    <section className="py-20 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Delivering reliable and sustainable energy solutions through
            comprehensive engineering and execution services.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="
                group bg-white rounded-2xl p-6 text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                border border-transparent
                hover:-translate-y-2
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]
                hover:border-slate-200
                transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="
                    w-full h-40 object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-lg font-semibold text-slate-900 mb-2
                  group-hover:text-green-600 transition
                "
              >
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
