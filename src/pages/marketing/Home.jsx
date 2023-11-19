import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative">
      <section className="grid grid-cols-1 lg:grid-cols-2 py-12 min-h-screen">
        <div className="flex items-center">
          <FramerShapes />
        </div>
        <div className="flex items-start justify-center flex-col max-w-[100ch] relative">
          <h1 className="font-display text-5xl font-semibold tracking-normal text-neutral-950 sm:text-6xl">
            Unlock a Smarter Web Experience with Marker!
          </h1>
          <p className="leading-7 mt-4 text-xl tracking-wide mb-5">
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
      <div className="absolute top-40 -left-20 -z-10 w-[90%] pointer-events-none min-h-screen blur-hero bg-gradient-to-r from-orange-200 to-transparent rotate-12"></div>
    </div>
  );
}

export function FramerShapes() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[503px] rotate-90"
    >
      <g clipPath="url(#clip0_231_82)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0C0 55.2285 44.7715 100 100 100C44.7715 100 0 144.772 0 200H12C12 151.399 51.3989 112 100 112C148.601 112 188 151.399 188 200H200C200 144.772 155.228 100 100 100C155.228 100 200 55.2285 200 0H188C188 48.6011 148.601 88 100 88C51.3989 88 12 48.6011 12 0H0ZM24 0C24 41.9736 58.0264 76 100 76C141.974 76 176 41.9736 176 0H164C164 35.3462 135.346 64 100 64C64.6538 64 36 35.3462 36 0H24ZM48 0C48 28.7188 71.2812 52 100 52C128.719 52 152 28.7188 152 0H140C140 22.0914 122.091 40 100 40C77.9086 40 60 22.0914 60 0H48ZM100 124C141.974 124 176 158.026 176 200H164C164 164.654 135.346 136 100 136C64.6538 136 36 164.654 36 200H24C24 158.026 58.0264 124 100 124ZM100 148C128.719 148 152 171.281 152 200H140C140 177.909 122.091 160 100 160C77.9086 160 60 177.909 60 200H48C48 171.281 71.2812 148 100 148Z"
          fill="url(#paint0_linear_231_82)"
        />{" "}
      </g>{" "}
      <defs>
        {" "}
        <linearGradient
          id="paint0_linear_231_82"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          {" "}
          <stop stopColor="#fdba74" /> <stop offset="1" stopColor="#ea580c" />{" "}
        </linearGradient>{" "}
        <clipPath id="clip0_231_82">
          {" "}
          <rect width="200" height="200" fill="white" />{" "}
        </clipPath>{" "}
      </defs>{" "}
    </svg>
  );
}
