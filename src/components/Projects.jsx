import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Solar Power Plant Installation",
      location: "Tamil Nadu",
      image: project1,
    },
    {
      title: "Industrial Electrical Works",
      location: "Chennai",
      image: project2,
    },
    {
      title: "Energy Audit Project",
      location: "Coimbatore",
      image: project3,
    },
    {
      title: "Operation & Maintenance",
      location: "Bangalore",
      image: project4,
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* SECTION TITLE */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Projects
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A glimpse of our successfully executed projects across
            solar, electrical and energy solutions.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="relative overflow-hidden rounded-xl shadow group"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover
                           transition-transform duration-500
                           group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50
                              flex flex-col justify-end p-4
                              opacity-0 group-hover:opacity-100
                              transition duration-300">
                <h3 className="text-white text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
