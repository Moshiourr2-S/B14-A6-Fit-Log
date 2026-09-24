




// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// interface Workout {
//   id: number;
//   name: string;
//   image: string;
//   muscleGroups: string[];
//   equipment: string;
//   duration: number;
//   caloriesBurned: number;
//   rating: number;
// }

// export default function Library() {
//   const [workouts, setWorkouts] = useState<Workout[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchWorkouts() {
//       try {
//         const response = await fetch(
//           "https://api.abcz.workers.dev/api/fitlog"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch");
//         }

//         const data = await response.json();
//         setWorkouts(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchWorkouts();
//   }, []);

//   return (
//     <section className="w-full bg-[#0B0C0E] px-5 py-14 sm:px-8 lg:px-12 xl:px-16">
//       <div className="mx-auto w-full max-w-[1500px]">

//         {/* HEADING */}
//         <div className="mb-8">
//           <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
//             THE LIBRARY
//           </h2>

//           <p className="mt-1 text-sm text-[#777B7E] sm:text-base">
//             Twelve lifts covering every major muscle group.
//           </p>
//         </div>

//         {/* LOADING */}
//         {loading ? (
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, index) => (
//               <div
//                 key={index}
//                 className="h-[390px] animate-pulse rounded-2xl bg-[#17181C]"
//               />
//             ))}
//           </div>
//         ) : (

//           /* WORKOUT GRID */
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//             {workouts.map((workout) => (
//               <Link
//                 key={workout.id}
//                 href={`/workouts/${workout.id}`}
//                 className="
//                   group
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-[#25272A]
//                   bg-[#17181C]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-[#BFFF00]/40
//                 "
//               >

//                 {/* IMAGE */}
//                 <div className="relative h-[210px] w-full overflow-hidden sm:h-[220px] lg:h-[225px]">
//                   <img
//                     src={workout.image}
//                     alt={workout.name}
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                       transition-transform
//                       duration-500
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* CARD CONTENT */}
//                 <div className="p-5 sm:p-6">

//                   {/* TAGS */}
//                   <div className="mb-4 flex flex-wrap gap-2">
//                     {workout.muscleGroups.map((muscle) => (
//                       <span
//                         key={muscle}
//                         className="
//                           rounded-full
//                           bg-[#BFFF00]
//                           px-3
//                           py-1
//                           text-[10px]
//                           font-black
//                           uppercase
//                           tracking-wide
//                           text-black
//                         "
//                       >
//                         {muscle}
//                       </span>
//                     ))}
//                   </div>

//                   {/* TITLE */}
//                   <h3
//                     className="
//                       font-condensed
//                       text-xl
//                       font-black
//                       uppercase
//                       tracking-wide
//                       text-white
//                     "
//                   >
//                     {workout.name}
//                   </h3>

//                   {/* EQUIPMENT */}
//                   <p className="mt-1 text-xs text-[#777B7E]">
//                     {workout.equipment}
//                   </p>

//                   {/* DIVIDER */}
//                   <div className="my-5 h-px w-full bg-[#292B2E]" />

//                   {/* STATS */}
//                   <div className="flex items-center gap-4 text-xs text-[#85888B]">
//                     <span className="flex items-center gap-1.5">
//                       ◷ {workout.duration} min
//                     </span>

//                     <span className="flex items-center gap-1.5">
//                       ● {workout.caloriesBurned} kcal
//                     </span>

//                     <span className="flex items-center gap-1.5">
//                       ★ {workout.rating}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}

//           </div>
//         )}
//       </div>
//     </section>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
}

export default function Library() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <section className="w-full bg-[#0B0C0E] px-5 py-14 sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* HEADING */}
        <div className="mb-8">
          <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-1 text-sm text-[#777B7E] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[390px] animate-pulse rounded-2xl bg-[#17181C]"
              />
            ))}
          </div>
        ) : (

          /* WORKOUT GRID */
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {workouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workouts/${workout.id}`}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#25272A]
                  bg-[#17181C]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#BFFF00]/40
                "
              >

                {/* IMAGE */}
                <div className="relative h-[210px] w-full overflow-hidden sm:h-[220px] lg:h-[225px]">
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

                {/* CARD CONTENT */}
                <div className="p-5 sm:p-6">

                  {/* TAGS */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="
                          rounded-full
                          bg-[#BFFF00]
                          px-3
                          py-1
                          text-[10px]
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

                  {/* TITLE */}
                  <h3
                    className="
                      font-condensed
                      text-xl
                      font-black
                      uppercase
                      tracking-wide
                      text-white
                    "
                  >
                    {workout.name}
                  </h3>

                  {/* EQUIPMENT */}
                  <p className="mt-1 text-xs text-[#777B7E]">
                    {workout.equipment}
                  </p>

                  {/* DIVIDER */}
                  <div className="my-5 h-px w-full bg-[#292B2E]" />

                  {/* STATS */}
                  <div className="flex items-center gap-4 text-xs text-[#85888B]">
                    <span className="flex items-center gap-1.5">
                      ◷ {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5">
                      ● {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5">
                      ★ {workout.rating}
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



