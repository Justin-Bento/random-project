import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <section className="min-h-screen py-16 space-y-16">
        <div className="container mx-auto">
          <div className="">
            <h1 className="scroll-m-20 border-b capitalize pb-2 text-3xl font-semibold tracking-tight first:mt-0">Here is a link to all pages inside the application</h1>
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
