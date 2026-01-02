import solar from "../assets/solar.jpg";
import electrical from "../assets/electrical.jpg";
import audit from "../assets/audit.jpg";
import maintenance from "../assets/maintenance.jpg";

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
    <section className="py-16 bg-gray-400">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
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
              className="bg-gray-50 rounded-xl p-6 text-center
                         shadow hover:shadow-xl transition-all duration-300
                         group"
            >
              {/* ICON */}
              <div className="flex justify-center mb-5">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-30 w-30 object-contain
                             transition-transform duration-300
                             group-hover:scale-110"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2
                             group-hover:text-red-600 transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
