import aboutImg from "/images/about-us.webp";

export default function About() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center order-2 md:order-1">

        {/* IMAGE SIDE */}
        <div
          data-aos="fade-right"
          className="overflow-hidden rounded-xl order-2 md:order-1"
        >
          <img
            src={aboutImg}
            alt="About Company"
            className="w-full h-full object-cover
                       transition-transform duration-500
                       hover:scale-105"
          />
        </div>

        {/* CONTENT SIDE */}
        <div data-aos="fade-left" className="order-1 md:order-2">  
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-justify">
            <strong>AmpUltraVolt</strong> is a reputed end-to-end service provider
            of Solar Power Plants, offering complete solutions right from
            Energy Audit, Energy Conservation Measures (ECM),
            Engineering – Procurement – Construction (EPC),
            and Operation & Maintenance (O&M).
          </p>

          <p className="text-gray-600 leading-relaxed mb-4 text-justify">
            In addition to specializing in Solar Power, we also undertake
            Wind Power projects, Transmission Line execution,
            Sub-station Detailed Engineering, Power System Studies,
            and Insulation Coordination Studies.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-justify">
            Our team of highly experienced engineers, combined with years of
            industry expertise, gives us a competitive edge in consistently
            meeting and exceeding the expectations of our valued customers.
          </p>

</div>
      </div>
    </section>
  );
}
