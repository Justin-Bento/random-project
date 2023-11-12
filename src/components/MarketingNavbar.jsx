import { Link } from "react-router-dom";
// Use Link to navigate to routes
import { RiMenuLine } from "react-icons/ri";

export default function MarketingNavbar() {
  return (
    <>
      <header className="overflow-hidden rounded-lg bg-white shadow">
        <section className="px-4 py-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" h-auto flex items-center justify-between">
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
            <Link
              to="/"
              aria-label="Link to Home page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/"
              aria-label="Link to about marker page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              About
            </Link>
            <Link
              to="/"
              aria-label="Link to marker's community page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Community
            </Link>
            <Link
              to="/"
              aria-label="link to marker's donation page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Support us
            </Link>
            <Link
              to="/"
              aria-label="link to marker's new account page"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-50 bg-orange-500 hover:bg-orange-500/80 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}
