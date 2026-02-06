import { useState } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

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

          {/* COMPANY */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("company")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className="cursor-pointer hover:text-red-600 select-none">
              Company ▾
            </span>

            {dropdown === "company" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="h-2"></div>

                <div className="w-48 rounded-xl bg-[#0b1220] text-white shadow-xl">
                  <Link
                    to="/company/about-us"
                    className="block px-5 py-3 hover:bg-white/10"
                  >
                    About Us
                  </Link>
               <Link
               to="/company/key-management"
                   className="block px-5 py-3 hover:bg-white/10">
                   Key Management
                  </Link>
<Link
  to="/company/company-software"
  className="block px-5 py-3 hover:bg-white/10"
>
  Engineering Tools & Software
</Link>

                </div>
              </div>
            )}
          </div>
{/* SOLAR */}
<div
  className="relative"
  onMouseEnter={() => setDropdown("solar")}
  onMouseLeave={() => setDropdown(null)}
>
  <span className="cursor-pointer hover:text-red-600 transition select-none">
    Solar Power Plant ▾
  </span>

  {dropdown === "solar" && (
    <div className="absolute left-0 top-full pt-2">
      {/* Hover bridge */}
      <div className="h-2"></div>

      <div className="w-56 rounded-xl bg-[#0b1220] text-white shadow-xl">
        <Link
          to="/solar/epc"
          className="block px-5 py-3 hover:bg-white/10"
        >
          EPC
        </Link>
         <Link
          to="/solar/om"
          className="block px-5 py-3 hover:bg-white/10"
        >
          Operation & Maintenance
        </Link>
        {/* You can add later */}
        {/* <Link to="/solar/om" className="block px-5 py-3 hover:bg-white/10">
          O & M
        </Link> */}
      </div>
    </div>
  )}
</div>

          {/* ENERGY */}
          <a href="#" className="hover:text-red-600 transition">
            Energy Audit
          </a>

          {/* SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setDropdown("services")}
            onMouseLeave={() => setDropdown(null)}
          >
            <span className="cursor-pointer hover:text-red-600 select-none">
              Services ▾
            </span>

            {dropdown === "services" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="h-2"></div>

                <div className="w-56 rounded-xl bg-[#0b1220] text-white shadow-xl">
                  <a className="block px-5 py-3 hover:bg-white/10" href="#">
                    EPC Services
                  </a>
                  <a className="block px-5 py-3 hover:bg-white/10" href="#">
                    O & M Services
                  </a>
                  <a className="block px-5 py-3 hover:bg-white/10" href="#">
                    Consultation
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-red-600">Projects</a>
          <a href="#" className="hover:text-red-600">HR</a>
          <a href="#" className="hover:text-red-600">Gallery</a>
          <a href="#" className="hover:text-red-600">Locate Us</a>
        </nav> {/* ✅ NAV CLOSED PROPERLY */}

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

      {/* COMPANY */}
      <li>
        <button
          onClick={() =>
            setDropdown(dropdown === "company" ? null : "company")
          }
          className="w-full text-left px-3 py-2 rounded-md
          transition-all duration-300
          hover:bg-white/20 hover:text-yellow-300"
        >
          Company ▾
        </button>

        {dropdown === "company" && (
          <div className="ml-4 mt-2 space-y-2 text-sm">
            <Link
              to="/company/about-us"
              onClick={() => {
                setDropdown(null);
                setOpen(false);
              }}
              className="block px-3 py-2 hover:text-yellow-300"
            >
              About Us
            </Link>

            <Link
              to="/company/key-management"
              onClick={() => {
                setDropdown(null);
                setOpen(false);
              }}
              className="block px-3 py-2 hover:text-yellow-300"
            >
              Key Management
            </Link>

            <Link
              to="/company/company-software"
              onClick={() => {
                setDropdown(null);
                setOpen(false);
              }}
              className="block px-3 py-2 hover:text-yellow-300"
            >
              Engineering Tools & Software
            </Link>
          </div>
        )}
      </li>

      {/* SOLAR POWER PLANT */}
      <li>
        <button
          onClick={() =>
            setDropdown(dropdown === "solar" ? null : "solar")
          }
          className="w-full text-left px-3 py-2 rounded-md
          transition-all duration-300
          hover:bg-white/20 hover:text-yellow-300"
        >
          Solar Power Plant ▾
        </button>

        {dropdown === "solar" && (
          <div className="ml-4 mt-2 space-y-2 text-sm">
            <Link
              to="/solar/epc"
              onClick={() => {
                setDropdown(null);
                setOpen(false);
              }}
              className="block px-3 py-2 hover:text-yellow-300"
            >
              EPC
            </Link>
            
     <Link
      to="/solar/om"
      onClick={() => {
        setDropdown(null);
        setOpen(false);
      }}
      className="block px-3 py-2 hover:text-yellow-300"
    >
      Operation & Maintenance
    </Link>
          </div>
        )}
      </li>

      {/* NORMAL LINKS */}
      {[
        { name: "Energy Audit", path: "/energy-audit" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "HR", path: "/hr" },
        { name: "Gallery", path: "/gallery" },
        { name: "Locate Us", path: "/contact" },
      ].map((item) => (
        <li key={item.name}>
          <Link
            to={item.path}
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md
            transition-all duration-300
            hover:bg-white/20 hover:text-yellow-300 hover:pl-4"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

      
    </header>
  );
}
