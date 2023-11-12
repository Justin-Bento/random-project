import { Link } from "react-router-dom";
// Use Link to navigate to routes
import { RiMenuLine } from "react-icons/ri";

export default function MarketingNavbar() {
  return (
    <>
      {/* Created a pannel where you can put content inside here is the pannels outline. */}
      <header className="overflow-hidden bg-white shadow">
        <section className="px-4 py-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Here is where the pannels content goes inside. */}
          <div className=" h-auto flex items-center justify-between">
            {/* Branding includes company logo with a mobile menu icon that hides on large screens. */}
            <Link
              to="/"
              aria-label="markers logo that you can click to home page"
            >
              <img
                src="/assets/logo/marker_rgb_black.svg"
                alt=""
                className="h-8 w-auto"
              />
            </Link>
            <div className="border p-2 rounded lg:hidden">
              <RiMenuLine className="w-4 h-4" />
            </div>
          </div>
          <div className="hidden lg:flex  flex-col lg:flex-row lg:items-center lg:justify-end">
            {/* 
              This section includes links to markers pages for the markering side of the application. 
              People will usually visit this page first before going into the applicaiton.
            */}
            <Link
              to="/"
              aria-label="Link to Home page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/"
              aria-label="Link to about marker page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              About
            </Link>
            <Link
              to="/"
              aria-label="Link to marker's community page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Community
            </Link>
            <Link
              to="/"
              aria-label="link to marker's donation page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Support us
            </Link>
            <Link
              to="/"
              aria-label="link to marker's new account page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-zinc-50 bg-zinc-700 hover:bg-zinc-700/80 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}
