export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-300">
      
      {/* MAIN CONTENT */}
      <div
        className="
          max-w-7xl mx-auto px-4 py-6
          grid gap-6
          sm:grid-cols-2
          md:grid-cols-4
        "
      >

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            AMP Ultra Volt Engineers
          </h3>
          <p className="text-sm leading-relaxed">
            A reputed end-to-end EPC service provider delivering reliable,
            sustainable and cost-effective solar and electrical solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-base font-semibold text-slate-900 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-1.5 text-sm">
            {["Home", "About Us", "Services", "Projects", "Contact"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-green-600 cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-base font-semibold text-slate-900 mb-3">
            Contact Us
          </h4>

          <ul className="space-y-1.5 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <span>Tamil Nadu, India</span>
            </li>
            <li className="flex items-start gap-2">
              <span>📞</span>
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✉️</span>
              <span>info@ampultravolt.com</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h4 className="text-base font-semibold text-slate-900 mb-3">
            Connect With Us
          </h4>

          <div className="flex gap-3">
            {/* WHATSAPP */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center
                         rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              {/* whatsapp svg unchanged */}
               <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="white"
    className="w-5 h-5"
  >
    <path d="M16 2.67C8.64 2.67 2.67 8.64 2.67 16c0 2.57.77 5.07 2.23 7.2L2 30l7-2.78A13.2 13.2 0 0016 29.33c7.36 0 13.33-5.97 13.33-13.33S23.36 2.67 16 2.67zm0 24.06c-2.2 0-4.35-.6-6.22-1.74l-.45-.26-4.15 1.65 1.7-4.05-.29-.42A10.62 10.62 0 015.33 16c0-5.9 4.77-10.67 10.67-10.67S26.67 10.1 26.67 16 21.9 26.73 16 26.73zm5.86-7.73c-.32-.16-1.9-.94-2.19-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.26-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.35-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.31c.16.21 2.26 3.45 5.48 4.84.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.29-.21-.61-.37z"/>
  </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center
                         rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <svg className="w-4.5 h-4.5 text-white" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24h11.5v-9.29H9.69V11h3.13V8.41c0-3.1 1.9-4.79 4.67-4.79 1.33 0 2.48.1 2.82.14v3.26h-1.94c-1.52 0-1.82.72-1.82 1.78V11h3.64l-.47 3.71h-3.17V24h6.21c.73 0 1.33-.6 1.33-1.32V1.32C24 .6 23.4 0 22.68 0z"/>
              </svg>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:info@ampultravolt.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center
                         rounded-full bg-red-600 hover:bg-red-700 transition"
            >
              <svg className="w-4.5 h-4.5 text-white" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 13.5L0 6.75V18a2.25 2.25 0 002.25 2.25h19.5A2.25 2.25 0 0024 18V6.75L12 13.5z"/>
                <path d="M12 10.5L24 3.75A2.25 2.25 0 0021.75 1.5H2.25A2.25 2.25 0 000 3.75L12 10.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-300 text-center py-3 text-xs text-slate-600">
        © {new Date().getFullYear()} AMP Ultra Volt Engineers. All rights reserved.
      </div>
    </footer>
  );
}
