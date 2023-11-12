import { Link } from "react-router-dom";
// Use Link to navigate to routes
import { RiMenuLine } from "react-icons/ri";

export default function MarketingNavbar() {
  return (
    <>
      <header className="overflow-hidden rounded-lg bg-white shadow">
        <section className="px-4 py-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className=" h-auto flex items-center justify-between">
            <Link to="/">
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
          <div className="flex items-center lg:justify-end gap-4">
            <Link
              to="/"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              About
            </Link>
            <Link
              to="/"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Community
            </Link>
            <Link
              to="/"
              className="rounded bg-transparent px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-zinc-100 transition-colors"
            >
              Support us
            </Link>
            <Link
              to="/"
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
