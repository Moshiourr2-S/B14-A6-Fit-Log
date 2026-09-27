"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPlan, getSaved } from "../lib/planStore";

export default function Navbar() {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  const updateCounts = () => {
    setPlanCount(getPlan().length);
    setSavedCount(getSaved().length);
  };

  useEffect(() => {
    updateCounts();

    const handleStorageChange = () => {
      updateCounts();
    };

    window.addEventListener("fitlog-storage", handleStorageChange);

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("fitlog-storage", handleStorageChange);

      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <header className="border-b border-[#20232b] bg-[#0d0f14] text-white">
      <div className="mx-auto flex min-h-18.5 max-w-305 items-center justify-between px-6 md:px-10 lg:px-12">
        {/* =========================================
            LOGO
        ========================================= */}

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl text-[#caff00]">⚒</span>

          <span className="text-xl font-black tracking-tight">FITLOG</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/workouts"
            className="text-sm font-medium text-[#d4d5da] transition hover:text-[#caff00]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-[#d4d5da] transition hover:text-[#caff00]"
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/my-plan"
            className="group flex items-center gap-2 text-sm font-medium text-[#d4d5da] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#caff00] px-2 text-xs font-black text-black transition group-hover:scale-105">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan?saved=true"
            className="group flex items-center gap-2 text-sm font-medium text-[#d4d5da] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#414550] px-2 text-xs font-medium text-[#d4d5da] transition group-hover:border-[#caff00] group-hover:text-[#caff00]">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
