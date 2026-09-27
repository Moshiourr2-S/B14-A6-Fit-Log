"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  getPlan,
  getSaved,
  removeFromPlan,
  removeFromSaved,
  type PlanWorkout,
} from "../lib/planStore";

type WorkoutWithRating = PlanWorkout & {
  rating?: number;
};

export default function MyPlanPage() {
  const searchParams = useSearchParams();

  const savedMode = searchParams.get("saved") === "true";

  const [plan, setPlan] = useState<PlanWorkout[]>([]);
  const [saved, setSaved] = useState<PlanWorkout[]>([]);

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Toast message
  const [toast, setToast] = useState("");

  /* =========================================
     LOAD DATA
  ========================================= */

  useEffect(() => {
    const loadData = () => {
      setPlan(getPlan());
      setSaved(getSaved());
    };

    loadData();

    window.addEventListener("fitlog-storage", loadData);

    return () => {
      window.removeEventListener("fitlog-storage", loadData);
    };
  }, []);

  /* =========================================
     CURRENT LIST
  ========================================= */

  const currentList = savedMode ? saved : plan;

  /* =========================================
     SORT
  ========================================= */

  const sortedList = useMemo(() => {
    const list = [...currentList];

    if (sortBy === "duration") {
      return list.sort((a, b) => (a.duration ?? 0) - (b.duration ?? 0));
    }

    if (sortBy === "calories") {
      return list.sort((a, b) => (a.calories ?? 0) - (b.calories ?? 0));
    }

    if (sortBy === "rating") {
      return list.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
    }

    return list;
  }, [currentList, sortBy]);

  /* =========================================
     SUMMARY
  ========================================= */

  const totalMinutes = plan.reduce(
    (total, workout) => total + (workout.duration ?? 0),
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + (workout.calories ?? 0),
    0,
  );

  /* =========================================
     SHOW TOAST
  ========================================= */

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* =========================================
     REMOVE WORKOUT
  ========================================= */

  const handleRemove = (id: number | string, name: string) => {
    if (savedMode) {
      removeFromSaved(id);

      // Update saved list immediately
      setSaved(getSaved());

      showToast(`${name} removed from saved.`);
    } else {
      removeFromPlan(id);

      // Update plan immediately
      setPlan(getPlan());

      showToast(`${name} removed from today's plan.`);
    }
  };

  /* =========================================
     MARK AS DONE
  ========================================= */

  const handleMarkAsDone = (id: number | string) => {
    removeFromPlan(id);

    setPlan(getPlan());

    showToast("Workout marked as done.");
  };

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white">
      {/* =========================================
          MAIN
      ========================================= */}

      <main className="mx-auto min-h-[calc(100vh-150px)] max-w-[1280px] px-6 py-10 md:px-10 lg:px-12">
        {/* =========================================
            TITLE
        ========================================= */}

        <div className="mb-8">
          <h1 className="text-4xl font-black uppercase tracking-tight md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-[#858994] md:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* =========================================
            SUMMARY BOX
        ========================================= */}

        <section className="mb-8 overflow-hidden rounded-[18px] border border-[#292d36] bg-[#12151c]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Exercises */}

            <div className="px-7 py-7 md:border-r md:border-[#292d36]">
              <p className="mb-2 text-sm text-[#858994]">Exercises</p>

              <p className="text-4xl font-black text-[#caff00]">
                {plan.length}
              </p>
            </div>

            {/* Minutes */}

            <div className="px-7 py-7 md:border-r md:border-[#292d36]">
              <p className="mb-2 text-sm text-[#858994]">Minutes</p>

              <p className="text-4xl font-black">{totalMinutes}</p>
            </div>

            {/* Calories */}

            <div className="px-7 py-7">
              <p className="mb-2 text-sm text-[#858994]">Calories</p>

              <p className="text-4xl font-black">{totalCalories}</p>
            </div>
          </div>
        </section>

        {/* =========================================
            TABS + SORT
        ========================================= */}

        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* TABS */}

          <div className="flex w-fit rounded-[12px] border border-[#292d36] bg-[#151820] p-1">
            <Link
              href="/my-plan"
              className={`rounded-[9px] px-5 py-2.5 text-sm font-semibold transition ${
                !savedMode
                  ? "bg-[#242934] text-white"
                  : "text-[#858994] hover:text-white"
              }`}
            >
              Today's Plan
            </Link>

            <Link
              href="/my-plan?saved=true"
              className={`rounded-[9px] px-5 py-2.5 text-sm font-semibold transition ${
                savedMode
                  ? "bg-[#242934] text-white"
                  : "text-[#858994] hover:text-white"
              }`}
            >
              Saved
            </Link>
          </div>

          {/* SORT */}

          <div className="flex items-center gap-3">
            <span className="text-sm text-[#858994]">Sort By</span>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as "duration" | "calories" | "rating",
                )
              }
              className="rounded-[10px] border border-[#292d36] bg-[#151820] px-4 py-2.5 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* =========================================
            WORKOUT LIST
        ========================================= */}

        {sortedList.length === 0 ? (
          /* EMPTY STATE */

          <section className="flex min-h-[300px] items-center justify-center rounded-[18px] border border-dashed border-[#292d36] bg-[#101319] px-6 py-16 text-center">
            <div>
              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-[#858994]">
                {savedMode
                  ? "Save some workouts for later and they will appear here."
                  : "Browse the library and add a lift to get today moving."}
              </p>

              <Link
                href="/workouts"
                className="mt-7 inline-flex rounded-full bg-[#caff00] px-7 py-3 text-sm font-bold text-black transition hover:brightness-95"
              >
                Go to workouts
              </Link>
            </div>
          </section>
        ) : (
          /* WORKOUT CARDS */

          <div className="space-y-5">
            {sortedList.map((workout) => {
              const item = workout as WorkoutWithRating;

              return (
                <article
                  key={String(workout.id)}
                  className="flex flex-col gap-5 rounded-[18px] border border-[#292d36] bg-[#12151c] p-4 transition hover:border-[#3a3f4b] md:flex-row md:items-center md:p-5"
                >
                  {/* =================================
                      IMAGE
                  ================================= */}

                  <div className="h-[150px] w-full shrink-0 overflow-hidden rounded-[12px] md:h-[92px] md:w-[165px]">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* =================================
                      INFORMATION
                  ================================= */}

                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="inline-block"
                    >
                      <h2 className="text-xl font-black uppercase tracking-tight hover:text-[#caff00]">
                        {workout.name}
                      </h2>
                    </Link>

                    <p className="mt-1 text-sm text-[#858994]">
                      {workout.difficulty ?? "Workout"}
                    </p>

                    {/* STATS */}

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#b4b6bd]">
                      {/* Duration */}

                      <span className="flex items-center gap-1.5">
                        <span className="text-[#caff00]">◷</span>
                        {workout.duration ?? 0} min
                      </span>

                      {/* Calories */}

                      <span className="flex items-center gap-1.5">
                        <span className="text-[#caff00]">♨</span>
                        {workout.calories ?? 0} kcal
                      </span>

                      {/* Rating */}

                      {item.rating !== undefined && (
                        <span className="flex items-center gap-1.5">
                          <span className="text-[#caff00]">☆</span>

                          {item.rating}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* =================================
                      ACTIONS
                  ================================= */}

                  <div className="flex shrink-0 items-center justify-end gap-3">
                    {/* VIEW DETAILS */}

                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-full border border-[#363b46] px-5 py-2.5 text-sm font-medium text-[#d5d6da] transition hover:bg-[#191c23]"
                    >
                      View Details
                    </Link>

                    {/* MARK AS DONE */}

                    {!savedMode && (
                      <button
                        type="button"
                        onClick={() => handleMarkAsDone(workout.id)}
                        className="rounded-full bg-[#caff00] px-5 py-2.5 text-sm font-bold text-black transition hover:brightness-95"
                      >
                        ✓ Mark as Done
                      </button>
                    )}

                    {/* =================================
                        REMOVE X BUTTON
                    ================================= */}

                    <button
                      type="button"
                      onClick={() => handleRemove(workout.id, workout.name)}
                      aria-label={`Remove ${workout.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#858994] transition hover:bg-[#191c23] hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* =========================================
          TOAST
      ========================================= */}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-full border border-[#3a3f46] bg-[#181b22] px-5 py-3 text-sm font-medium text-white shadow-2xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#caff00] text-sm font-black text-black">
              ✓
            </span>

            <span>{toast}</span>
          </div>
        </div>
      )}
    </div>
  );
}
