import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          <div className="flex items-center justify-center">
            <svg
              width="503"
              height="503"
              viewBox="0 0 503 503"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M440.595 202.994H243.72C225.2 202.994 210.187 218.007 210.187 236.527V433.402C210.187 451.921 225.2 466.935 243.72 466.935H440.595C459.114 466.935 474.128 451.921 474.128 433.402V236.527C474.128 218.007 459.114 202.994 440.595 202.994Z"
                fill="#F7632D"
              />
              <path
                opacity="0.25"
                d="M159.736 29.1572H53.1168C43.8568 29.1572 36.3501 36.6639 36.3501 45.9239V152.543C36.3501 161.803 43.8568 169.31 53.1168 169.31H159.736C168.996 169.31 176.503 161.803 176.503 152.543V45.9239C176.503 36.6639 168.996 29.1572 159.736 29.1572Z"
                fill="#FA5D23"
              />
              <path
                opacity="0.5"
                d="M317.007 99.2419H131.568C117.678 99.2419 106.418 110.502 106.418 124.392V309.831C106.418 323.721 117.678 334.981 131.568 334.981H317.007C330.897 334.981 342.157 323.721 342.157 309.831V124.392C342.157 110.502 330.897 99.2419 317.007 99.2419Z"
                fill="#FA5D23"
              />
            </svg>
          </div>
          <div className="max-w-[100ch] flex flex-col items-start justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Unlock a Smarter Web Experience with Marker!
            </h1>
            <p className="mt-4 text-md leading-7 tracking-wide text-zinc-600">
              Are you tired of sifting through countless websites and losing
              track of your favorites? Marker is here to simplify your online
              life by centralizing your resources and helping you discover new
              ones all in one place.
            </p>
            <div className="mt-10 flex items-center  gap-x-6">
              <Link
                to="/app"
                className="rounded-md bg-transparent border px-3.5 py-2 text-sm font-semibold text-zince-700  hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Get started Organizing Your Digital World!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
