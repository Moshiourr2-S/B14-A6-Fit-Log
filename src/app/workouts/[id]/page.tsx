import Link from "next/link";

import AddToPlanButton from "../../Components/AddToPlanButton";
import SaveForLaterButton from "../../Components/SaveForLaterButton";

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

async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const response = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    const workout = data?.data ?? data;

    return workout;
  } catch (error) {
    console.error("Error loading workout:", error);

    return null;
  }
}

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#0d0f14] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <h1 className="mb-5 text-3xl font-extrabold">Workout not found</h1>

          <p className="mb-8 text-gray-400">We couldn't find this workout.</p>

          <Link
            href="/workouts"
            className="rounded-full bg-[#caff00] px-6 py-3 font-bold text-black transition hover:opacity-90"
          >
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f14] text-white">
      <section className="mx-auto max-w-305 px-6 py-12 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* IMAGE */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[14px]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-105 w-full object-cover sm:h-[500px] lg:h-[700px]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-1px] sm:text-5xl lg:text-[48px]">
              {workout.name}
            </h1>

            <p className="mt-5 max-w-155 text-[16px] leading-7 text-[#9b9da5]">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#caff00] px-4 py-1.5 text-sm font-bold text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-7 overflow-hidden rounded-[16px] border border-[#282c35] bg-[#151820]">
              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Equipment
                </span>

                <span className="text-sm text-[#d9d9dc]">
                  {workout.equipment}
                </span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Difficulty
                </span>

                <span className="text-sm text-[#d9d9dc]">
                  {workout.difficulty}
                </span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Sets
                </span>

                <span className="text-sm text-[#d9d9dc]">{workout.sets}</span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Reps
                </span>

                <span className="text-sm text-[#d9d9dc]">{workout.reps}</span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Duration
                </span>

                <span className="text-sm text-[#d9d9dc]">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between border-b border-[#282c35] px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Calories
                </span>

                <span className="text-sm text-[#d9d9dc]">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex min-h-[60px] items-center justify-between px-6">
                <span className="text-xs font-bold uppercase tracking-wide text-[#858994]">
                  Rating
                </span>

                <span className="text-sm text-[#d9d9dc]">{workout.rating}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-extrabold uppercase">Instructions</h2>

              <div className="mt-4 space-y-3">
                {workout.instructions?.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-4 text-[14px] leading-6 text-[#c3c5ca]"
                  >
                    <span className="min-w-[18px] font-medium text-[#aeb0b7]">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AddToPlanButton workout={workout} />

              <SaveForLaterButton workout={workout} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
