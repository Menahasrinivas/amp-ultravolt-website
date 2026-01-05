export default function TopTextCarousel() {
  return (
    <div className="w-full bg-[#0f172a] border-b border-black/30 overflow-hidden">
      <div className="relative h-[48px] flex items-center">

        {/* ACCENT LINE */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

        {/* MARQUEE */}
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">

          <span className="mx-16 text-slate-100 font-medium tracking-wide
            text-[13px] sm:text-[14px] md:text-[15px]">
            ⚡ We undertake EPC Turnkey Projects (EHV / HV / MV Works), Solar Power upto 100MW
            and Operation & Maintenance (AMC) of Solar Power Plant & Factory etc.
          </span>

          <span className="text-cyan-400 mx-6 text-xl">|</span>

          <span className="mx-16 text-slate-100 font-medium tracking-wide
            text-[13px] sm:text-[14px] md:text-[15px]">
            🏗️ Ongoing Projects – Development of 105MW Solar Projects at ACME Cleantech
            Solutions Pvt Ltd across Karnataka: Guleddagudda (15MW), M.K.Hubli (15MW),
            Sankeshwar (15MW), Kudligi (20MW), Choranuru (20MW), Pallicheru (20MW)
          </span>

          {/* DUPLICATE */}
          <span className="mx-16 text-slate-100 font-medium tracking-wide
            text-[13px] sm:text-[14px] md:text-[15px]">
            ⚡ We undertake EPC Turnkey Projects (EHV / HV / MV Works), Solar Power upto 100MW
            and Operation & Maintenance (AMC) of Solar Power Plant & Factory etc.
          </span>
        </div>

        {/* ANIMATION */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 26s linear infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
}
