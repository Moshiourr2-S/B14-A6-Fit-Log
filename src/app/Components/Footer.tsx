





export default function Footer() {
  return (
    <footer className="w-full bg-[#111313] border-t border-[#242727] m-0 p-0">
      <div
        className="
          w-full
          min-h-30
          flex
          items-center
          justify-between
          px-7
          sm:px-8
          lg:px-7
        "
      >
    
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 7.5H6.5V14.5H3V7.5Z" fill="#B7FF00" />
            <path d="M15.5 7H19V14.5H15.5V7Z" fill="#B7FF00" />
            <path d="M6.5 5H15.5V6.5H6.5V5Z" fill="#B7FF00" />
            <path d="M1.5 9H3V13H1.5V9Z" fill="#B7FF00" />
            <path d="M19 9H20.5V13H19V9Z" fill="#B7FF00" />
          </svg>

          <span className="text-sm font-bold text-white">
            FITLOG
          </span>
        </div>

    
        <p className="text-xs font-medium text-[#858989]">
          ©️ 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

