import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative">
      <section className="grid grid-cols-1 lg:grid-cols-2 container mx-auto items-center place-content-center gap-12 min-h-screen p-6 lg:p-0">
        <div className="flex items-center place-content-start lg:place-content-start lg:mt-0">
          <FramerShapes />
        </div>
        <div className="flex items-start justify-center flex-col max-w-[100ch] relative">
          <h1 className="font-display font-semibold tracking-normal text-neutral-950 text-4xl xl:text-5xl">
            Unlock a Smarter Web Experience with Marker!
          </h1>
          <p className="leading-7 mt-4 text-base xl:text-xl tracking-wide mb-5">
            Are you tired of sifting through countless websites and losing track
            of your favorites? Marker is here to simplify your online life by
            centralizing your resources and helping you discover new ones all in
            one place.
          </p>
          <Link
            to="/dashboard"
            className="rounded-md bg-transparent z-10 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-orange-50"
          >
            Organize Your Digital World Today
          </Link>
        </div>
      </section>
      <div className="absolute top-lg xl:top-40 left-0 xl:-left-20 -z-10 xl:w-[90%] pointer-events-none xl:min-h-screen blur-hero bg-gradient-to-r from-orange-200 to-transparent xl:rotate-12"></div>
    </div>
  );
}

export function FramerShapes() {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[200px] lg:w-[400px] aspect-square"
      >
        <g clipPath="url(#clip0_238_1296)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z"
            fill="url(#paint0_linear_238_1296)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_238_1296"
            x1="20.5"
            y1="16"
            x2="100"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fdba74" />
            <stop offset="1" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
