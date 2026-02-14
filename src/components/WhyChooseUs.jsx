import whyImg from "/images/home-whychoose.webp";

export default function WhyChooseUs() {
  const points = [
    "End-to-end EPC solutions under one roof",
    "Highly experienced and certified engineering team",
    "Strict quality, safety and compliance standards",
    "Timely project execution with efficient planning",
    "Sustainable and cost-effective energy solutions",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT – KEY POINTS */}
        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us
          </h2>

          <ul className="space-y-5">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <span className="text-green-600 text-xl mt-1">✔</span>
                <p className="text-gray-700 text-base
                              group-hover:text-red-600
                              transition">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – IMAGE */}
        <div
          data-aos="fade-left"
          className="overflow-hidden rounded-xl"
        >
          <img
            src={whyImg}
            alt="Why Choose AMP Ultra Volt"
            className="w-full h-full object-cover
                       transition-transform duration-500
                       hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
