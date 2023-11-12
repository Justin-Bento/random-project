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
          <div className=" h-auto"></div>
        </section>
      </header>
    </>
  );
}
