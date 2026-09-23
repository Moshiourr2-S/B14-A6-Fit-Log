import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-[1600px] overflow-hidden rounded-[20px] bg-[#26272b]">
        <div className="grid min-h-130 items-center lg:grid-cols-2">
          {/* Left side */}
          <div className="px-8 py-14 sm:px-12 lg:px-16">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-wider text-[#CFFF00]">
              Workout Library
            </p>

          <h1 className="max-w-[720px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#f4f1e8] sm:text-6xl lg:text-[68px]">
              Train With Intent.Log Every Set.
            </h1>

            <p className="mt-7 max-w-[620px] text-base font-medium leading-7 text-[#d2dd2d] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="#library" 
              className="mt-9 inline-flex items-center gap-3 rounded-md bg-[#CFFF00] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[#15191c] transitionhover:bg-[#dfff4d]"
            >
              Browse Workouts
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Right side */}
          <div className="relative flex min-h-87.5 items-center justify-center ml-80 px-8 py-10 lg:min-h-130">
            <Image src='/banner.png'
              alt="Workout illustration"
              width={600}
              height={600}
              priority
              className="relative z-10 h-auto w-full max-w-115 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
