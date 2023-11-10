import { Link } from "react-router-dom";
// Use Link to navigate to routes

export default function MarketingNavbar() {
  return (
    <>
      <header>
        <img
          src="/public/assets/marker_logo_black.jpg"
          alt=""
          className="h-8 w-auto"
        />
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/conact">Contact</Link>
        </div>
      </header>
    </>
  );
}
