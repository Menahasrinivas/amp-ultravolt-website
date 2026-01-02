export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            AMP Ultra Volt Engineers
          </h3>
          <p className="text-sm leading-relaxed">
            A reputed end-to-end EPC service provider delivering reliable,
            sustainable and cost-effective solar and electrical solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-600 cursor-pointer transition">Home</li>
            <li className="hover:text-green-600 cursor-pointer transition">About Us</li>
            <li className="hover:text-green-600 cursor-pointer transition">Services</li>
            <li className="hover:text-green-600 cursor-pointer transition">Projects</li>
            <li className="hover:text-green-600 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">
            Contact Us
          </h4>
          <p className="text-sm mb-2">📍 Tamil Nadu, India</p>
          <p className="text-sm mb-2">📞 +91 99999 99999</p>
          <p className="text-sm">✉️ info@ampultravolt.com</p>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h4 className="text-lg font-semibold text-slate-900 mb-4">
            Connect With Us
          </h4>

          <div className="flex gap-4">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center
                         rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M12 2C6.48 2 2 6.04 2 11.02c0 2.11.87 4.05 2.3 5.53L2 22l5.7-2.5c1.36.4 2.8.63 4.3.63 5.52 0 10-4.04 10-9.02S17.52 2 12 2z"/>
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center
                         rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24h11.5v-9.29H9.69V11h3.13V8.41c0-3.1 1.9-4.79 4.67-4.79 1.33 0 2.48.1 2.82.14v3.26h-1.94c-1.52 0-1.82.72-1.82 1.78V11h3.64l-.47 3.71h-3.17V24h6.21c.73 0 1.33-.6 1.33-1.32V1.32C24 .6 23.4 0 22.68 0z"/>
              </svg>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@ampultravolt.com"
              className="w-10 h-10 flex items-center justify-center
                         rounded-full bg-red-600 hover:bg-red-700 transition"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 13.5L0 6.75V18a2.25 2.25 0 002.25 2.25h19.5A2.25 2.25 0 0024 18V6.75L12 13.5z"/>
                <path d="M12 10.5L24 3.75A2.25 2.25 0 0021.75 1.5H2.25A2.25 2.25 0 000 3.75L12 10.5z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-300 text-center py-4 text-sm text-slate-600">
        © {new Date().getFullYear()} AMP Ultra Volt Engineers. All rights reserved.
      </div>
    </footer>
  );
}
