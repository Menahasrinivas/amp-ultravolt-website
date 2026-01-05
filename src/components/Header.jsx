import { useState } from "react";
import logo from "../assets/logo1.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  return (
    <header className="w-full border-b bg-slate-50 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="AMP Ultra Volt"
          className="h-16 w-auto object-contain"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-medium text-gray-800">

          {/* Company */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("company")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className="cursor-pointer hover:text-red-600">
              Company ▾
            </span>

            {dropdown === "company" && (
              <div className="absolute top-full mt-3 w-48 rounded-xl bg-[#0b1220] text-white shadow-xl">
                <a className="block px-5 py-3 hover:bg-white/10" href="#">About Us</a>
                <a className="block px-5 py-3 hover:bg-white/10" href="#">Team</a>
                <a className="block px-5 py-3 hover:bg-white/10" href="#">Certifications</a>
              </div>
            )}
          </div>

          {/* Solar */}
          <a href="#" className="hover:text-red-600 transition">
            Solar Power Plant
          </a>

          {/* Energy */}
          <a href="#" className="hover:text-red-600 transition">
            Energy Audit
          </a>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className="cursor-pointer hover:text-red-600">
              Services ▾
            </span>

            {dropdown === "services" && (
              <div className="absolute top-full mt-3 w-56 rounded-xl bg-[#0b1220] text-white shadow-xl">
                <a className="block px-5 py-3 hover:bg-white/10" href="#">EPC Services</a>
                <a className="block px-5 py-3 hover:bg-white/10" href="#">O & M Services</a>
                <a className="block px-5 py-3 hover:bg-white/10" href="#">Consultation</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-red-600">Projects</a>
          <a href="#" className="hover:text-red-600">HR</a>
          <a href="#" className="hover:text-red-600">Gallery</a>
          <a href="#" className="hover:text-red-600">Locate Us</a>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-[5px]"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full backdrop-blur-md bg-black/40">
          <ul className="flex flex-col px-6 py-6 gap-4 text-white font-medium">
            {[
              "Company",
              "Solar Power Plant",
              "Energy Audit",
              "Services",
              "Projects",
              "HR",
              "Gallery",
              "Locate Us",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md
                  transition-all duration-300
                  hover:bg-white/20 hover:text-yellow-300 hover:pl-4"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
