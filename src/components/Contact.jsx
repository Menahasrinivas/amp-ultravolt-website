export default function Contact() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* CONTENT */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Power Your Project?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Get in touch with our expert team to discuss your solar, electrical
            or energy efficiency requirements. We are ready to deliver reliable
            and sustainable solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919999999999"
              className="px-8 py-3 bg-green-600 rounded-md font-medium
                         hover:bg-white-700 transition"
            >
              Call Us Now
            </a>

           
          </div>
        </div>

      </div>
    </section>
  );
}
