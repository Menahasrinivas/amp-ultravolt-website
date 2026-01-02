import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menus = [
    "Company",
    "Solar Power Plant",
    "Energy Audit",
    "Services",
    "Projects",
    "HR",
    "Gallery",
    "Locate Us",
  ];

  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="AMP Ultra Volt"
          className="h-14 w-auto object-contain"
        />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8 text-[15px] font-medium text-gray-800">
          {menus.map((item, i) => (
            <a key={i} href="#" className="hover:text-red-600 transition">
              {item}
            </a>
          ))}
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

      {/* MOBILE MENU – TRANSPARENT */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full backdrop-blur-md bg-black/40">
          <ul className="flex flex-col px-6 py-6 gap-4 text-white font-medium">
            {menus.map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md
           transition-all duration-300
           hover:bg-white/20 hover:text-yellow-300 hover:pl-4
           active:bg-white/30 active:text-yellow-300 active:pl-4
           cursor-pointer"
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
