
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isWorkoutsActive =
    pathname === "/" || pathname === "/workouts";

  const isPlanActive = pathname === "/plan";

  return (
    <header className="w-full border-b border-white/10 bg-[#0e0e0e]">
      <nav
        className="
          mx-auto
          grid
          min-h-19
          w-full
          grid-cols-[auto_1fr_auto]
          items-center
          px-4
          sm:px-6
          md:min-h-21
          md:px-8
          lg:min-h-24
          lg:px-[6%]
        "
      >
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white"
        >
          {/* Dumbbell Icon */}
          <svg
            width="30"
            
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
          >
            <path
              d="M8.1 11.2L11.2 8.1L21.9 18.8L18.8 21.9L8.1 11.2Z"
              fill="#C2F800"
            />

            <path
              d="M5.4 9.4L8.2 6.6L11.8 10.2L9 13L5.4 9.4Z"
              fill="#C2F800"
            />

            <path
              d="M18.2 19.8L21 17L24.6 20.6L21.8 23.4L18.2 19.8Z"
              fill="#C2F800"
            />

            <path
              d="M3.8 11L6.2 8.6L9.1 11.5L6.7 13.9L3.8 11Z"
              fill="#C2F800"
            />

            <path
              d="M20.9 18.5L23.3 16.1L26.2 19L23.8 21.4L20.9 18.5Z"
              fill="#C2F800"
            />
          </svg>

          <span
            className="
              text-[18px]
              font-extrabold
              tracking-[-0.5px]
              
              sm:text-[20px]
              lg:text-[21px]
            "
          >
            FITLOG
          </span>
        </Link>

        {/* ================= CENTER NAV ================= */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-1.5
            sm:gap-2
            md:gap-3
            lg:gap-4
          "
        >
          {/* Workouts */}
          <Link
            href="/workouts"
            className={`
              flex
              h-9
              items-center
              justify-center
              rounded-full
              px-3
              text-[12px]
              font-bold
              whitespace-nowrap
              transition-all
              duration-200

              sm:h-10
              sm:px-4
              sm:text-[13px]

              md:px-5
              md:text-[14px]

              lg:px-6
              lg:text-[14px]

              ${
                isWorkoutsActive
                  ? "bg-[#1A2312] text-[#C2F800]"
                  : "text-white hover:bg-white/10"
              }
            `}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/plan"
            className={`
              flex
              h-9
              items-center
              justify-center
              rounded-full
              px-3
              text-[12px]
              font-bold
              whitespace-nowrap
              transition-all
              duration-200

              sm:h-10
              sm:px-4
              sm:text-[13px]

              md:px-5
              md:text-[14px]

              lg:px-6
              lg:text-[14px]

              ${
                isPlanActive
                  ? "bg-[#C2F800] text-black"
                  : "text-white hover:bg-white/10"
              }
            `}
          >
            My Plan
          </Link>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            flex
            items-center
            justify-end
            gap-3
            text-[11px]
            font-medium
            sm:gap-4
            sm:text-[12px]
            md:gap-5
            md:text-[13px]
            lg:gap-7
          "
        >
          {/* Plan Counter */}
          <div className="flex items-center gap-1.5 text-white sm:gap-2">
            <span>Plan</span>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-[#C2F800]
                px-1.5
                text-[10px]
                font-bold
                text-black
                sm:h-6
                sm:min-w-6
                sm:text-[12px]
              "
            >
              0
            </span>
          </div>

          {/* Saved Counter */}
          <div className="flex items-center gap-1.5 text-white sm:gap-2">
            <span>Saved</span>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                px-1.5
                text-[10px]
                font-bold
                text-white
                sm:h-6
                sm:min-w-6
                sm:text-[12px]
              "
            >
              0
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}



