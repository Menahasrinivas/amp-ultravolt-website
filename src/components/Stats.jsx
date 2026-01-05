import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const stats = [
    { number: 100, suffix: "+", label: "Projects Completed" },
    { number: 10, suffix: "+", label: "Years of Experience" },
    { number: 50, suffix: "+", label: "Happy Clients" },
    { number: 25, suffix: "MW+", label: "Installed Capacity" },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-slate-50">
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
            <StatItem
              key={i}
              value={item.number}
              suffix={item.suffix}
              label={item.label}
              start={startCount}
              delay={i * 200}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* INDIVIDUAL STAT COMPONENT */
function StatItem({ value, suffix, label, start, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(value / (duration / 16));

    const timeout = setTimeout(() => {
      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= value) {
          startValue = value;
          clearInterval(counter);
        }
        setCount(startValue);
      }, 16);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, value, delay]);

  return (
    <div data-aos="zoom-in" className="flex flex-col items-center">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
}
