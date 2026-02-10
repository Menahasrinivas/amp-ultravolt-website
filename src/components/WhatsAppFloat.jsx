export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999" // 🔁 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 z-50
        flex md:hidden     /* 👈 MOBILE ONLY */
        items-center justify-center
        w-14 h-14
        rounded-full
        bg-green-500
        shadow-lg
        hover:bg-green-600
        transition-transform duration-300
        active:scale-95
      "
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
      >
        <path d="M16.04 2.003c-7.71 0-13.98 6.27-13.98 13.98 0 2.46.65 4.86 1.88 6.98L2 30l7.23-1.9c2.02 1.1 4.3 1.68 6.81 1.68 7.71 0 13.98-6.27 13.98-13.98S23.75 2.003 16.04 2.003zm7.95 19.64c-.34.96-1.67 1.84-2.74 2.07-.74.15-1.7.27-4.95-1.07-4.16-1.73-6.85-5.96-7.06-6.23-.2-.27-1.68-2.23-1.68-4.26 0-2.03 1.06-3.03 1.44-3.44.38-.41.83-.51 1.1-.51.27 0 .55 0 .79.01.25.01.59-.09.93.71.34.81 1.17 2.8 1.27 3.01.1.21.17.46.03.74-.14.27-.21.46-.41.71-.2.25-.43.56-.62.75-.2.2-.4.42-.17.83.23.41 1.01 1.67 2.17 2.7 1.49 1.33 2.74 1.74 3.15 1.93.41.2.65.17.9-.1.25-.27 1.03-1.2 1.31-1.62.28-.41.55-.34.93-.2.38.14 2.39 1.13 2.8 1.34.41.21.69.31.79.48.1.17.1.99-.24 1.95z"/>
      </svg>
    </a>
  );
}