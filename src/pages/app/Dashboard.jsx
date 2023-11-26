import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Dashboard() {
    // Get the userId param from the URL.
  let location = useLocation();
  return (
    <>
      <section className="min-h-screen py-16 space-y-16">
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 capitalize">{location.pathname.slice(1)}</h1>
          </div>
          <div className="mt-6">
            <ul>
              <li>
                <Link to="account">Account</Link>
              </li>
              <li>
                <Link to="folders">Folders</Link>
              </li>
              <li>
                <Link to="settings">settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
