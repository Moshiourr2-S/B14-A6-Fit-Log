"use client";

import { useState } from "react";
import { addToPlan } from "../lib/planStore";

interface Workout {
  id: number | string;
  name: string;
  image: string;
  duration?: number;
  caloriesBurned?: number;
  difficulty?: string;
}

interface Props {
  workout: Workout;
}

export default function AddToPlanButton({ workout }: Props) {
  const [message, setMessage] = useState("");

  const handleAddToPlan = () => {
    addToPlan({
      id: workout.id,
      name: workout.name,
      image: workout.image,
      duration: workout.duration,
      calories: workout.caloriesBurned,
      difficulty: workout.difficulty,
    });

    setMessage("Added to today's plan");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex items-center justify-center gap-2 rounded-[10px] bg-[#caff00] px-7 py-3.5 text-sm font-bold text-black transition hover:brightness-95"
      >
        <span>▣</span>
        Add to today's plan
      </button>

      {message && (
        <div className="fixed bottom-6 right-6 z-50 rounded-[10px] border border-[#30343d] bg-[#151820] px-5 py-4 text-sm font-semibold text-white shadow-2xl">
          <span className="mr-2 text-[#caff00]">✓</span>
          {message}
        </div>
      )}
    </>
  );
}
