import { Link } from "react-router-dom";
import { RiFocus2Line, RiLayoutRowLine, RiDeviceLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="relative mb-16 space-y-32 my-32">
      <section className="grid grid-cols-1 lg:grid-cols-2 container mx-auto items-center place-content-center gap-12 p-6 lg:p-0">
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
      <section className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-8 p-4 lg:p-0">
        <div className="w-full space-y-2">
          <RiLayoutRowLine className="w-8 h-8" />
          <h2 className="text-lg font-bold">Unified Resource Hub.</h2>
          <p className=" leading-7 tracking-wide text-gray-700">
            Access new website based of your saved websites, tools, and in one
            organized space. Marker simplifies your digital surfing life, making
            it easy to find and new resources.
          </p>
        </div>
        <div className="w-full space-y-2">
          <RiFocus2Line className="w-8 h-8" />
          <h2 className="text-lg font-bold">Recommendation Engine.</h2>
          <p className=" leading-7 tracking-wide text-gray-700">
            Discover new resources tailored to your interests and project needs.
            Our suggestions are based of the folder so you&#39;e always in the know
            about the most relevant content
          </p>
        </div>
        <div className="w-full space-y-2">
          <RiDeviceLine className="w-8 h-8" />
          <h2 className="text-lg font-bold">Collaboration Made Easy.</h2>
          <p className=" leading-7 tracking-wide text-gray-700">
            Share collections of resources with your team or collaborators,
            making it a breeze to work together, gather feedback, and stay in
            sync on your creative endeavors.
          </p>
        </div>
      </section>
      <section className="bg-orange-500 py-12">
        <div className="flex container flex-col gap-8 p-6 lg:flex-row mx-auto text-gray-50">
          <div className="w-full flex items-start justify-center flex-col">
            <h3 className="mb-2 text-2xl font-semibold tracking-normal">
              Real Stories, Real Experiences, Real Reviews
            </h3>
            <p className="tracking-wide leading-7 opacity-80 max-w-[100ch]">
              Explore the reviews and join the conversation. It&apos;s time to
              make an informed decision with the help of those who have
              experienced our products firsthand. Read, learn, and be inspired
              by the authentic reviews that shape our product offerings.
            </p>
          </div>
          <div className="flex items-center lg:justify-end">
            <button
              type="button"
              className="rounded-md w-full bg-orange-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 whitespace-nowrap"
            >
              Button text
            </button>
          </div>
        </div>
      </section>
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
