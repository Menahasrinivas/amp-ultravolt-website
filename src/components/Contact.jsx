import contactBg from "/images/contact-bg.webp";

export default function Contact() {
  return (
    <section
      className="
        py-10 md:py-12 text-white
        bg-cover bg-center bg-no-repeat
        bg-fixed
        relative
      "
      style={{
        backgroundImage: `
          linear-gradient(rgba(17,24,39,0.55), rgba(17,24,39,0.55)),
          url(${contactBg})
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* CONTENT */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Power Your Project?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-5 text-justify">
            Get in touch with our expert team to discuss your solar, electrical
            or energy efficiency requirements. We are ready to deliver reliable
            and sustainable solutions.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center">
            <a
              href="tel:+919999999999"
              className="
                px-8 py-2.5 bg-green-600 rounded-md font-medium
                hover:bg-green-700 transition
              "
            >
              Call Us Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
