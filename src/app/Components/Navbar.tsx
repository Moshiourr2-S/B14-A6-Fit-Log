"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getPlan, getSaved } from "../lib/planStore";

export default function Navbar() {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      setPlanCount(getPlan().length);
      setSavedCount(getSaved().length);
    };

    updateCounts();

    window.addEventListener("fitlog-storage", updateCounts);
    window.addEventListener("storage", updateCounts);

    return () => {
      window.removeEventListener("fitlog-storage", updateCounts);
      window.removeEventListener("storage", updateCounts);
    };
  }, []);

  return (
    <header className="border-b border-[#28232b] bg-[#0d0d0d] text-white">
      <div className="mx-auto flex h-22.5 w-full max-w-275 items-center px-6">
        {/* ================= LEFT ================= */}
        <div className="flex flex-1  justify-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl text-white">⚒</span>

            <span className="  text-xl  font-black tracking-tight  text-white">
              FitLog
            </span>
          </Link>
        </div>

        {/* ================= CENTER ================= */}
        <nav className="flex items-center justify-center gap-8">
          <Link
            href="/workouts"
            className="rounded-full bg-[#caff00] px-4 py-2 text-sm font-medium text-black transition hover:bg-[#d8ff4d]"
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

        {/* ================= RIGHT ================= */}
        <div className="flex flex-1 items-center justify-end gap-7">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-medium text-[#d4d5da] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#caff00] px-2 text-xs font-black text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan?saved=true"
            className="flex items-center gap-2 text-sm font-medium text-[#d4d5da] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#414550] px-2 text-xs font-medium text-[#d4d5da]">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}








