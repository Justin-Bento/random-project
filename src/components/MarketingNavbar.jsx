import { Link } from "react-router-dom";
// Use Link to navigate to routes

export default function MarketingNavbar() {
  return (
    <>
      <header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/conact">Contact</Link>
        </div>
      </header>
    </>
  );
}
