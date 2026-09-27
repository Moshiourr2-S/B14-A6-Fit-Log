"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
}

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();

        setWorkouts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <section className="w-full bg-[#0B0C0E] px-6 py-12 sm:px-8 md:px-10 lg:px-14 xl:px-20">
      <div className="mx-auto w-full max-w-[1600px]">
        {/* =========================
            LIBRARY HEADER
        ========================== */}
        <div className="mb-10">
          <h2 className="font-condensed text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-base text-[#777B7E] sm:text-lg">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* =========================
            LOADING
        ========================== */}
        {loading && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-130 animate-pulse rounded-2xl bg-[#17181C]"
              />
            ))}
          </div>
        )}

        {/* =========================
            ERROR
        ========================== */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-900/40 bg-[#17181C] p-8 text-center text-red-400">
            {error}
          </div>
        )}

        {/* =========================
            WORKOUT CARDS
        ========================== */}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workouts/${workout.id}`}
                className="
                  group
                  block
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#25272A]
                  bg-[#17181C]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#BFFF00]/50
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#BFFF00]
                "
              >
                {/* =========================
                    WORKOUT IMAGE
                ========================== */}
                <div className="relative h-67.5 w-full overflow-hidden sm:h-72.5 lg:h-75">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* =========================
                    CARD CONTENT
                ========================== */}
                <div className="p-7">
                  {/* MUSCLE GROUPS */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {workout.muscleGroups?.map((muscle) => (
                      <span
                        key={muscle}
                        className="
                          rounded-full
                          bg-[#BFFF00]
                          px-3.5
                          py-1.5
                          text-[11px]
                          font-black
                          uppercase
                          tracking-wide
                          text-black
                        "
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  {/* WORKOUT NAME */}
                  <h3
                    className="
                      font-condensed
                      text-2xl
                      font-black
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {workout.name}
                  </h3>

                  {/* EQUIPMENT */}
                  <p className="mt-2 text-sm text-[#777B7E]">
                    {workout.equipment}
                  </p>

                  {/* DIVIDER */}
                  <div className="my-6 h-px w-full bg-[#292B2E]" />

                  {/* =========================
                      STATS
                  ========================== */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#85888B]">
                    {/* DURATION */}
                    <span className="flex items-center gap-1.5">
                      <span>◷</span>
                      <span>{workout.duration} min</span>
                    </span>

                    {/* CALORIES */}
                    <span className="flex items-center gap-1.5">
                      <span>●</span>
                      <span>{workout.caloriesBurned} kcal</span>
                    </span>

                    {/* RATING */}
                    <span className="flex items-center gap-1.5">
                      <span>★</span>
                      <span>{workout.rating}</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}










