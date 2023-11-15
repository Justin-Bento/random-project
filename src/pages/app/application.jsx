import { Link } from "react-router-dom";

export default function application() {
  return (
    <>
      <h1>Here is a link to all pages inside the application</h1>
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
    </>
  );
}
