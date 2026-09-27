import Image from "next/image";
import Link from "next/link";


export default function Banner() {
  return (
    <section className="bg-[#111010] px-4 py-6 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          overflow-hidden
          rounded-[20px]
          border
          border-[#343434]
          bg-[#111010]
        "
      >
        <div className="grid min-h-[520px] grid-cols-1 items-center bg-[#111010] lg:grid-cols-2">
        
          <div className="px-8 py-14 sm:px-12 lg:px-16">
            <p className="mb-5 text-sm font-extrabold uppercase tracking-wider text-[#CFFF00]">
              Workout Library
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] text-white">
              Train With intent.log
              <br />
              every set.
            </h1>

            <p className="mt-7 max-w-[550px] text-base font-medium leading-7 text-[#9CA3AF] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              <br />
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <Link
              href="#library"
              className="
                mt-9
                inline-flex
                items-center
                rounded-md
                bg-[#CFFF00]
                px-7
                py-4
                text-sm
                font-extrabold
                uppercase
                tracking-wider
                text-[#15191C]
                transition
                hover:bg-[#b8e600]
              "
            >
              Browse Workouts
            </Link>
          </div>

  
          <div
            className="
              flex
              min-h-[350px]
              items-center
              justify-center
              bg-[#111010]
              px-4
              py-4
              sm:min-h-[400px]
              sm:px-10
              md:px-12
              lg:min-h-[500px]
              lg:justify-end
              lg:px-12
              lg:py-10
            "
          >
            <Image
              src="/banner.png"
              alt="Workout illustration"
              width={600}
              height={600}
              priority
              className="
                relative
                z-10
                h-auto
                w-full
                max-w-[460px]
                object-contain
                lg:translate-x-4
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
