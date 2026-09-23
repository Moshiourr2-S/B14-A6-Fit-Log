// import React from 'react';

// const Navbar = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/" || pathname === "/workouts";
  const isPlanActive = pathname === "/plan";

  return (
    <header className="w-full border-b border-white/10 bg-[#171717]">
      <nav className="mx-auto flex h-24 w-full items-center px-6 md:px-10 lg:px-14.5">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
        >
          {/* Dumbbell icon */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M8.1 11.2L11.2 8.1L21.9 18.8L18.8 21.9L8.1 11.2Z"
              fill="#CFFF00"
            />
            <path
              d="M5.4 9.4L8.2 6.6L11.8 10.2L9 13L5.4 9.4Z"
              fill="#CFFF00"
            />
            <path
              d="M18.2 19.8L21 17L24.6 20.6L21.8 23.4L18.2 19.8Z"
              fill="#CFFF00"
            />
            <path
              d="M3.8 11L6.2 8.6L9.1 11.5L6.7 13.9L3.8 11Z"
              fill="#CFFF00"
            />
            <path
              d="M20.9 18.5L23.3 16.1L26.2 19L23.8 21.4L20.9 18.5Z"
              fill="#CFFF00"
            />
          </svg>

          <span className="text-[21px] font-extrabold tracking-[-0.5px]">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <Link
            href="/workouts"
            className={`rounded-full px-5 py-2 text-[14px] font-bold transition ${
              isWorkoutsActive
                ? "bg-[#CFFF00] text-black"
                : "text-white hover:bg-white/10"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/plan"
            className={`rounded-full px-5 py-2 text-[14px] font-bold transition ${
              isPlanActive
                ? "bg-[#CFFF00] text-black"
                : "text-white hover:bg-white/10"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right side badges */}
        <div className="ml-auto flex items-center gap-7 text-[13px] font-medium">

          {/* Plan */}
          <div className="flex items-center gap-2 text-white">
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#CFFF00] px-2 text-[12px] font-bold text-black">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2 text-white">
            <span>Saved</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/30 px-2 text-[12px] font-bold text-white">
              0
            </span>
          </div>

        </div>
      </nav>
    </header>
  );
}