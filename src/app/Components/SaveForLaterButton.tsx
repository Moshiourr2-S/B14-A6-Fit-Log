


"use client";

import { useState } from "react";
import {
  getSaved,
  removeFromSaved,
  saveForLater,
} from "../lib/planStore";

interface Workout {
  id: number | string;
  name: string;
  image: string;
  description: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  instructions?: string[];
}

interface SaveForLaterButtonProps {
  workout: Workout;
}

export default function SaveForLaterButton({
  workout,
}: SaveForLaterButtonProps) {
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return getSaved().some(
      (item) => String(item.id) === String(workout.id)
    );
  });

  const [toast, setToast] = useState<string | null>(null);

  const handleSave = () => {
    if (saved) {
      removeFromSaved(workout.id);

      setSaved(false);
      setToast("Removed from saved");
    } else {
      saveForLater({
        id: workout.id,
        name: workout.name,
        image: workout.image,
        duration: workout.duration,
        calories: workout.caloriesBurned,
        difficulty: workout.difficulty,
      });

      setSaved(true);
      setToast("Saved for later");
    }

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSave}
        className={`flex items-center justify-center gap-2 rounded-[10px] border px-7 py-3.5 text-sm font-medium transition active:scale-[0.98] ${
          saved
            ? "border-[#caff00] bg-[#191d12] text-[#caff00]"
            : "border-[#414550] bg-transparent text-[#d5d6da] hover:bg-[#191c23]"
        }`}
      >
        <span className="text-base">
          {saved ? "♥️" : "♡"}
        </span>

        <span>
          {saved ? "Saved" : "Save for later"}
        </span>
      </button>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-9999 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-xl border border-[#30343d] bg-[#171a21] px-5 py-3.5 shadow-2xl">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#caff00] font-bold text-black">
              ✓
            </div>

            <span className="whitespace-nowrap text-sm font-semibold text-white">
              {toast}
            </span>
          </div>
        </div>
      )}
    </>
  );
}