import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Gallery() {

  // ✅ STATE FOR IMAGE ZOOM
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Gallery | AmpUltraVolt Engineers Pvt Ltd</title>
        <meta
          name="description"
          content="Explore the project gallery of AmpUltraVolt Engineers showcasing engineering projects, site inspections, audits and execution excellence across various facilities."
        />
      </Helmet>

      <Header />

      {/* ================= PAGE BANNER ================= */}
      <section className="relative h-[50vh]">
        <img
          src="/banner/gallery-two.webp"
          alt="AmpUltraVolt Project Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl font-semibold mb-3">
              Our Gallery
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Explore a visual showcase of our engineering projects, site
              inspections, audits and field activities demonstrating our
              technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-20 bg-[#f7faf9]">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-[#0b1220] mb-3">
              Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse of our engineering projects, site inspections and audit
              activities carried out across various facilities.
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "gallery/gallery17.jpg",
              "gallery/gallery25.jpg",
              "gallery/gallery3.webp",
              "gallery/gallery28.jpg",
            ].map((img, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="
                    w-full h-[220px] object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= IMAGE ZOOM MODAL ================= */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute top-6 right-6
              text-white text-4xl
              hover:text-red-400
              transition
            "
          >
            &times;
          </button>

          {/* ZOOM IMAGE */}
          <div data-aos="zoom-in" className="max-w-5xl w-full">
            <img
              src={selectedImage}
              alt="Gallery Zoom"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}