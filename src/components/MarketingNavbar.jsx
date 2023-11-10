import { Link } from "react-router-dom";
// Use Link to navigate to routes

export default function MarketingNavbar() {
  return (
    <>
      <header className="p-4 bg-gray-50 shadow">
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-start lg:justify-between">
          <Link to="/">
            <img
              src="/assets/logo/marker_rgb_black.svg"
              alt=""
              className="h-8 w-auto"
            />
          </Link>
          <nav className="flex flex-col lg:flex-row items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/conact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
