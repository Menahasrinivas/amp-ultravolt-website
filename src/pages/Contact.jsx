import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="Contact AmpUltraVolt Engineers Pvt Ltd for engineering services, energy audits, solar EPC, O&M and consultancy. Reach us at our registered office in Chennai."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[55vh]">
        <img
          src="/banner/contact.webp"
          alt="Contact AmpUltraVolt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl font-semibold mb-3">
              To Reach Us
            </h1>
            <p className="text-gray-200 max-w-xl mx-auto">
              Get in touch with AmpUltraVolt Engineers for reliable engineering
              and energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      

 <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-black-200 mb-6">
              Locate Us
            </h2>

            <div className="space-y-5 text-gray-700">
              <div>
                <h3 className="font-semibold">📍 Office Address</h3>
                 <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Regd. Off.:</strong><br />
                #W339, 19th Street,<br />
                Anna Nagar West Extension,<br />
                Chennai – 600101.
              </p>
              </div>

              <div>
                <h3 className="font-semibold">📞 Call Us</h3>
                <p>9876543210</p>
              </div>

              <div>
                <h3 className="font-semibold">📧 Email</h3>
                <a
                  href="mailto:technicalengineersmd@gmail.com"
                  className="underline"
                >
                 hr@AmpUltraVolt.com
                </a>
              </div>
            </div>
          </div>
         {/* RIGHT – ENQUIRY FORM */}
<div data-aos="fade-left">
  <h2 className="text-3xl font-semibold text-[#0b1220] mb-6">
    Enquiry Form
  </h2>

  <form className="bg-white rounded-2xl p-6 shadow-lg space-y-4">

    {/* FULL NAME */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Your full name"
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          focus:outline-none
          focus:border-blue-600
          focus:ring-1 focus:ring-blue-600/30
        "
      />
    </div>

    {/* EMAIL */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Email Address
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          focus:outline-none
          focus:border-blue-600
          focus:ring-1 focus:ring-blue-600/30
        "
      />
    </div>

    {/* CONTACT */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Contact Number
      </label>
      <input
        type="tel"
        placeholder="Mobile number"
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          focus:outline-none
          focus:border-blue-600
          focus:ring-1 focus:ring-blue-600/30
        "
      />
    </div>

    {/* MESSAGE */}
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Message
      </label>
      <textarea
        rows="3"
        placeholder="Tell us about your requirement"
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          resize-none
          focus:outline-none
          focus:border-blue-600
          focus:ring-1 focus:ring-blue-600/30
        "
      ></textarea>
    </div>

    {/* SUBMIT */}
    <button
      type="submit"
      className="
        w-full
        bg-blue-600
        text-white
        py-2.5
        rounded-lg
        font-semibold
        text-sm
        hover:bg-blue-700
        transition
        shadow-md
      "
    >
      Submit Enquiry
    </button>

  </form>
</div>

        </div>
      </section>

      <Footer />
    </>
  );
}