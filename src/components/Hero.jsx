import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import banner1 from "/banner/hero-banner1.webp";
import banner2 from "/banner/hero-banner2.webp";
import banner3 from "/banner/banner-img3.webp";
import banner4 from "/banner/hero-banner3.webp";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
<section className="relative h-[75vh] overflow-hidden flex items-center justify-center">

      {/* IMAGE CAROUSEL */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {[banner1, banner2, banner3, banner4].map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Banner ${i + 1}`}
              className="h-full w-full object-cover flex-shrink-0 brightness-110 contrast-110"
               style={{ imageRendering: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div
          className="text-center text-white px-4 max-w-4xl"
          data-aos="fade-up"
        >

          {/* TEXT SLIDER */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
            direction="vertical"
            className="h-24 mb-4"
          >
            <SwiperSlide>
              <h1 className="text-2xl md:text-4xl font-bold">
                We Undertake EPC Turnkey Projects
              </h1>
            </SwiperSlide>

            <SwiperSlide>
              <h1 className="text-2xl md:text-4xl font-bold">
                Solar • Electrical • Energy Audit Experts
              </h1>
            </SwiperSlide>
          </Swiper>

          <p className="text-gray-200 text-sm md:text-lg leading-relaxed">
            Delivering reliable, sustainable and cost-effective energy solutions.
          </p>

          <div className="mt-8 flex justify-center">
  <Link
    to="/contact"
    className="
      px-8 py-3
      bg-green-600
      text-white
      font-medium
      rounded-md
      hover:bg-green-700
      transition
    "
  >
    Connect With Us
  </Link>
</div>
        </div>
      </div>

    </section>
  );
}
