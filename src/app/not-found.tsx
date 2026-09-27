import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0d0f14] text-white">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-175 text-center">

          {/* 404 */}
          <h1 className="text-[120px] font-black leading-none text-[#caff00] md:text-[180px]">
            404
          </h1>

          {/* TITLE */}
          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            PAGE NOT FOUND
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-125 text-sm leading-6 text-[#858994] md:text-base">
            The page you are looking for does not exist or the URL is
            incorrect.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/"
              className="rounded-full bg-[#caff00] px-7 py-3.5 text-sm font-bold uppercase text-black hover:brightness-95"
            >
              Go Home
            </Link>

            <Link
              href="/workouts"
              className="rounded-full border border-[#363b46] bg-[#151820] px-7 py-3.5 text-sm font-semibold uppercase text-white hover:border-[#caff00] hover:text-[#caff00]"
            >
              Browse Workouts
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}