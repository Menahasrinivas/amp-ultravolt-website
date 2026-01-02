export default function Stats() {
  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
    },
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "50+",
      label: "Happy Clients",
    },
    {
      number: "25MW+",
      label: "Installed Capacity",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Achievements
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through experience, expertise and commitment.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-black-600 mb-2">
                {item.number}
              </h3>
              <p className="text-gray-700 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
